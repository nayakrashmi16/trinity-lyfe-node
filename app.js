"use strict";

/*
    Requiring our dependencies
 */

/*
    Requiring 3rd party dependencies
 */
const cors = require('cors');
const express = require('express');
const expressFileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const session = require('express-session');


/*
    Requiring response object templates
 */
const loginResponse = require("./response-object-templates/loginResponse");
const signupResponse = require("./response-object-templates/signupResponse");
const postUploadResponse = require("./response-object-templates/postUploadResponse");
const postResponse = require("./response-object-templates/postResponse");
const likeResponse = require("./response-object-templates/likeResponse");
const commentResponse = require("./response-object-templates/commentsResponse");
const userResponse = require("./response-object-templates/userResponse");

/*
    Requiring utility and database query functions
 */
const utilityFunctions = require('./utility-functions/utilityFunctions');
const queryFunctions = require('./database-functions/queryFunctions');

/*
    Create our express object
 */
let app = express();

/*
    Associating Body Parser, File upload and CORS modules
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressFileUpload());
app.use(cors({origin: '*', credentials: true}));

/*
    Configure the static directory
 */
app.use(express.static("static/public"));


/*
    Configure port
 */
let port = 9000;

/*
    Configure Max Session Age
 */
let maxSessionAge = 3000000;

/*
    Variable to store current session
 */
let currentSession;

/*
    Configuring our session options
 */
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: {maxAge: maxSessionAge},
    resave: false
}));


/*
    Endpoint to handle POST Signup
 */

app.post('/api/signup', async function (req, res) {
    let userSignedUp;
    if (req.body !== undefined || req.body !== {}) {
        try {
            userSignedUp = await queryFunctions.signupUser(req.body);
            res.status(200).json(signupResponse.signupSuccess(userSignedUp));
        } catch (err) {
            if (err.errno === 1062) {
                res.status(409).json(signupResponse.signupErrorUserExists());
            }
            else if(err.errno === 400) {
                res.status(400).json(signupResponse.signupError(400));
            }
            else {
                res.status(500).json(signupResponse.signupError(500));
            }
        }
    }
});

/*
    Endpoint to handle POST Login
 */

app.post('/api/login', async function (req, res) {
    let userLoggedIn;
    if (req.body !== undefined || req.body !== {}) {
        try {
            userLoggedIn = await queryFunctions.loginUser(req.body);
            req.session.user = req.body.username;
            currentSession = req.session;
            res.status(200).json(loginResponse.loginSuccess(userLoggedIn[0].username));
        } catch (err) {
            res.status(401).json(loginResponse.loginError());
        }
    }
});

/*
    Endpoint to handle GET Login
 */

app.get('/api/login', function (req, res) {
    currentSession = req.session;
    currentSession.user ? res.status(200).json(loginResponse.loginStatus(true, req.session.user)) : res.status(200).json(loginResponse.loginStatus(false));
});

/*
    Route to handle GET Logout
 */
app.post("/api/logout", function (req, res) {
    req.session.destroy();
    res.status(200).json(loginResponse.loginStatus(false));
});

/*
    Route to handle POST Photo
 */
app.post("/api/photo", async function (req, res) {
    currentSession = req.session;
    if (currentSession.user && (req.body !== undefined || req.body !== {})) {
        if (currentSession.user !== req.body.username) {
            res.status(403).json(postUploadResponse.postUploadError(403));
        } else {
            try {
                await queryFunctions.uploadPost(req);
                res.status(200).json(postUploadResponse.postUploadSuccess());
            } catch (err) {
                res.status(500).json(postUploadResponse.postUploadError(500));
            }

        }
    }
    else {
        res.status(401).json(loginResponse.loginError());
    }
});

/*
    Route to handle GET Photo
 */
app.get("/api/photo", async function (req, res) {
    let queryParams = req.query;
    currentSession = req.session;
    if (Object.keys(queryParams).length !== 0) {
        if (queryParams["username"] !== undefined) {
            let username = queryParams["username"];
            try {
                let results = await queryFunctions.getPostsByUsername(username);

                if (results.length === 0) {
                    res.status(404).json(postResponse.postDoesNotExist());
                } else {
                    let postDetailArray = await utilityFunctions.generatePostDetails(results);
                    res.status(200).json(postResponse.postsByUsername(username, postDetailArray));
                }
            } catch (err) {
                res.status(500).json(postResponse.postQueryError());
            }
        } else {
            res.status(400).json(postResponse.invalidPostQuery());
        }
    } else {
        try {
            let results = await queryFunctions.getAllPosts();

            if (results.length === 0) {
                res.status(404).json(postResponse.postDoesNotExist());
            } else {
                let postDetailArray = await utilityFunctions.generatePostDetails(results);
                res.status(200).json(postResponse.allPosts(postDetailArray));
            }
        } catch (err) {
            res.status(500).json(postResponse.postQueryError());
        }
    }
});

/*
    Route to handle GET Photo by Post Id
 */
