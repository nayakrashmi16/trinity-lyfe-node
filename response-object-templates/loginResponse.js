const { success, error } =  require("./responseApi");

exports.loginSuccess = (user) => {
    return success("User has been logged in successfully", { loggedIn: true, user: user }, 200);
}

exports.loginError = () => {
    return error("Authentication failed for user", 401);
}

exports.loginStatus = (loggedIn, user) => {
    return success ("User is logged in? "+loggedIn, {loggedIn: loggedIn, user: user}, 200);
}