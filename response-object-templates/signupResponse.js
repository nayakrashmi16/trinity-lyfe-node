const { success, error } =  require("./responseApi");

exports.signupSuccess = (results) => {
    return success("User has been signed up successfully", results, 200);
}

exports.signupErrorUserExists = () => {
    return error("User already exists", 409);
}

exports.signupError = (statusCode) => {
    return error("Something went wrong, please try again", statusCode);
}