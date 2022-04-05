const { success, error } =  require("./responseApi");

exports.commentsUpdateByPostId = (username, postId) => {
    return success("Comment for post with post_id "+postId+" by user with username "+username+" updated", {},200);
}

exports.commentsUpdateError = (username, postId) => {
    return error("Comment for post with post_id "+postId+" by user with username "+username+" update failed", 500);
}

exports.commentsByPostId = (postId, comments) => {
    return success("Comments for post with post_id "+postId, {comments: comments}, 200);
}

exports.commentsReadError = (postId) => {
    return error("Comments for post with post_id "+postId+" could not be fetched", 500);
}