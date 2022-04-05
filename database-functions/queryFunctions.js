/*
    Requiring mysql package
 */
const mysql = require('mysql');

/*
    Requiring queries
 */
const queries = require("./queries");

/*
    Requiring utility functions
 */
const utilityFunctions = require("../utility-functions/utilityFunctions");
const { nanoid } = require("nanoid");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const path = require('path')

/*
    Variable for MySQL Database connection
 */
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "trinity_lyfe"
});

module.exports = {

    /*
        Function to signup new user
     */
    signupUser: async function (user) {
        let query = queries.signupUserQuery();

        if(user.password.length < 5) {
            let err = new Error("Password not long enough. Min length 5");
            err.errno = 400;
            throw err;
        }

        let encryptedPassword = await bcrypt.hash(user.password, saltRounds);

        try {
            const results = await executeQuery(query, [user.name, user.username, user.email, encryptedPassword]);
            return results;
        } catch (err) {
            throw err;
        }
    },

    /*
        Function to login user
     */
    loginUser: async function (user) {
        let query = queries.loginUserQuery();
        try {
            const results = await executeQuery(query, [user.username]);
            let validatePassword = await bcrypt.compare(user.password, results[0].password);
            if (!validatePassword) {
                throw new Error("Authentication Failed");
            }
            return results;
        } catch (err) {
            throw err;
        }
    },

    /*
        Function to upload post
     */
    uploadPost: async function (postData) {
        if (postData.files !== null && postData.files.file !== null) {
            let postFile = postData.files.file;
            let postDirectory = utilityFunctions.getOrCreateUploadDirectory(postData.body.username);
            if (postFile !== undefined) {
                let postFilePath = postDirectory + nanoid() + path.extname(postFile.name);
                await postFile.mv(postFilePath);
                try {
                    let query = queries.uploadPostQuery();
                    await executeQuery(query, [postData.body.username, postFilePath, postData.body.caption]);
                } catch (err) {
                    throw err;
                }
            }
        } else {
            throw new Error("Upload Failed");
        }
    },

    /*
        Function to get posts by username
     */
    getPostsByUsername: async function (username) {
        let query = queries.postsByUsernameQuery();
        try {
            let results = await executeQuery(query, [username]);
            return results;
        } catch (err) {
            throw err;
        }

    },

    /*
        Function to get post by ID
     */
    getPostById: async function (postId) {
        let query = queries.postByPostIdQuery();
        try {
            let results = await executeQuery(query, [postId]);
            return results;
        } catch (err) {
            throw err;
        }
    },

    /*
        Function to get all Posts
     */
    getAllPosts: async function () {
        let query = queries.allPostsQuery();
        try {
            let results = await executeQuery(query);
            return results;
        } catch (err) {
            throw err;
        }

    },

    /*
        Function to update like for post
     */
    updateLikes: async function (post) {
        let query = queries.updateLikesQuery();
        try {
            await executeQuery(query, [post.username, post.postId]);
        } catch (err) {
            throw err;
        }
    },

    /*
        Function to get likes for post
     */
    getLikesByPostId: async function (postId) {
        let query = queries.likesByPostIdQuery();
        try {
            let results = executeQuery(query, [postId]);
            return results;
        } catch (err) {
            throw err;
        }
    },

    /*
        Function to delete likes for post
     */
    deleteLikes: async function (likedId) {
        let query = queries.deleteLikesQuery();
        try {
            await executeQuery(query, [likedId]);
        } catch (err) {
            throw err;
        }
    },

    /*
        Function to update comment for a post
     */
    updateComments: async function (post) {
        let query = queries.updateCommentsQuery();
        try {
            await executeQuery(query, [post.postId, post.username, post.comment]);
        } catch (err) {
            throw err;
        }
    },

    /*
        Function to get comments for a post
     */
    getCommentsByPostId: async function (postId) {
        let query = queries.commentsByPostIdQuery();
        try {
            let results = executeQuery(query, [postId]);
            return results
        } catch (err) {
            throw err;
        }
    },

    /*
        Function to get user details for a username
     */
    getUserDetailsByUsername: async function (username) {
        let query = queries.userDetailsByUsernameQuery();
        try {
            let results = executeQuery(query, [username]);
            return results;
        } catch (err) {
            throw err;
        }
    },

    /*
        Function to search for a user
     */
    getUserDetailsBySearchTerm: async function(searchTerm) {
        let regex = '%'+searchTerm+'%';
        let query = queries.userDetailsBySearchTermQuery();
        try {
            let results = executeQuery(query, [regex, regex]);
            return results;
        }
        catch(err) {
            throw err;
        }
    },

    /*
        Function to update password for user
     */
    updatePasswordForUser: async function(user) {
        let newPassword = user.newPassword;
        if(newPassword) {
            if(newPassword.length < 5) {
                let err = new Error("Password not long enough. Min length 5");
                err.errno = 400;
                throw err;
            }
            let encryptedPassword = await bcrypt.hash(newPassword, saltRounds);
            let query = queries.updatePasswordForUserQuery();
            try {
                await executeQuery(query, [encryptedPassword, user.username]);
            }
            catch(err) {
                throw err;
            }
        }
    }
};

/*
    Function to execute Database queries
*/
async function executeQuery(query, values) {
    return new Promise((resolve, reject) => {
        con.query(query, values, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}
