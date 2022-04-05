const { success, error } = require('./responseApi');

exports.userDetailsSuccess = (username, name) => {
    return success("User details fetched successfully", { username: username, name: name }, 200);
}

exports.userDetailsError = (errorCode) => {
    return error("User detail fetch failed", errorCode);
}

exports.userSearchSuccess = (searchTerm, searchResults) => {
    return success("Search Results for "+searchTerm, { searchResults: searchResults }, 200);
}

exports.userPasswordUpdateSuccess = (username) => {
    return success("Password has been updated successfully for user "+username, {}, 200);
}

exports.userPasswordUpdateError = (username, errorCode) => {
    return error("Password update has failed for user "+username, errorCode);
}