app.get("/api/photo/:post_id", async function (req, res) {
    let postId = req.params.post_id;
    currentSession = req.session;
    if (postId !== undefined) {
        try {
            let results = await queryFunctions.getPostById(postId);

            if (results.length === 0) {
                res.status(404).json(postResponse.postDoesNotExist());
            } else {
                let postDetail = await utilityFunctions.generatePostDetails(results);
                res.status(200).json(postResponse.postById(postId, postDetail));
            }
        } catch (err) {
            res.status(500).json(postResponse.postQueryError());
        }
    }
    else {
        res.status(404).json(postResponse.postDoesNotExist());
    }
});

/*
    Route to handle POST Like
 */
app.post("/api/like", async function (req, res) {
    currentSession = req.session;
    if (currentSession.user && req.body !== undefined && req.body !== {}) {
        try {
            await queryFunctions.updateLikes(req.body);
            res.status(200).json(likeResponse.likesUpdateByPostId(req.body.username, req.body.postId));
        } catch (err) {
            res.status(500).json(likeResponse.likesUpdateError(req.body.username, req.body.postId));
        }
    }
    else {
        res.status(401).json(loginResponse.loginError());
    }
});

/*
    Route to handle DELETE Like
 */
app.delete("/api/like/:like_id", async function (req, res) {
    let likeId = req.params["like_id"];
    currentSession = req.session;
    if (currentSession.user && likeId !== undefined) {
        try {
            await queryFunctions.deleteLikes(likeId);
            res.status(200).json(likeResponse.likesDeleteByPostId(likeId));
        } catch (err) {
            res.status(500).json(likeResponse.likesDeleteError(likeId));
        }
    }
    else {
        res.status(401).json(loginResponse.loginError());
    }
});

/*
    Route to handle GET Like by Post Id
 */
app.get("/api/like/:post_id", async function (req, res) {
    currentSession = req.session;
    let postId = req.params.post_id;
    if (postId !== undefined) {
        try {
            let results = await queryFunctions.getLikesByPostId(postId);
            res.status(200).json(likeResponse.likesByPostId(postId, results));
        } catch (err) {
            res.status(500).json(likeResponse.likesReadError(postId));
        }
    }
    else {
        res.status(404).json(postResponse.postDoesNotExist());
    }

});

/*
    Route to handle POST Comment
 */
app.post("/api/comment", async function (req, res) {
    currentSession = req.session;
    if (currentSession.user && req.body !== undefined && req.body !== {}) {
        try {
            await queryFunctions.updateComments(req.body);
            res.status(200).json(commentResponse.commentsUpdateByPostId(req.body.username, req.body.postId));
        } catch (err) {
            res.status(500).json(commentResponse.commentsUpdateError(req.body.username, req.body.postId));
        }
    }
    else {
        res.status(401).json(loginResponse.loginError());
    }
});

/*
    Route to handle GET Comment by Post Id
 */
app.get("/api/comment/:post_id", async function (req, res) {
    currentSession = req.session;
    let postId = req.params.post_id;
    if (postId !== undefined) {
        try {
            let results = await queryFunctions.getCommentsByPostId(postId);
            res.status(200).json(commentResponse.commentsByPostId(postId, results));
        } catch (err) {
            res.status(500).json(commentResponse.commentsReadError(postId));
        }
    }
    else {
        res.status(404).json(postResponse.postDoesNotExist());
    }
});

/*
    Route to handle GET User by Username
 */
app.get("/api/user/:username", async function(req, res) {
    let username = req.params.username;
    if(username !== undefined) {
        try {
            let results = await queryFunctions.getUserDetailsByUsername(username);
            if(results.length === 0) {
                res.status(404).json(userResponse.userDetailsError(404));
            }
            else {
                res.status(200).json(userResponse.userDetailsSuccess(username, results[0].name));
            }
        }
        catch(err) {
            res.status(500).json(userResponse.userDetailsError(500));
        }
    }
    else {
        res.status(404).json(userResponse.userDetailsError(404));
    }
});

/*
    Route to handle GET user by search term
 */
app.get("/api/user", async function(req, res) {
    let queryParams = req.query;
    if(Object.keys(queryParams).length !== 0) {
        if(queryParams["search_term"] !== undefined) {
            let searchTerm = queryParams["search_term"];
            try {
                let results = await queryFunctions.getUserDetailsBySearchTerm(searchTerm);
                res.status(200).json(userResponse.userSearchSuccess(searchTerm, results));
            }
            catch(err) {
                res.status(500).json(userResponse.userDetailsError(500));
            }
        }
    }
    else {
        res.status(500).json(userResponse.userDetailsError(500));
    }
});

/*
    Route to handle POST user for password change
 */
app.post("/api/user", async function(req, res) {
    currentSession = req.session;
    if(currentSession.user && req.body !== undefined && req.body !== {}) {
        if(currentSession.user === req.body.username) {
            try {
                await queryFunctions.updatePasswordForUser(req.body);
                res.status(200).json(userResponse.userPasswordUpdateSuccess(req.body.username));
            }
            catch(err) {
                res.status(500).json(userResponse.userPasswordUpdateError(req.body.username, 500));
            }
        }
        else {
            res.status(401).json(userResponse.userPasswordUpdateError(req.body.username, 401));
        }
    }
    else {
        res.status(401).json(userResponse.userPasswordUpdateError(req.body.username, 401));
    }
});


/*
    Serving the built Angular Pages from the /static/public directory
 */
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/static/public/index.html');
});

app.listen(port, function () {
    console.log("App is listening on " + port);
});