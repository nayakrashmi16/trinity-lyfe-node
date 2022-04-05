const { success, error } = require('./responseApi');

exports.postUploadSuccess = () => {
    return success("Post uploaded successfully", {}, 200);
}

exports.postUploadError = (errorCode) => {
    return error("Post upload failed", errorCode);
}