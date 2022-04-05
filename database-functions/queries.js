/*
    Queries used to query the database
 */

/*
    Query to signup new users by adding new entry to User table
 */
exports.signupUserQuery = () => {
    return `insert into users (name, username, email_id, password) values (?, ?, ?, ?)`;
};

/*
    Query to login existing user by validating user credentials
 */
exports.loginUserQuery = () => {
    return `select username, password from users where username = ?`;
}

/*
    Query to upload new photo post by adding new entry to Posts table
 */
exports.uploadPostQuery = () => {
    return `insert into posts (username, post_img_path, caption) values (?, ?, ?)`;
}

/*
    Query to get all posts for a particular user
 */
exports.postsByUsernameQuery = () => {
    return `select post_id, post_img_path, username from posts where username = ?`;
}

/*
    Query to get post for a particular Post Id
 */
exports.postByPostIdQuery = () => {
    return `select post_id, post_img_path, username, caption, created_at from posts where post_id = ?`;
}

/*
    Query to get all posts
 */
exports.allPostsQuery = () => {
    return `select post_id, post_img_path, username, caption, created_at from posts`;
}

/*
    Query to update the like count for particular Post Id by adding new entry to Likes table
 */
exports.updateLikesQuery = () => {
    return `insert into likes (username, post_id) values (?, ?)`;
}

/*
    Query to get likes for particular Post Id
 */
exports.likesByPostIdQuery = () => {
    return `select like_id, username from likes where post_id = ?`;
}

/*
    Query to delete like for a particular Post Id
 */
exports.deleteLikesQuery = () => {
    return `delete from likes where like_id = ?`;
}

/*
    Query to update comments for a particular Post Id by adding new entry to Comments table
 */
exports.updateCommentsQuery = () => {
    return `insert into comments (post_id, username, comment) values (?, ?, ?)`;
}

/*
    Query to get comments for a particular Post Id
 */
exports.commentsByPostIdQuery = () => {
    return `select comment_id, comment, username from comments where post_id = ?`;
}

/*
    Query to get user info for particular user
 */
exports.userDetailsByUsernameQuery = () => {
    return `select name from users where username = ?`;
}

/*
    Query to get user info for a search term
 */
exports.userDetailsBySearchTermQuery = () => {
    return `select username, name from users where username like ? or name like ?`;
}

/*
    Query to update password for user
 */
exports.updatePasswordForUserQuery = () => {
    return `update users set password = ? where username = ?`
}