/*
    Requiring fs package
 */
const fs = require('fs');

/*
    Configure directory to save uploaded static
 */
let uploadBaseDirectory = "static/uploadedFiles/";


module.exports = {
    /*
        Function to generate post detail array with database results
     */
    generatePostDetails: async function (results) {
        let postDetails = [];
        for (let index in results) {
            let post = results[index];
            let postDetail = {};
            for (let key in post) {
                if (key === "post_img_path") {
                    postDetail[key] = getPhotoFromFile(post["post_img_path"])
                } else {
                    postDetail[key] = post[key];
                }
            }
            postDetails.push(postDetail);
        }
        return postDetails;
    },

    /*
        Function to get current upload directory and create if not exists
     */
    getOrCreateUploadDirectory: function (username) {
        let uploadDirectory = uploadBaseDirectory + username + "/";
        if (!fs.existsSync(uploadDirectory)) {
            fs.mkdirSync(uploadDirectory);
        }
        return uploadDirectory;
    }

};

/*
    Function to read image from file and generate Base64 String
 */
function getPhotoFromFile(imgPath) {
    let img = fs.readFileSync(imgPath);
    let imgBase64String = Buffer.from(img).toString('base64');
    return imgBase64String;
}