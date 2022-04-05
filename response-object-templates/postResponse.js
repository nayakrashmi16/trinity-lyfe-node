const { success, error } =  require("./responseApi");

exports.postsByUsername = (username, postDetails) => {
    return success("Posts for user "+username, { username: username, posts: postDetails }, 200);
}

exports.postById = (postId, postDetails) => {
    return success("Post with ID "+postId, { posts: postDetails }, 200);
}

exports.allPosts = (postDetails) => {
    return success("All Posts", { posts: postDetails }, 200);
}

exports.postDoesNotExist = () => {
    return error("Sorry, the post(s) does not exists", 404);
}

exports.invalidPostQuery = () => {
    return error("Posts cannot be queried with given params", 400);
}

exports.postQueryError = () => {
    return error("Something went wrong while querying posts", 500);
}
