const { success, error } =  require("./responseApi");

exports.likesUpdateByPostId = (username, postId) => {
    return success("Like for post with post_id "+postId+" by user with username "+username+" updated", {},200);
}

exports.likesUpdateError = (username, postId) => {
    return error("Like for post with post_id "+postId+" by user with username "+username+" update failed", 500);
}

exports.likesByPostId = (postId, likes) => {
    return success("Likes for post with post_id "+postId, {likes: likes}, 200);
}

exports.likesReadError = (postId) => {
    return error("Likes for post with post_id "+postId+" could not be fetched", 500);
}

exports.likesDeleteByPostId = (likeId) => {
    return success("Like for post with like_id "+likeId+" deleted", {}, 200);
}


exports.likesDeleteError = (likeId) => {
    return error("Like for post with like_id "+likeId+" delete failed", 500);
}