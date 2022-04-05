function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-login></app-login> -->\n<!-- <app-signup></app-signup> -->\n<!-- <app-upload-photo></app-upload-photo> -->\n<router-outlet></router-outlet>\n<!-- <app-navbar></app-navbar> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChangePasswordChangePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"page-container\">\n    <div class=\"form-container\">\n        <app-error-toast [error]=\"updateError\"></app-error-toast>\n        <h1 class=\"form-header\">Change Password</h1>\n        <h3 class=\"form-subheader\">Change your account password</h3>\n        <form class=\"form\" [formGroup]=\"passwordForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-input-container\">\n                <label for=\"password\" class=\"form-input-label\">New Password</label>\n                <input type=\"password\" id=\"password\" placeholder=\"Enter your password\" class=\"form-input\"\n                    formControlName=\"password\" minlength=\"5\" required>\n                <p class=\"form-input-error\"\n                    *ngIf=\"(password.dirty || password.touched) && password.errors?.required\">New Password\n                    required field</p>\n                <p class=\"form-input-error\"\n                    *ngIf=\"(password.dirty || password.touched) && password.errors?.minlength\">Password minlength is 5</p>    \n            </div>\n            <div class=\"form-input-container\">\n                <label for=\"confirmPassword\" class=\"form-input-label\">Confirm Password</label>\n                <input type=\"password\" id=\"confirmPassword\" placeholder=\"Confirm your password\" class=\"form-input\"\n                formControlName=\"confirmPassword\" minlength=\"5\" required>\n                <p class=\"form-input-error\"\n                *ngIf=\"(confirmPassword.dirty || confirmPassword.touched) && confirmPassword.errors?.minlength\">Password minlength is 5</p>\n                <p class=\"form-input-error\"\n                    *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched) && confirmPassword.errors?.notSame\">Passwords don't match</p>    \n            </div>\n            <div class=\"form-input-container\">\n                <button class=\"form-submit-btn\" type=\"submit\" [disabled]=\"!passwordForm.valid\">Change Password</button> \n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error-toast/error-toast.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-toast/error-toast.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorToastErrorToastComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"error-toast-container\" *ngIf=\"error\">\n    <img src=\"../../assets/icons/alert.png\" class=\"error-toast-icon\">\n    <span>{{ error }}</span>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLandingPageLandingPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<app-error-toast [error]=\"error\"></app-error-toast>\n<div class=\"banner-container\">\n    <div class=\"banner-content\"> \n         <p class=\"banner-title\">TrinityLyfe</p>\n         <h1 class=\"banner-headline\">Trinity’s very own social media platform</h1>\n         <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit()\">\n            <input type=\"text\" placeholder=\"Search for your favourite society, cohort or friend\" class=\"form-input\" formControlName=\"searchValue\">\n         </form>\n    </div>\n</div>\n\n<app-post-grid [postDetailArray]=\"postDetailArray\"></app-post-grid>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-container\">\n    <div class=\"illustration-container\">\n        <img src=\"../../assets/images/login-illustration.png\" class=\"illustration-img\">\n    </div>\n    <div class=\"form-container\">\n        <app-error-toast [error]=\"loginError\"></app-error-toast>\n        <h1 class=\"form-header\">Login</h1>\n        <h3 class=\"form-subheader\">Log in to your Trinity Lyfe account </h3>\n        <form class=\"form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-input-container\">\n                <label for=\"username\" class=\"form-input-label\">Username</label>\n                <input type=\"text\" id=\"username\" placeholder=\"Enter your username\" class=\"form-input\"\n                    formControlName=\"username\" required>\n                <p class=\"form-input-error\"\n                    *ngIf=\"(username.dirty || username.touched) && username.errors?.required\">Username is a\n                    required field</p>\n            </div>\n            <div class=\"form-input-container\">\n                <label for=\"password\" class=\"form-input-label\">Password</label>\n                <input type=\"password\" id=\"password\" placeholder=\"Enter a password\" class=\"form-input\"\n                    formControlName=\"password\" required>\n                <p class=\"form-input-error\"\n                    *ngIf=\"password.invalid && (password.dirty || password.touched) && password.errors?.required\">\n                    Password is a required\n                    field</p>\n            </div>\n            <div class=\"form-input-container\">\n                <button class=\"form-submit-btn\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\n               \n            </div>\n        </form>\n        <div class=\"alternate-link-container\">\n            <p class=\"alternate-link-text\">Don’t have an account? <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"alternate-link\">Signup</a>  now</p>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"navbar-container\">\n    <div class=\"navbar-left-container\">\n        <div class=\"logo-container\" routerLink=\"/landing-page\" routerLinkActive=\"active\">\n            <img src=\"../../assets/icons/logo.png\" class=\"logo-img\">\n            <p class=\"logo-text\">Trinity Lyfe</p>\n        </div>\n    </div>\n    <div class=\"navbar-right-container\" *ngIf=\"isLoggedIn === 'true'\">\n        <button class=\"upload-photo-btn\" routerLink=\"/upload-photo\" routerLinkActive=\"active\">\n            <img src=\"../../assets/icons/file-explorer-icon.png\" class=\"upload-photo-btn-icon\">\n            Upload\n        </button>\n        <div class=\"profile-link-container\">\n            <div class=\"profile-img-container\">\n                <img src=\"../../assets/images/avatar.png\" class=\"profile-img\"> \n            </div>\n            <p class=\"profile-link-text\" [routerLink]=\"['/profile', user]\" routerLinkActive=\"active\">{{user}}</p>\n        </div>\n        <div class=\"link-container\">\n            <button class=\"logout-btn\" (click)=\"logout()\">\n                Logout\n            </button>\n        </div>\n    </div>\n\n    <div class=\"navbar-right-container\" *ngIf=\"isLoggedIn === 'false'\">\n        <div class=\"link-container\">\n            <p class=\"link-text\" routerLink=\"/signup\" routerLinkActive=\"active\">Signup</p>\n        </div>\n        <div class=\"link-container\">\n            <p class=\"link-text\" routerLink=\"/login\" routerLinkActive=\"active\">Login</p>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"page-not-found-container\">\n    <h2 class=\"page-not-found-text\">Sorry, the page or resource you are looking for has not been found!</h2>\n    <div class=\"page-not-found-link-container\">\n        <span>Go back to </span>\n        <a routerLink=\"/\" routerLinkActive=\"active\">HomePage</a>\n    </div>\n    <img src=\"../../assets/images/page-not-found.jpg\" class=\"page-not-found-img\">\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post-detail/post-detail.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-detail/post-detail.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostDetailPostDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<app-error-toast [error]=\"error\"></app-error-toast>\n<div class=\"post-detail-container\" *ngIf=\"postDetail\">\n    <div class=\"post-img-container\">\n        <img [src]=\"postDetail.src\" class=\"post-img\" *ngIf=\"postDetail.src\">\n    </div>\n    <div class=\"post-detail-content-container\">\n        <div class=\"post-username-container\">\n            <div class=\"profile-img-container\">\n                <img src=\"../../assets/images/avatar.png\" class=\"profile-img\">\n            </div>\n            <a class=\"post-username\" [routerLink]=\"['/profile', postDetail.username]\" routerLinkActive=\"active\">{{postDetail.username}}</a>\n        </div>\n        <div class=\"post-info-container\">\n            <p class=\"post-date\">posted on {{postDetail.date}}</p>\n            <div class=\"post-caption-container\">\n                <pre\n                    class=\"post-caption\"><span class=\"post-caption-username\">{{postDetail.username}}</span>{{postDetail.caption}}</pre>\n            </div>\n            <div class=\"post-comments-list-container\">\n                <p class=\"post-comment-list-item\" *ngFor=\"let commentItem of postDetail.comments\">\n                    <a class=\"post-comment-username\" [routerLink]=\"['/profile', commentItem.username]\" routerLinkActive=\"active\" >{{commentItem.username}}</a>\n                    <span class=\"post-comment\">{{commentItem.comment}}</span>\n                </p>\n            </div>\n        </div>\n        <div class=\"post-actions-container\">\n            <div class=\"post-statistics-container\">\n                <div class=\"post-likes-container\">\n                    <span class=\"post-like-count\">{{postDetail.likesCount}}</span>\n                    <span class=\"post-like-text\" *ngIf=\"postDetail.likesCount == 1\">like</span>\n                    <span class=\"post-like-text\" *ngIf=\"postDetail.likesCount != 1\">likes</span>\n                </div>\n                <div class=\"post-comments-container\">\n                    <span class=\"post-comment-count\">{{postDetail.commentsCount}}</span>\n                    <span class=\"post-comment-text\" *ngIf=\"postDetail.commentsCount == 1\">comment</span>\n                    <span class=\"post-comment-text\" *ngIf=\"postDetail.commentsCount != 1\">comments</span>\n                </div>    \n            </div>\n            <div class=\"post-actions-btns-container\">\n                <div class=\"post-actions-overlay\" *ngIf=\"isLoggedIn === 'false'\">\n                    <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"signup-link\">Signup</a> or <a\n                        routerLink=\"/login\" routerLinkActive=\"active\" class=\"login-link\">Login</a> to start interacting\n                    with your favourite posts!\n                </div>\n                <div class=\"post-like-action-container\">\n                    <img src=\"../../assets/icons/heart-outline.png\" *ngIf=\"!postDetail.likedByCurrentUser\"\n                        (click)=\"toggleLike()\" class=\"post-like-icon\" [ngClass]=\"{'disabled': isLoggedIn === 'false'}\">\n                    <img src=\"../../assets/icons/heart-filled.png\" *ngIf=\"postDetail.likedByCurrentUser\"\n                        (click)=\"toggleLike()\" class=\"post-like-icon\" [ngClass]=\"{'disabled': isLoggedIn === 'false'}\">\n                </div>\n                <div class=\"post-comment-box-container\">\n                    <form [formGroup]=\"commentForm\" class=\"post-comment-form\" (ngSubmit)=\"postComment()\"\n                        [ngClass]=\"{'disabled': isLoggedIn === 'false'}\">\n                        <div class=\"form-input-container\">\n                            <label for=\"username\" class=\"form-input-label\">Write a comment</label>\n                            <input type=\"text\" id=\"comment\" placeholder=\"Enter a comment\" class=\"form-input\"\n                                formControlName=\"comment\">\n                             <button type=\"submit\" class=\"comment-submit-btn\">Post</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post-grid/post-grid.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-grid/post-grid.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostGridPostGridComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"posts-container\" *ngIf=\"postDetailArray\">\n    <div class=\"post-container\" *ngFor=\"let post of postDetailArray\" [routerLink]=\"['/post', post.post_id]\">\n        <div class=\"post-overlay\">    \n            <div class=\"post-likes-count\">\n                <img src=\"../../assets/icons/heart-outline-white.png\" class=\"post-likes-icon\">\n                <span>{{post.likesCount}}</span>\n            </div>\n            <div class=\"post-comments-count\">\n                <img src=\"../../assets/icons/comment-outline-white.png\" class=\"post-comments-icon\">\n                <span>{{post.commentsCount}}</span>\n            </div>\n        </div>\n        <img [src]=\"post.src\" class=\"post-img\">\n    </div>\n    <div class=\"no-posts-container\" *ngIf=\"postDetailArray.length === 0\">\n        <h2 class=\"no-posts-text\">No posts yet! Start posting now!</h2>\n        <img src=\"../../assets/images/no-images.png\" class=\"no-posts-img\">\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"profile-detail-container\">\n    <div class=\"profile-img-container\">\n        <img src=\"../../assets/images/avatar.png\" class=\"profile-img\"> \n    </div>\n    <div class=\"profile-detail-content\">\n        <h1 class=\"profile-username\">{{profileUser}}</h1>\n        <h2 class=\"profile-name\">{{profileUserName}}</h2>\n        <h3 class=\"profile-post-count\">{{profilePostCount}} posts</h3>\n    </div>\n    <div class=\"change-password-container\" *ngIf=\"user === profileUser\">\n        <button class=\"change-password-btn\" routerLink=\"/change-password\" routerLinkActive=\"active\">Change Password</button>\n    </div>\n</div>\n<app-post-grid [postDetailArray]=\"postDetailArray\"></app-post-grid>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search-results/search-results.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-results/search-results.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchResultsSearchResultsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<app-error-toast [error]=\"searchError\"></app-error-toast>\n<div class=\"search-results-container\" *ngIf=\"searchResultsArray.length > 0\">\n    <h1 class=\"search-result-text\">Search Results for: {{searchTerm}}</h1>\n    <h2 class=\"search-result-count\">{{searchResultsArray.length}} Results</h2>\n    <div class=\"search-result-item\" *ngFor=\"let searchResultItem of searchResultsArray\" [routerLink]=\"['/profile', searchResultItem.username]\" routerLinkActive=\"active\">\n        <div class=\"profile-img-container\">\n            <img src=\"../../assets/images/avatar.png\" class=\"profile-img\">\n        </div>\n        <div class=\"search-result-item-content\">\n            <p class=\"search-result-username\">{{searchResultItem.username}}</p>\n            <p class=\"search-result-name\">{{searchResultItem.name}}</p>\n        </div>\n    </div>\n</div>\n<div class=\"no-results-container\" *ngIf=\"searchResultsArray.length === 0\">\n    <h2 class=\"search-result-count\">Sorry that did not return any results!</h2>\n    <img src=\"../../assets/images/no-images.png\" class=\"no-results-container-img\">\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-container\">\n    <div class=\"illustration-container\">\n        <img src=\"../../assets/images/signup-illustration.png\" class=\"illustration-img\">\n    </div>\n    <div class=\"form-container\">\n        <app-error-toast [error]=\"signupError\"></app-error-toast>\n        <h1 class=\"form-header\">Signup</h1>\n        <h3 class=\"form-subheader\">Create an account with Trinity Lyfe</h3>\n        <form class=\"form\" [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-input-container\">\n                <label for=\"name\" class=\"form-input-label\">Name</label>\n                <input type=\"text\" id=\"name\" placeholder=\"Enter your name\" class=\"form-input\" formControlName=\"name\"\n                    required>\n                <p class=\"form-input-error\"\n                    *ngIf=\"name.invalid && (name.dirty || name.touched && name.errors?.required)\">Name is a required\n                    field</p>\n            </div>\n            <div class=\"form-input-container\">\n                <label for=\"username\" class=\"form-input-label\">Username</label>\n                <input type=\"text\" id=\"username\" placeholder=\"Enter a username\" class=\"form-input\"\n                    formControlName=\"username\" required>\n                <p class=\"form-input-error\"\n                    *ngIf=\"username.invalid && (username.dirty || username.touched) && username.errors?.required\">Username is a\n                    required field</p>\n            </div>\n            <div class=\"form-input-container\">\n                <label for=\"email\" class=\"form-input-label\">Email ID</label>\n                <input type=\"email\" id=\"email\" placeholder=\"Enter your email id\" class=\"form-input\"\n                    formControlName=\"email\" email=\"true\" required>\n                <p class=\"form-input-error\"\n                    *ngIf=\"email.invalid && (email.dirty || email.touched) && email.errors?.required\">Email is a\n                    required field</p>\n                <p class=\"form-input-error\"\n                    *ngIf=\"email.invalid && (email.dirty || email.touched) && email.errors?.email\">Email is not valid</p>\n            </div>\n            <div class=\"form-input-container\">\n                <label for=\"password\" class=\"form-input-label\">Password</label>\n                <input type=\"password\" id=\"password\" placeholder=\"Enter a password\" class=\"form-input\"\n                    formControlName=\"password\" minlength=\"5\" required>\n                <p class=\"form-input-error\"\n                    *ngIf=\"password.invalid && (password.dirty || password.touched) && password.errors?.required\">Password is a required\n                    field</p>\n                <p class=\"form-input-error\"\n                    *ngIf=\"password.invalid && (password.dirty || password.touched) && password.errors?.minlength\">Password must be atleast 5 characters long</p>\n            </div>\n            <div class=\"form-input-container\">\n                <label for=\"password\" class=\"form-input-label\">Confirm Password</label>\n                <input type=\"password\" id=\"password-confirmation\" placeholder=\"Confirm your password\" class=\"form-input\"\n                    formControlName=\"confirmPassword\" minlength=\"5\" required>\n                <p class=\"form-input-error\"\n                    *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched) && confirmPassword.errors?.required\">Confirm Password is a required\n                    field</p>\n                <p class=\"form-input-error\"\n                    *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched) && confirmPassword.errors?.notSame\">Passwords don't match</p>\n                <p class=\"form-input-error\"\n                    *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched) && confirmPassword.errors?.minlength\">Password must be atleast 5 characters long</p>\n            </div>\n            <div class=\"form-input-container\">\n                <button class=\"form-submit-btn\" type=\"submit\" [disabled]=\"!signupForm.valid\">Signup</button>\n            </div>\n        </form>\n        <div class=\"alternate-link-container\">\n            <p class=\"alternate-link-text\">Already Signed Up? <a routerLink=\"/login\" routerLinkActive=\"active\" class=\"alternate-link\">Login</a> now</p>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-photo/upload-photo.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-photo/upload-photo.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUploadPhotoUploadPhotoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"photo-upload-container\">\n    <app-error-toast [error]=\"uploadError\"></app-error-toast>\n    <h1 class=\"photo-upload-header\">Upload Photo</h1>\n    <h3 class=\"photo-upload-subheader\">Share a new update to the Trinity Community</h3>\n    <form [formGroup]=\"postUploadForm\" class=\"photo-upload-form\">\n        <div class=\"photo-browser-container\" *ngIf=\"!selectedFile\">\n            <div class=\"photo-browser-illustration-container\">\n                <img src=\"../../assets/images/image-browse-illustration.png\" class=\"photo-browser-illustration\">\n            </div>\n            <h1 class=\"photo-browser-header\">Choose an photo from your local storage</h1>\n            <h3 class=\"photo-browser-description\"> JPEG, PNG and GIF File formats allowed</h3>\n            <button class=\"photo-browser-btn\" (click)=\"photoFile.click()\">\n                <input type=\"file\" accept=\"image/*\" #photoFile formControlName=\"photoFile\" (change)=\"onFileChange($event)\">\n                <img src=\"../../assets/icons/file-explorer-icon.png\" class=\"photo-browser-btn-icon\">\n                Browse\n            </button>\n        </div>\n        <div class=\"photo-caption-edit-container\" *ngIf=\"selectedFile\">\n            <div class=\"photo-preview-container\">\n                <img [src]=\"selectedFile\" class=\"photo-preview-img\"> \n            </div>\n            <div class=\"photo-caption-container\">\n                <p class=\"caption-label\">Write a Caption</p>\n                <textarea formControlName=\"caption\" class=\"form-input\" rows=\"10\"></textarea>\n                <div class=\"upload-btn-container\">\n                    <button class=\"photo-browser-btn\" [disabled]=\"!postUploadForm.valid\" (click)=\"onSubmit()\">Upload</button>\n                </div>\n            </div>\n        </div>\n        <!-- <img [src]=\"selectedFile\"> -->\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/change-password/change-password.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./landing-page/landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./post-detail/post-detail.component */
    "./src/app/post-detail/post-detail.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./search-results/search-results.component */
    "./src/app/search-results/search-results.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./upload-photo/upload-photo.component */
    "./src/app/upload-photo/upload-photo.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/landing-page',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"]
    }, {
      path: 'landing-page',
      component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"]
    }, {
      path: 'profile/:username',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]
    }, {
      path: 'post/:post_id',
      component: _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_8__["PostDetailComponent"]
    }, {
      path: 'upload-photo',
      component: _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_12__["UploadPhotoComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'change-password',
      component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'page-not-found',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
    }, {
      path: 'search-results/:search_term',
      component: _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_10__["SearchResultsComponent"]
    }, {
      path: '**',
      pathMatch: 'full',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'trinity-lyfe-fe';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem("isLoggedIn") === null) {
            localStorage.setItem("isLoggedIn", "false");
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./upload-photo/upload-photo.component */
    "./src/app/upload-photo/upload-photo.component.ts");
    /* harmony import */


    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./landing-page/landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./post-detail/post-detail.component */
    "./src/app/post-detail/post-detail.component.ts");
    /* harmony import */


    var _post_grid_post_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./post-grid/post-grid.component */
    "./src/app/post-grid/post-grid.component.ts");
    /* harmony import */


    var _error_toast_error_toast_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./error-toast/error-toast.component */
    "./src/app/error-toast/error-toast.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./search-results/search-results.component */
    "./src/app/search-results/search-results.component.ts");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/change-password/change-password.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_10__["UploadPhotoComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPageComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_14__["PostDetailComponent"], _post_grid_post_grid_component__WEBPACK_IMPORTED_MODULE_15__["PostGridComponent"], _error_toast_error_toast_component__WEBPACK_IMPORTED_MODULE_16__["ErrorToastComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"], _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_18__["SearchResultsComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_19__["ChangePasswordComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
      providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./trinity-lyfe.service */
    "./src/app/trinity-lyfe.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(trinityLyfeService) {
        _classCallCheck(this, AuthService);

        this.trinityLyfeService = trinityLyfeService;
      }

      _createClass(AuthService, [{
        key: "doLogin",
        value: function doLogin(formData) {
          return this.trinityLyfeService.postAPIData('login', formData, true);
        }
      }, {
        key: "getLogin",
        value: function getLogin() {
          return this.trinityLyfeService.getAPIData('/login', true);
        }
      }, {
        key: "doLogout",
        value: function doLogout() {
          return this.trinityLyfeService.postAPIData('/logout', true);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_2__["TrinityLyfeService"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/change-password/change-password.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/change-password/change-password.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChangePasswordChangePasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap\");\n/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput,\ntextarea {\n  all: unset;\n}\nbutton {\n  border: none;\n}\n* {\n  font-family: \"Nunito\", sans-serif;\n}\n.title-text {\n  font-size: 60px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h1-text {\n  font-size: 32px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h2-text, .form-header {\n  font-size: 23px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h3-text, .form-subheader {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h4-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n}\n.body1-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n}\n.body2-text, .error-toast-container, .alternate-link-text {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 22px;\n}\n.body3-text, .form-input, .form-input-label {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 20px;\n}\n.button-text, .primary-btn-outline, .primary-btn-filled, .form-submit-btn {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n  text-transform: uppercase;\n}\n.caption-text, .form-input-error {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n}\n.overline-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.primary-btn-filled, .form-submit-btn {\n  background-color: #0569b9;\n  color: #FFFFFB;\n  box-shadow: 0 4px 4px 2px rgba(5, 105, 185, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\n.primary-btn-filled--hover, .form-submit-btn:hover {\n  filter: brightness(0.98);\n  scale: 0.99;\n}\n.primary-btn-filled--active, .form-submit-btn:active {\n  filter: brightness(0.95);\n  scale: 0.98;\n}\n.primary-btn-filled:disabled, .form-submit-btn:disabled {\n  background-color: #C9C9C9;\n  pointer-events: none;\n  cursor: none;\n}\n.primary-btn-outline {\n  border: 1px solid #0569b9;\n  color: #0569b9;\n  background-color: #F9FAFE;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\nbody {\n  background-color: #F9FAFE;\n}\n.page-container {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n}\n.form-container {\n  flex-grow: 1;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.form-header {\n  color: #232528;\n  margin-bottom: 25px;\n}\n.form-subheader {\n  color: #A5A5A5;\n  margin-bottom: 30px;\n}\n.form {\n  width: 30%;\n}\n.form-input-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n}\n.form-input-label {\n  color: #003f88;\n  margin-bottom: 5px;\n}\n.form-input {\n  border-radius: 8px;\n  padding: 10px;\n  border: 1px solid;\n  color: #232528;\n  border-color: #C9C9C9;\n  transition: all 0.2s ease-in;\n}\n.form-input::-moz-placeholder {\n  color: #A5A5A5;\n}\n.form-input::placeholder {\n  color: #A5A5A5;\n}\n.form-input:focus {\n  border-color: #5896ec;\n}\n.form-input-error {\n  color: #C90000;\n  margin-top: 5px;\n}\n.form-submit-btn {\n  margin-top: 10px;\n  padding: 12px 28px;\n  border-radius: 10px;\n}\n.alternate-link-text {\n  color: #232528;\n}\n.alternate-link {\n  text-decoration: none;\n  color: #0569b9;\n}\n.error-toast-container {\n  color: #FFFFFB;\n  background-color: rgba(201, 0, 0, 0.7);\n  position: absolute;\n  top: 30px;\n  padding: 0.5em 1.5em;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.error-toast-icon {\n  height: 25px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9mb250cy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3Jlc2V0cy5zY3NzIiwic3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL2NvbG9ycy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSxvRkFBQTtBQ0RSLDhFQUFBO0FDQUE7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VB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aEIsa0JBQUE7RUFDQSxTQUFBO0VBRUEsb0JBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FGMkpKO0FFeEpBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FGMkpKIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0byZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcblxuKiB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDEtdGV4dCB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmgyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5oMy10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxufVxuXG4uaDQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmJvZHkxLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5ib2R5Mi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uYm9keTMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXB0aW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5vdmVybGluZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0ICcuL3Jlc2V0cy5zY3NzJztcbkBpbXBvcnQgJy4vY29sb3JzJztcbkBpbXBvcnQgJy4vZm9udHMnO1xuXG4ucHJpbWFyeS1idG4tZmlsbGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgICBjb2xvcjogJG9uLXByaW1hcnk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IDJweCAkcHJpbWFyeS1zaGFkb3c7XG4gICAgXG4gICAgQGV4dGVuZCAuYnV0dG9uLXRleHQ7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG5cbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0taG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk4KTtcbiAgICBzY2FsZTogMC45OTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0tYWN0aXZlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG4gICAgc2NhbGU6IDAuOTg7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQ6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBub25lO1xufVxuXG4ucHJpbWFyeS1idG4tb3V0bGluZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnk7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdXJmYWNlO1xuXG4gICAgQGV4dGVuZCAuYnV0dG9uLXRleHQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcblxufVxuXG5ib2R5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG59IiwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gICAgYWxsOiB1bnNldDtcbn1cblxuYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgYWxsOiB1bnNldDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZS10ZXh0IHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMS10ZXh0IHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMi10ZXh0LCAuZm9ybS1oZWFkZXIge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmgzLXRleHQsIC5mb3JtLXN1YmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uYm9keTEtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjlweDtcbn1cblxuLmJvZHkyLXRleHQsIC5lcnJvci10b2FzdC1jb250YWluZXIsIC5hbHRlcm5hdGUtbGluay10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uYm9keTMtdGV4dCwgLmZvcm0taW5wdXQsIC5mb3JtLWlucHV0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uYnV0dG9uLXRleHQsIC5wcmltYXJ5LWJ0bi1vdXRsaW5lLCAucHJpbWFyeS1idG4tZmlsbGVkLCAuZm9ybS1zdWJtaXQtYnRuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FwdGlvbi10ZXh0LCAuZm9ybS1pbnB1dC1lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLm92ZXJsaW5lLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQsIC5mb3JtLXN1Ym1pdC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU2OWI5O1xuICBjb2xvcjogI0ZGRkZGQjtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IDJweCByZ2JhKDUsIDEwNSwgMTg1LCAwLjIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkLS1ob3ZlciwgLmZvcm0tc3VibWl0LWJ0bjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk4KTtcbiAgc2NhbGU6IDAuOTk7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWFjdGl2ZSwgLmZvcm0tc3VibWl0LWJ0bjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG4gIHNjYWxlOiAwLjk4O1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkOmRpc2FibGVkLCAuZm9ybS1zdWJtaXQtYnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M5QzlDOTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogbm9uZTtcbn1cblxuLnByaW1hcnktYnRuLW91dGxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDU2OWI5O1xuICBjb2xvcjogIzA1NjliOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RkFGRTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkU7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBmbGV4LWdyb3c6IDE7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtLWhlYWRlciB7XG4gIGNvbG9yOiAjMjMyNTI4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uZm9ybS1zdWJoZWFkZXIge1xuICBjb2xvcjogI0E1QTVBNTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZvcm0ge1xuICB3aWR0aDogMzAlO1xufVxuXG4uZm9ybS1pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybS1pbnB1dC1sYWJlbCB7XG4gIGNvbG9yOiAjMDAzZjg4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgY29sb3I6ICMyMzI1Mjg7XG4gIGJvcmRlci1jb2xvcjogI0M5QzlDOTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbn1cblxuLmZvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNBNUE1QTU7XG59XG5cbi5mb3JtLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNTg5NmVjO1xufVxuXG4uZm9ybS1pbnB1dC1lcnJvciB7XG4gIGNvbG9yOiAjQzkwMDAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5mb3JtLXN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5hbHRlcm5hdGUtbGluay10ZXh0IHtcbiAgY29sb3I6ICMyMzI1Mjg7XG59XG5cbi5hbHRlcm5hdGUtbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwNTY5Yjk7XG59XG5cbi5lcnJvci10b2FzdC1jb250YWluZXIge1xuICBjb2xvcjogI0ZGRkZGQjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDAsIDAsIDAuNyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAwLjVlbSAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lcnJvci10b2FzdC1pY29uIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59IiwiJHByaW1hcnk6ICMwNTY5Yjk7XG4kcHJpbWFyeS1saWdodDogIzU4OTZlYztcbiRwcmltYXJ5LWRhcms6ICMwMDNmODg7XG5cbiRzZWNvbmRhcnkteWVsbG93OiAjZmZkMjAwO1xuXG4kZXJyb3I6ICNDOTAwMDA7XG4kZXJyb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMjAxLCAwLCAwLCAwLjcpO1xuJGJvcmRlcjogI0M5QzlDOTtcbiRwbGFjZWhvbGRlcjogI0E1QTVBNTtcblxuJGJhY2tncm91bmQ6ICNGOUZBRkU7XG4kc3VyZmFjZTogI0Y5RkFGRTtcblxuJG9uLXByaW1hcnk6ICNGRkZGRkI7XG4kb24tcHJpbWFyeS1saWdodDogIzIzMjUyODtcbiRvbi1wcmltYXJ5LWRhcms6ICNGRkZGRkI7XG5cbiRvbi1zZWNvbmRhcnkteWVsbG93OiAjMjMyNTI4O1xuXG4kb24tZXJyb3I6ICNGRkZGRkI7XG5cbiRvbi1iYWNrZ3JvdW5kOiAjMjMyNTI4O1xuJG9uLXN1cmZhY2U6ICMyMzI1Mjg7XG5cbiRwcmltYXJ5LXNoYWRvdzogcmdiYSg1LCAxMDUsIDE4NSwgMC4yKTtcbiRzZWNvbmRhcnktdGVhbC1zaGFkb3c6IHJnYig3NCwgMTg5LCAxNzIsIDM1JSk7XG4kc2Vjb25kYXJ5LXllbGxvdy1zaGFkb3c6IHJnYigyNTIsIDIxMCwgMzQsIDM1JSk7XG4kY2FyZC1zaGFkb3c6IHJnYigxMTIsIDE0NCwgMTc2LCAzNSUpOyIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJztcblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgICBAZXh0ZW5kIC5oMi10ZXh0O1xuICAgIGNvbG9yOiAkb24tYmFja2dyb3VuZDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uZm9ybS1zdWJoZWFkZXIge1xuICAgIEBleHRlbmQgLmgzLXRleHQ7XG4gICAgY29sb3I6ICRwbGFjZWhvbGRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZm9ybSB7XG4gICAgd2lkdGg6IDMwJTtcbn1cblxuLmZvcm0taW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm0taW5wdXQtbGFiZWwge1xuICAgIEBleHRlbmQgLmJvZHkzLXRleHQ7XG4gICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gICAgQGV4dGVuZCAuYm9keTMtdGV4dDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDsgICAgXG4gICAgXG4gICAgY29sb3I6ICRvbi1iYWNrZ3JvdW5kO1xuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcblxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gICAgXG59XG5cbi5mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRwbGFjZWhvbGRlcjtcbn1cblxuLmZvcm0taW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktbGlnaHQ7XG59XG5cbi5mb3JtLWlucHV0LWVycm9yIHtcbiAgICBjb2xvcjogJGVycm9yO1xuICAgIEBleHRlbmQgLmNhcHRpb24tdGV4dDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5mb3JtLXN1Ym1pdC1idG4ge1xuICAgIEBleHRlbmQgLnByaW1hcnktYnRuLWZpbGxlZDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEycHggMjhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZm9ybS1zdWJtaXQtYnRuOmhvdmVyIHtcbiAgICBAZXh0ZW5kIC5wcmltYXJ5LWJ0bi1maWxsZWQtLWhvdmVyO1xufVxuXG4uZm9ybS1zdWJtaXQtYnRuOmFjdGl2ZSB7XG4gICAgQGV4dGVuZCAucHJpbWFyeS1idG4tZmlsbGVkLS1hY3RpdmU7XG59XG5cbi5hbHRlcm5hdGUtbGluay10ZXh0IHtcbiAgICBAZXh0ZW5kIC5ib2R5Mi10ZXh0O1xuICAgIGNvbG9yOiAkb24tYmFja2dyb3VuZDtcbn1cblxuLmFsdGVybmF0ZS1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xufVxuXG4uZXJyb3ItdG9hc3QtY29udGFpbmVyIHtcbiAgICBAZXh0ZW5kIC5ib2R5Mi10ZXh0O1xuICAgIGNvbG9yOiAkb24tZXJyb3I7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZXJyb3ItdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzBweDtcblxuICAgIHBhZGRpbmc6IDAuNWVtIDEuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lcnJvci10b2FzdC1pY29uIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/change-password/change-password.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/change-password/change-password.component.ts ***!
    \**************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_email_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/email-validator */
    "./src/app/shared/email-validator.ts");
    /* harmony import */


    var _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../trinity-lyfe.service */
    "./src/app/trinity-lyfe.service.ts");

    var ChangePasswordComponent = /*#__PURE__*/function () {
      function ChangePasswordComponent(fb, router, trinityLyfeService) {
        _classCallCheck(this, ChangePasswordComponent);

        this.fb = fb;
        this.router = router;
        this.trinityLyfeService = trinityLyfeService;
        this.passwordForm = this.fb.group({
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
          confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]]
        });
      }

      _createClass(ChangePasswordComponent, [{
        key: "password",
        get: function get() {
          return this.passwordForm.get('password');
        }
      }, {
        key: "confirmPassword",
        get: function get() {
          return this.passwordForm.get('confirmPassword');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedIn = localStorage.getItem("isLoggedIn");
          this.user = localStorage.getItem("user");

          if (this.isLoggedIn == "false") {
            this.router.navigate(['/login']);
          }

          this.setValidators();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          var formData = new FormData();
          formData.append("newPassword", this.passwordForm.get('password').value);
          formData.append("username", this.user);
          this.trinityLyfeService.postAPIData("user", formData, true).subscribe(function (resp) {
            _this.router.navigate(['/profile/' + _this.user]);
          }, function (errorResp) {
            if (errorResp.status == 401) {
              _this.updateError = "You are authorised to perform the operation!";
              localStorage.setItem("isLoggedIn", "false");
              localStorage.removeItem("user");

              _this.router.navigate(['/login']);
            } else {
              _this.updateError = "Something went wrong! Please try again later";
            }
          });
        }
      }, {
        key: "setValidators",
        value: function setValidators() {
          this.passwordForm.get('confirmPassword').setValidators(_shared_email_validator__WEBPACK_IMPORTED_MODULE_4__["PasswordValidator"].checkPasswords(this.passwordForm.get('password'), this.passwordForm.get('confirmPassword')));
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_5__["TrinityLyfeService"]
      }];
    };

    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-password.component.scss */
      "./src/app/change-password/change-password.component.scss"))["default"]]
    })], ChangePasswordComponent);
    /***/
  },

  /***/
  "./src/app/error-toast/error-toast.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/error-toast/error-toast.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppErrorToastErrorToastComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap\");\n/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput,\ntextarea {\n  all: unset;\n}\nbutton {\n  border: none;\n}\n* {\n  font-family: \"Nunito\", sans-serif;\n}\n.title-text {\n  font-size: 60px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h1-text {\n  font-size: 32px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h2-text {\n  font-size: 23px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h3-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h4-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n}\n.body1-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n}\n.body2-text, .error-toast-container {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 22px;\n}\n.body3-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 20px;\n}\n.button-text, .primary-btn-outline, .primary-btn-filled {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n  text-transform: uppercase;\n}\n.caption-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n}\n.overline-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.primary-btn-filled {\n  background-color: #0569b9;\n  color: #FFFFFB;\n  box-shadow: 0 4px 4px 2px rgba(5, 105, 185, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\n.primary-btn-filled--hover {\n  filter: brightness(0.98);\n  scale: 0.99;\n}\n.primary-btn-filled--active {\n  filter: brightness(0.95);\n  scale: 0.98;\n}\n.primary-btn-filled:disabled {\n  background-color: #C9C9C9;\n  pointer-events: none;\n  cursor: none;\n}\n.primary-btn-outline {\n  border: 1px solid #0569b9;\n  color: #0569b9;\n  background-color: #F9FAFE;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\nbody {\n  background-color: #F9FAFE;\n}\n.error-toast-container {\n  color: #FFFFFB;\n  background-color: rgba(201, 0, 0, 0.7);\n  position: absolute;\n  top: 30px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  width: 400px;\n  padding: 0.5em 1.5em;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.error-toast-icon {\n  height: 25px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9mb250cy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3Jlc2V0cy5zY3NzIiwic3JjL2FwcC9lcnJvci10b2FzdC9lcnJvci10b2FzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9jb2xvcnMuc2NzcyIsIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9hcHAvZXJyb3ItdG9hc3QvZXJyb3ItdG9hc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNRLG9GQUFBO0FDRFIsOEVBQUE7QUNBQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNHRDtBRERBLGdEQUFBO0FBQ0E7O0VBRUMsY0FBQTtBQ0lEO0FERkE7RUFDQyxjQUFBO0FDS0Q7QURIQTtFQUNDLGdCQUFBO0FDTUQ7QURKQTtFQUNDLFlBQUE7QUNPRDtBRExBOztFQUVDLFdBQUE7RUFDQSxhQUFBO0FDUUQ7QUROQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QUNTRDtBRE5BOztFQUVJLFVBQUE7QUNTSjtBRE5BO0VBQ0ksWUFBQTtBQ1NKO0FIeERBO0VBQ0ksaUNBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRzJESjtBRm5JQTtFQUNJLHlCR1BNO0VIUU4sY0dNUztFSExULGdEQUFBO0VBSUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsNEJBQUE7QUVrSUo7QUY5SEE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7QUVpSUo7QUY5SEE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7QUVpSUo7QUY5SEE7RUFDSSx5Qkd6Qks7RUgwQkwsb0JBQUE7RUFDQSxZQUFBO0FFaUlKO0FGOUhBO0VBQ0kseUJBQUE7RUFDQSxjR3hDTTtFSHlDTix5Qkc3Qk07RUhpQ04sYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsNEJBQUE7QUU2SEo7QUZ6SEE7RUFDQyx5Qkc1Q1k7QUR3S2I7QUVqTEE7RUFFSSxjRGdCTztFQ2RQLHNDRENnQjtFQ0FoQixrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsb0JBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FGZ0xKO0FFN0tBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FGZ0xKIiwiZmlsZSI6InNyYy9hcHAvZXJyb3ItdG9hc3QvZXJyb3ItdG9hc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8mZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmgxLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5oMi10ZXh0IHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxufVxuXG4uaDMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmg0LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5ib2R5MS10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuXG4uYm9keTItdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLmJvZHkzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5idXR0b24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FwdGlvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ub3ZlcmxpbmUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCAnLi9yZXNldHMuc2Nzcyc7XG5AaW1wb3J0ICcuL2NvbG9ycyc7XG5AaW1wb3J0ICcuL2ZvbnRzJztcblxuLnByaW1hcnktYnRuLWZpbGxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgY29sb3I6ICRvbi1wcmltYXJ5O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAycHggJHByaW1hcnktc2hhZG93O1xuICAgIFxuICAgIEBleHRlbmQgLmJ1dHRvbi10ZXh0O1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuXG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45OCk7XG4gICAgc2NhbGU6IDAuOTk7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICAgIHNjYWxlOiAwLjk4O1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogbm9uZTtcbn1cblxuLnByaW1hcnktYnRuLW91dGxpbmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VyZmFjZTtcblxuICAgIEBleHRlbmQgLmJ1dHRvbi10ZXh0O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG5cbn1cblxuYm9keSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xufSIsImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICAgIGFsbDogdW5zZXQ7XG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGFsbDogdW5zZXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDEtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uYm9keTEtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjlweDtcbn1cblxuLmJvZHkyLXRleHQsIC5lcnJvci10b2FzdC1jb250YWluZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5ib2R5My10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uYnV0dG9uLXRleHQsIC5wcmltYXJ5LWJ0bi1vdXRsaW5lLCAucHJpbWFyeS1idG4tZmlsbGVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FwdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ub3ZlcmxpbmUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTY5Yjk7XG4gIGNvbG9yOiAjRkZGRkZCO1xuICBib3gtc2hhZG93OiAwIDRweCA0cHggMnB4IHJnYmEoNSwgMTA1LCAxODUsIDAuMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTgpO1xuICBzY2FsZTogMC45OTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0tYWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICBzY2FsZTogMC45ODtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOUM5Qzk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IG5vbmU7XG59XG5cbi5wcmltYXJ5LWJ0bi1vdXRsaW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA1NjliOTtcbiAgY29sb3I6ICMwNTY5Yjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZFO1xufVxuXG4uZXJyb3ItdG9hc3QtY29udGFpbmVyIHtcbiAgY29sb3I6ICNGRkZGRkI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAxLCAwLCAwLCAwLjcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogMC41ZW0gMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZXJyb3ItdG9hc3QtaWNvbiB7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSIsIiRwcmltYXJ5OiAjMDU2OWI5O1xuJHByaW1hcnktbGlnaHQ6ICM1ODk2ZWM7XG4kcHJpbWFyeS1kYXJrOiAjMDAzZjg4O1xuXG4kc2Vjb25kYXJ5LXllbGxvdzogI2ZmZDIwMDtcblxuJGVycm9yOiAjQzkwMDAwO1xuJGVycm9yLXRyYW5zcGFyZW50OiByZ2JhKDIwMSwgMCwgMCwgMC43KTtcbiRib3JkZXI6ICNDOUM5Qzk7XG4kcGxhY2Vob2xkZXI6ICNBNUE1QTU7XG5cbiRiYWNrZ3JvdW5kOiAjRjlGQUZFO1xuJHN1cmZhY2U6ICNGOUZBRkU7XG5cbiRvbi1wcmltYXJ5OiAjRkZGRkZCO1xuJG9uLXByaW1hcnktbGlnaHQ6ICMyMzI1Mjg7XG4kb24tcHJpbWFyeS1kYXJrOiAjRkZGRkZCO1xuXG4kb24tc2Vjb25kYXJ5LXllbGxvdzogIzIzMjUyODtcblxuJG9uLWVycm9yOiAjRkZGRkZCO1xuXG4kb24tYmFja2dyb3VuZDogIzIzMjUyODtcbiRvbi1zdXJmYWNlOiAjMjMyNTI4O1xuXG4kcHJpbWFyeS1zaGFkb3c6IHJnYmEoNSwgMTA1LCAxODUsIDAuMik7XG4kc2Vjb25kYXJ5LXRlYWwtc2hhZG93OiByZ2IoNzQsIDE4OSwgMTcyLCAzNSUpO1xuJHNlY29uZGFyeS15ZWxsb3ctc2hhZG93OiByZ2IoMjUyLCAyMTAsIDM0LCAzNSUpO1xuJGNhcmQtc2hhZG93OiByZ2IoMTEyLCAxNDQsIDE3NiwgMzUlKTsiLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbi5lcnJvci10b2FzdC1jb250YWluZXIge1xuICAgIEBleHRlbmQgLmJvZHkyLXRleHQ7XG4gICAgY29sb3I6ICRvbi1lcnJvcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICRlcnJvci10cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA0MDBweDtcblxuICAgIHBhZGRpbmc6IDAuNWVtIDEuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lcnJvci10b2FzdC1pY29uIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/error-toast/error-toast.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/error-toast/error-toast.component.ts ***!
    \******************************************************/

  /*! exports provided: ErrorToastComponent */

  /***/
  function srcAppErrorToastErrorToastComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorToastComponent", function () {
      return ErrorToastComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorToastComponent = /*#__PURE__*/function () {
      function ErrorToastComponent() {
        _classCallCheck(this, ErrorToastComponent);
      }

      _createClass(ErrorToastComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorToastComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ErrorToastComponent.prototype, "error", void 0);
    ErrorToastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error-toast',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error-toast.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error-toast/error-toast.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error-toast.component.scss */
      "./src/app/error-toast/error-toast.component.scss"))["default"]]
    })], ErrorToastComponent);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.isLoggedIn()) {
            return true;
          } // navigate to login page as user is not authenticated      


          this.router.navigate(['/login']);
          return false;
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var status = false;

          if (localStorage.getItem('isLoggedIn') == "true") {
            status = true;
          } else {
            status = false;
          }

          return status;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/landing-page/landing-page.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/landing-page/landing-page.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLandingPageLandingPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap\");\n/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput,\ntextarea {\n  all: unset;\n}\nbutton {\n  border: none;\n}\n* {\n  font-family: \"Nunito\", sans-serif;\n}\n.title-text {\n  font-size: 60px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h1-text, .banner-title {\n  font-size: 32px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h2-text {\n  font-size: 23px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h3-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h4-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n}\n.body1-text, .banner-headline {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n}\n.body2-text {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 22px;\n}\n.body3-text, .form-input {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 20px;\n}\n.button-text, .primary-btn-outline, .primary-btn-filled {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n  text-transform: uppercase;\n}\n.caption-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n}\n.overline-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.primary-btn-filled {\n  background-color: #0569b9;\n  color: #FFFFFB;\n  box-shadow: 0 4px 4px 2px rgba(5, 105, 185, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\n.primary-btn-filled--hover {\n  filter: brightness(0.98);\n  scale: 0.99;\n}\n.primary-btn-filled--active {\n  filter: brightness(0.95);\n  scale: 0.98;\n}\n.primary-btn-filled:disabled {\n  background-color: #C9C9C9;\n  pointer-events: none;\n  cursor: none;\n}\n.primary-btn-outline {\n  border: 1px solid #0569b9;\n  color: #0569b9;\n  background-color: #F9FAFE;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\nbody {\n  background-color: #F9FAFE;\n}\n.banner-container {\n  height: 400px;\n  width: 100%;\n  background: url('landing-page-banner.png');\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.banner-content {\n  width: 60%;\n}\n.banner-title {\n  color: #FFFFFB;\n  margin-bottom: 25px;\n}\n.banner-headline {\n  color: #FFFFFB;\n  margin-bottom: 25px;\n}\n.form-input {\n  border-radius: 8px;\n  padding: 15px;\n  width: 100%;\n  border: 1px solid;\n  background-color: #F9FAFE;\n  color: #232528;\n  border-color: #C9C9C9;\n  transition: all 0.2s ease-in;\n}\n.form-input::-moz-placeholder {\n  color: #A5A5A5;\n}\n.form-input::placeholder {\n  color: #A5A5A5;\n}\n.form-input:focus {\n  border-color: #5896ec;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9mb250cy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3Jlc2V0cy5zY3NzIiwic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL2NvbG9ycy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSxvRkFBQTtBQ0RSLDhFQUFBO0FDQUE7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDR0Q7QUREQSxnREFBQTtBQUNBOztFQUVDLGNBQUE7QUNJRDtBREZBO0VBQ0MsY0FBQTtBQ0tEO0FESEE7RUFDQyxnQkFBQTtBQ01EO0FESkE7RUFDQyxZQUFBO0FDT0Q7QURMQTs7RUFFQyxXQUFBO0VBQ0EsYUFBQTtBQ1FEO0FETkE7RUFDQyx5QkFBQTtFQUNBLGlCQUFBO0FDU0Q7QUROQTs7RUFFSSxVQUFBO0FDU0o7QUROQTtFQUNJLFlBQUE7QUNTSjtBSHhEQTtFQUNJLGlDQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUcyREo7QUZuSUE7RUFDSSx5QkdQTTtFSFFOLGNHTVM7RUhMVCxnREFBQTtFQUlBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLDRCQUFBO0FFa0lKO0FGOUhBO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0FFaUlKO0FGOUhBO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0FFaUlKO0FGOUhBO0VBQ0kseUJHekJLO0VIMEJMLG9CQUFBO0VBQ0EsWUFBQTtBRWlJSjtBRjlIQTtFQUNJLHlCQUFBO0VBQ0EsY0d4Q007RUh5Q04seUJHN0JNO0VIaUNOLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLDRCQUFBO0FFNkhKO0FGekhBO0VBQ0MseUJHNUNZO0FEd0tiO0FFakxBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFFQSwwQ0FBQTtFQUNBLHNCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUZrTEo7QUUvS0E7RUFDSSxVQUFBO0FGa0xKO0FFOUtBO0VBRUksY0RQUztFQ1FULG1CQUFBO0FGZ0xKO0FFN0tBO0VBRUksY0RiUztFQ2NULG1CQUFBO0FGK0tKO0FFNUtBO0VBRUksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBRUEseUJEMUJNO0VDMkJOLGNEaEJTO0VDaUJULHFCRGhDSztFQ2tDTCw0QkFBQTtBRjRLSjtBRXhLQTtFQUNJLGNEdENVO0FEaU5kO0FFNUtBO0VBQ0ksY0R0Q1U7QURpTmQ7QUV4S0E7RUFDSSxxQkRsRFk7QUQ2TmhCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0byZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcblxuKiB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDEtdGV4dCB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmgyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5oMy10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxufVxuXG4uaDQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmJvZHkxLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5ib2R5Mi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uYm9keTMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXB0aW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5vdmVybGluZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0ICcuL3Jlc2V0cy5zY3NzJztcbkBpbXBvcnQgJy4vY29sb3JzJztcbkBpbXBvcnQgJy4vZm9udHMnO1xuXG4ucHJpbWFyeS1idG4tZmlsbGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgICBjb2xvcjogJG9uLXByaW1hcnk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IDJweCAkcHJpbWFyeS1zaGFkb3c7XG4gICAgXG4gICAgQGV4dGVuZCAuYnV0dG9uLXRleHQ7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG5cbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0taG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk4KTtcbiAgICBzY2FsZTogMC45OTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0tYWN0aXZlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG4gICAgc2NhbGU6IDAuOTg7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQ6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBub25lO1xufVxuXG4ucHJpbWFyeS1idG4tb3V0bGluZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnk7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdXJmYWNlO1xuXG4gICAgQGV4dGVuZCAuYnV0dG9uLXRleHQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcblxufVxuXG5ib2R5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG59IiwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gICAgYWxsOiB1bnNldDtcbn1cblxuYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgYWxsOiB1bnNldDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZS10ZXh0IHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMS10ZXh0LCAuYmFubmVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMi10ZXh0IHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMy10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oNC10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5ib2R5MS10ZXh0LCAuYmFubmVyLWhlYWRsaW5lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuXG4uYm9keTItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLmJvZHkzLXRleHQsIC5mb3JtLWlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uYnV0dG9uLXRleHQsIC5wcmltYXJ5LWJ0bi1vdXRsaW5lLCAucHJpbWFyeS1idG4tZmlsbGVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FwdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ub3ZlcmxpbmUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTY5Yjk7XG4gIGNvbG9yOiAjRkZGRkZCO1xuICBib3gtc2hhZG93OiAwIDRweCA0cHggMnB4IHJnYmEoNSwgMTA1LCAxODUsIDAuMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTgpO1xuICBzY2FsZTogMC45OTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0tYWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICBzY2FsZTogMC45ODtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOUM5Qzk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IG5vbmU7XG59XG5cbi5wcmltYXJ5LWJ0bi1vdXRsaW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA1NjliOTtcbiAgY29sb3I6ICMwNTY5Yjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZFO1xufVxuXG4uYmFubmVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2xhbmRpbmctcGFnZS1iYW5uZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJhbm5lci1jb250ZW50IHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmJhbm5lci10aXRsZSB7XG4gIGNvbG9yOiAjRkZGRkZCO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYmFubmVyLWhlYWRsaW5lIHtcbiAgY29sb3I6ICNGRkZGRkI7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkU7XG4gIGNvbG9yOiAjMjMyNTI4O1xuICBib3JkZXItY29sb3I6ICNDOUM5Qzk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbi5mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjQTVBNUE1O1xufVxuXG4uZm9ybS1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzU4OTZlYztcbn0iLCIkcHJpbWFyeTogIzA1NjliOTtcbiRwcmltYXJ5LWxpZ2h0OiAjNTg5NmVjO1xuJHByaW1hcnktZGFyazogIzAwM2Y4ODtcblxuJHNlY29uZGFyeS15ZWxsb3c6ICNmZmQyMDA7XG5cbiRlcnJvcjogI0M5MDAwMDtcbiRlcnJvci10cmFuc3BhcmVudDogcmdiYSgyMDEsIDAsIDAsIDAuNyk7XG4kYm9yZGVyOiAjQzlDOUM5O1xuJHBsYWNlaG9sZGVyOiAjQTVBNUE1O1xuXG4kYmFja2dyb3VuZDogI0Y5RkFGRTtcbiRzdXJmYWNlOiAjRjlGQUZFO1xuXG4kb24tcHJpbWFyeTogI0ZGRkZGQjtcbiRvbi1wcmltYXJ5LWxpZ2h0OiAjMjMyNTI4O1xuJG9uLXByaW1hcnktZGFyazogI0ZGRkZGQjtcblxuJG9uLXNlY29uZGFyeS15ZWxsb3c6ICMyMzI1Mjg7XG5cbiRvbi1lcnJvcjogI0ZGRkZGQjtcblxuJG9uLWJhY2tncm91bmQ6ICMyMzI1Mjg7XG4kb24tc3VyZmFjZTogIzIzMjUyODtcblxuJHByaW1hcnktc2hhZG93OiByZ2JhKDUsIDEwNSwgMTg1LCAwLjIpO1xuJHNlY29uZGFyeS10ZWFsLXNoYWRvdzogcmdiKDc0LCAxODksIDE3MiwgMzUlKTtcbiRzZWNvbmRhcnkteWVsbG93LXNoYWRvdzogcmdiKDI1MiwgMjEwLCAzNCwgMzUlKTtcbiRjYXJkLXNoYWRvdzogcmdiKDExMiwgMTQ0LCAxNzYsIDM1JSk7IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG4uYmFubmVyLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9sYW5kaW5nLXBhZ2UtYmFubmVyLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iYW5uZXItY29udGVudCB7XG4gICAgd2lkdGg6IDYwJTtcbn1cblxuXG4uYmFubmVyLXRpdGxlIHtcbiAgICBAZXh0ZW5kIC5oMS10ZXh0O1xuICAgIGNvbG9yOiAkb24tcHJpbWFyeTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYmFubmVyLWhlYWRsaW5lIHtcbiAgICBAZXh0ZW5kIC5ib2R5MS10ZXh0O1xuICAgIGNvbG9yOiAkb24tcHJpbWFyeTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gICAgQGV4dGVuZCAuYm9keTMtdGV4dDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZDsgICAgXG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1cmZhY2U7XG4gICAgY29sb3I6ICRvbi1zdXJmYWNlO1xuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcblxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gICAgXG59XG5cbi5mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRwbGFjZWhvbGRlcjtcbn1cblxuLmZvcm0taW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktbGlnaHQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/landing-page/landing-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/landing-page/landing-page.component.ts ***!
    \********************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function srcAppLandingPageLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../trinity-lyfe.service */
    "./src/app/trinity-lyfe.service.ts");

    var LandingPageComponent = /*#__PURE__*/function () {
      function LandingPageComponent(router, trinityLyfeService, fb) {
        _classCallCheck(this, LandingPageComponent);

        this.router = router;
        this.trinityLyfeService = trinityLyfeService;
        this.fb = fb;
        this.postDetailArray = [];
        this.searchForm = this.fb.group({
          searchValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(LandingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.isLoggedIn = localStorage.getItem("isLoggedIn");
          // this.user = localStorage.getItem("user");
          // if(this.isLoggedIn == "false") {
          //   this.router.navigate(['/login']);
          // }
          this.getPostDetails();
        }
      }, {
        key: "getPostDetails",
        value: function getPostDetails() {
          var _this2 = this;

          this.trinityLyfeService.getAPIData("photo", true).subscribe(function (resp) {
            var postResultArray = resp.results.posts;
            _this2.postDetailArray = [];

            var _loop = function _loop(index) {
              var postResult = postResultArray[index];
              var postDetail = {};
              postDetail["post_id"] = postResult["post_id"];

              _this2.trinityLyfeService.getAPIData("like/" + postDetail["post_id"], true).subscribe(function (resp) {
                postDetail["likesCount"] = resp.results.likes.length;
              }, function (errorResp) {
                console.log(errorResp);
              });

              _this2.trinityLyfeService.getAPIData("comment/" + postDetail["post_id"], true).subscribe(function (resp) {
                postDetail["commentsCount"] = resp.results.comments.length;
              }, function (errorResp) {
                console.log(errorResp);
              });

              postDetail["src"] = "data:image/jpeg;base64," + postResult["post_img_path"];

              _this2.postDetailArray.push(postDetail);
            };

            for (var index in postResultArray) {
              _loop(index);
            }
          }, function (errorResp) {
            if (errorResp.status !== 404) {
              _this2.error = "Something went wrong! Please try again later";
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var searchTerm = this.searchForm.get('searchValue').value;
          this.router.navigate(['/search-results', searchTerm]);
        }
      }]);

      return LandingPageComponent;
    }();

    LandingPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_4__["TrinityLyfeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing-page.component.scss */
      "./src/app/landing-page/landing-page.component.scss"))["default"]]
    })], LandingPageComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap\");\n/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput,\ntextarea {\n  all: unset;\n}\nbutton {\n  border: none;\n}\n* {\n  font-family: \"Nunito\", sans-serif;\n}\n.title-text {\n  font-size: 60px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h1-text {\n  font-size: 32px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h2-text, .form-header {\n  font-size: 23px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h3-text, .form-subheader {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h4-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n}\n.body1-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n}\n.body2-text, .error-toast-container, .alternate-link-text {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 22px;\n}\n.body3-text, .form-input, .form-input-label {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 20px;\n}\n.button-text, .primary-btn-outline, .primary-btn-filled, .form-submit-btn {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n  text-transform: uppercase;\n}\n.caption-text, .form-input-error {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n}\n.overline-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.primary-btn-filled, .form-submit-btn {\n  background-color: #0569b9;\n  color: #FFFFFB;\n  box-shadow: 0 4px 4px 2px rgba(5, 105, 185, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\n.primary-btn-filled--hover, .form-submit-btn:hover {\n  filter: brightness(0.98);\n  scale: 0.99;\n}\n.primary-btn-filled--active, .form-submit-btn:active {\n  filter: brightness(0.95);\n  scale: 0.98;\n}\n.primary-btn-filled:disabled, .form-submit-btn:disabled {\n  background-color: #C9C9C9;\n  pointer-events: none;\n  cursor: none;\n}\n.primary-btn-outline {\n  border: 1px solid #0569b9;\n  color: #0569b9;\n  background-color: #F9FAFE;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\nbody {\n  background-color: #F9FAFE;\n}\n.page-container {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n}\n.illustration-container {\n  width: 45%;\n  height: 100vh;\n}\n.illustration-img {\n  height: 100%;\n  width: 100%;\n}\n.form-container {\n  flex-grow: 1;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.form-header {\n  color: #232528;\n  margin-bottom: 25px;\n}\n.form-subheader {\n  color: #A5A5A5;\n  margin-bottom: 30px;\n}\n.form {\n  width: 50%;\n}\n.form-input-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n}\n.form-input-label {\n  color: #003f88;\n  margin-bottom: 5px;\n}\n.form-input {\n  border-radius: 8px;\n  padding: 10px;\n  border: 1px solid;\n  color: #232528;\n  border-color: #C9C9C9;\n  transition: all 0.2s ease-in;\n}\n.form-input::-moz-placeholder {\n  color: #A5A5A5;\n}\n.form-input::placeholder {\n  color: #A5A5A5;\n}\n.form-input:focus {\n  border-color: #5896ec;\n}\n.form-input-error {\n  color: #C90000;\n  margin-top: 5px;\n}\n.form-submit-btn {\n  margin-top: 10px;\n  padding: 12px 28px;\n  border-radius: 10px;\n}\n.alternate-link-text {\n  color: #232528;\n}\n.alternate-link {\n  text-decoration: none;\n  color: #0569b9;\n}\n.error-toast-container {\n  color: #FFFFFB;\n  background-color: rgba(201, 0, 0, 0.7);\n  position: absolute;\n  top: 30px;\n  padding: 0.5em 1.5em;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.error-toast-icon {\n  height: 25px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9mb250cy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3Jlc2V0cy5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9jb2xvcnMuc2NzcyIsIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNRLG9GQUFBO0FDRFIsOEVBQUE7QUNBQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VB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Y0Q3Rk87RUMrRlAsc0NENUdnQjtFQzZHaEIsa0JBQUE7RUFDQSxTQUFBO0VBRUEsb0JBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FGMkpKO0FFeEpBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FGMkpKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8mZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmgxLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5oMi10ZXh0IHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxufVxuXG4uaDMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmg0LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5ib2R5MS10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuXG4uYm9keTItdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLmJvZHkzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5idXR0b24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FwdGlvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ub3ZlcmxpbmUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCAnLi9yZXNldHMuc2Nzcyc7XG5AaW1wb3J0ICcuL2NvbG9ycyc7XG5AaW1wb3J0ICcuL2ZvbnRzJztcblxuLnByaW1hcnktYnRuLWZpbGxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgY29sb3I6ICRvbi1wcmltYXJ5O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAycHggJHByaW1hcnktc2hhZG93O1xuICAgIFxuICAgIEBleHRlbmQgLmJ1dHRvbi10ZXh0O1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuXG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45OCk7XG4gICAgc2NhbGU6IDAuOTk7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICAgIHNjYWxlOiAwLjk4O1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogbm9uZTtcbn1cblxuLnByaW1hcnktYnRuLW91dGxpbmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VyZmFjZTtcblxuICAgIEBleHRlbmQgLmJ1dHRvbi10ZXh0O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG5cbn1cblxuYm9keSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xufSIsImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICAgIGFsbDogdW5zZXQ7XG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGFsbDogdW5zZXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDEtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDItdGV4dCwgLmZvcm0taGVhZGVyIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMy10ZXh0LCAuZm9ybS1zdWJoZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmg0LXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmJvZHkxLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5ib2R5Mi10ZXh0LCAuZXJyb3ItdG9hc3QtY29udGFpbmVyLCAuYWx0ZXJuYXRlLWxpbmstdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLmJvZHkzLXRleHQsIC5mb3JtLWlucHV0LCAuZm9ybS1pbnB1dC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbi10ZXh0LCAucHJpbWFyeS1idG4tb3V0bGluZSwgLnByaW1hcnktYnRuLWZpbGxlZCwgLmZvcm0tc3VibWl0LWJ0biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcHRpb24tdGV4dCwgLmZvcm0taW5wdXQtZXJyb3Ige1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5vdmVybGluZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkLCAuZm9ybS1zdWJtaXQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1NjliOTtcbiAgY29sb3I6ICNGRkZGRkI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAycHggcmdiYSg1LCAxMDUsIDE4NSwgMC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0taG92ZXIsIC5mb3JtLXN1Ym1pdC1idG46aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45OCk7XG4gIHNjYWxlOiAwLjk5O1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkLS1hY3RpdmUsIC5mb3JtLXN1Ym1pdC1idG46YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICBzY2FsZTogMC45ODtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZDpkaXNhYmxlZCwgLmZvcm0tc3VibWl0LWJ0bjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOUM5Qzk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IG5vbmU7XG59XG5cbi5wcmltYXJ5LWJ0bi1vdXRsaW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA1NjliOTtcbiAgY29sb3I6ICMwNTY5Yjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZFO1xufVxuXG4ucGFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlsbHVzdHJhdGlvbi1jb250YWluZXIge1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uaWxsdXN0cmF0aW9uLWltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgY29sb3I6ICMyMzI1Mjg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5mb3JtLXN1YmhlYWRlciB7XG4gIGNvbG9yOiAjQTVBNUE1O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZm9ybSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5mb3JtLWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWlucHV0LWxhYmVsIHtcbiAgY29sb3I6ICMwMDNmODg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmZvcm0taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBjb2xvcjogIzIzMjUyODtcbiAgYm9yZGVyLWNvbG9yOiAjQzlDOUM5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuXG4uZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0E1QTVBNTtcbn1cblxuLmZvcm0taW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM1ODk2ZWM7XG59XG5cbi5mb3JtLWlucHV0LWVycm9yIHtcbiAgY29sb3I6ICNDOTAwMDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZvcm0tc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFsdGVybmF0ZS1saW5rLXRleHQge1xuICBjb2xvcjogIzIzMjUyODtcbn1cblxuLmFsdGVybmF0ZS1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzA1NjliOTtcbn1cblxuLmVycm9yLXRvYXN0LWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjRkZGRkZCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMSwgMCwgMCwgMC43KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDAuNWVtIDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVycm9yLXRvYXN0LWljb24ge1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iLCIkcHJpbWFyeTogIzA1NjliOTtcbiRwcmltYXJ5LWxpZ2h0OiAjNTg5NmVjO1xuJHByaW1hcnktZGFyazogIzAwM2Y4ODtcblxuJHNlY29uZGFyeS15ZWxsb3c6ICNmZmQyMDA7XG5cbiRlcnJvcjogI0M5MDAwMDtcbiRlcnJvci10cmFuc3BhcmVudDogcmdiYSgyMDEsIDAsIDAsIDAuNyk7XG4kYm9yZGVyOiAjQzlDOUM5O1xuJHBsYWNlaG9sZGVyOiAjQTVBNUE1O1xuXG4kYmFja2dyb3VuZDogI0Y5RkFGRTtcbiRzdXJmYWNlOiAjRjlGQUZFO1xuXG4kb24tcHJpbWFyeTogI0ZGRkZGQjtcbiRvbi1wcmltYXJ5LWxpZ2h0OiAjMjMyNTI4O1xuJG9uLXByaW1hcnktZGFyazogI0ZGRkZGQjtcblxuJG9uLXNlY29uZGFyeS15ZWxsb3c6ICMyMzI1Mjg7XG5cbiRvbi1lcnJvcjogI0ZGRkZGQjtcblxuJG9uLWJhY2tncm91bmQ6ICMyMzI1Mjg7XG4kb24tc3VyZmFjZTogIzIzMjUyODtcblxuJHByaW1hcnktc2hhZG93OiByZ2JhKDUsIDEwNSwgMTg1LCAwLjIpO1xuJHNlY29uZGFyeS10ZWFsLXNoYWRvdzogcmdiKDc0LCAxODksIDE3MiwgMzUlKTtcbiRzZWNvbmRhcnkteWVsbG93LXNoYWRvdzogcmdiKDI1MiwgMjEwLCAzNCwgMzUlKTtcbiRjYXJkLXNoYWRvdzogcmdiKDExMiwgMTQ0LCAxNzYsIDM1JSk7IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG4ucGFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbn1cblxuLmlsbHVzdHJhdGlvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmlsbHVzdHJhdGlvbi1pbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9ybS1oZWFkZXIge1xuICAgIEBleHRlbmQgLmgyLXRleHQ7XG4gICAgY29sb3I6ICRvbi1iYWNrZ3JvdW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5mb3JtLXN1YmhlYWRlciB7XG4gICAgQGV4dGVuZCAuaDMtdGV4dDtcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4uZm9ybS1pbnB1dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybS1pbnB1dC1sYWJlbCB7XG4gICAgQGV4dGVuZCAuYm9keTMtdGV4dDtcbiAgICBjb2xvcjogJHByaW1hcnktZGFyaztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgICBAZXh0ZW5kIC5ib2R5My10ZXh0O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkOyAgICBcbiAgICBcbiAgICBjb2xvcjogJG9uLWJhY2tncm91bmQ7XG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgICBcbn1cblxuLmZvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyO1xufVxuXG4uZm9ybS1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1saWdodDtcbn1cblxuLmZvcm0taW5wdXQtZXJyb3Ige1xuICAgIGNvbG9yOiAkZXJyb3I7XG4gICAgQGV4dGVuZCAuY2FwdGlvbi10ZXh0O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZvcm0tc3VibWl0LWJ0biB7XG4gICAgQGV4dGVuZCAucHJpbWFyeS1idG4tZmlsbGVkO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogMTJweCAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5mb3JtLXN1Ym1pdC1idG46aG92ZXIge1xuICAgIEBleHRlbmQgLnByaW1hcnktYnRuLWZpbGxlZC0taG92ZXI7XG59XG5cbi5mb3JtLXN1Ym1pdC1idG46YWN0aXZlIHtcbiAgICBAZXh0ZW5kIC5wcmltYXJ5LWJ0bi1maWxsZWQtLWFjdGl2ZTtcbn1cblxuLmFsdGVybmF0ZS1saW5rLXRleHQge1xuICAgIEBleHRlbmQgLmJvZHkyLXRleHQ7XG4gICAgY29sb3I6ICRvbi1iYWNrZ3JvdW5kO1xufVxuXG4uYWx0ZXJuYXRlLWxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogJHByaW1hcnk7XG59XG5cbi5lcnJvci10b2FzdC1jb250YWluZXIge1xuICAgIEBleHRlbmQgLmJvZHkyLXRleHQ7XG4gICAgY29sb3I6ICRvbi1lcnJvcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICRlcnJvci10cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMHB4O1xuXG4gICAgcGFkZGluZzogMC41ZW0gMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVycm9yLXRvYXN0LWljb24ge1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, fb, authService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.loginForm = this.fb.group({
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem("isLoggedIn") == "true") {
            this.router.navigate(['/landing-page']);
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          var formData = new FormData();
          formData.append('username', this.loginForm.get('username').value);
          formData.append('password', this.loginForm.get('password').value);
          this.authService.doLogin(formData).subscribe(function (resp) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("user", resp.results.user);

            _this3.router.navigate(['/landing-page']);
          }, function (errorResp) {
            localStorage.setItem("isLoggedIn", "false");

            if (errorResp.status == 401) {
              _this3.loginError = "Please verify your username & password and try again";
            } else {
              _this3.loginError = "Something went wrong! Please try again later";
            }
          });
        }
      }, {
        key: "username",
        get: function get() {
          return this.loginForm.get('username');
        }
      }, {
        key: "password",
        get: function get() {
          return this.loginForm.get('password');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/navbar/navbar.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap\");\n/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput,\ntextarea {\n  all: unset;\n}\nbutton {\n  border: none;\n}\n* {\n  font-family: \"Nunito\", sans-serif;\n}\n.title-text {\n  font-size: 60px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h1-text {\n  font-size: 32px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h2-text {\n  font-size: 23px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h3-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h4-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n}\n.body1-text, .logo-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n}\n.body2-text, .profile-link-text {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 22px;\n}\n.body3-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 20px;\n}\n.button-text, .link-container, .primary-btn-outline, .logout-btn, .primary-btn-filled, .upload-photo-btn {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n  text-transform: uppercase;\n}\n.caption-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n}\n.overline-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.primary-btn-filled, .upload-photo-btn {\n  background-color: #0569b9;\n  color: #FFFFFB;\n  box-shadow: 0 4px 4px 2px rgba(5, 105, 185, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\n.primary-btn-filled--hover, .upload-photo-btn:hover {\n  filter: brightness(0.98);\n  scale: 0.99;\n}\n.primary-btn-filled--active, .upload-photo-btn:active {\n  filter: brightness(0.95);\n  scale: 0.98;\n}\n.primary-btn-filled:disabled, .upload-photo-btn:disabled {\n  background-color: #C9C9C9;\n  pointer-events: none;\n  cursor: none;\n}\n.primary-btn-outline, .logout-btn {\n  border: 1px solid #0569b9;\n  color: #0569b9;\n  background-color: #F9FAFE;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\nbody {\n  background-color: #F9FAFE;\n}\n.navbar-container {\n  display: flex;\n  background-color: #F9FAFE;\n  padding: 18px 24px;\n  justify-content: space-between;\n}\n.navbar-left-container,\n.navbar-right-container {\n  display: flex;\n  align-items: center;\n}\n.logo-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.logo-img {\n  height: 30px;\n  margin-right: 5px;\n}\n.logo-text {\n  color: #232528;\n}\n.upload-photo-btn {\n  padding: 10px 20px;\n  border-radius: 10px;\n  margin-right: 35px;\n}\n.upload-photo-btn-icon {\n  height: 15px;\n  margin-right: 8px;\n}\n.profile-link-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n}\n.profile-link-text {\n  color: #232528;\n  cursor: pointer;\n}\n.profile-img-container {\n  height: 45px;\n  width: 45px;\n  background-color: #003f88;\n  border-radius: 100%;\n  margin-right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.profile-img {\n  height: 35px;\n}\n.link-container {\n  color: #232528;\n  cursor: pointer;\n}\n.link-container:not(:last-child) {\n  margin-right: 35px;\n}\n.logout-btn {\n  padding: 5px 10px;\n  border-radius: 10px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9mb250cy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3Jlc2V0cy5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL2NvbG9ycy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSxvRkFBQTtBQ0RSLDhFQUFBO0FDQUE7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFB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LyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8mZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmgxLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5oMi10ZXh0IHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxufVxuXG4uaDMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmg0LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5ib2R5MS10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuXG4uYm9keTItdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLmJvZHkzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5idXR0b24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FwdGlvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ub3ZlcmxpbmUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCAnLi9yZXNldHMuc2Nzcyc7XG5AaW1wb3J0ICcuL2NvbG9ycyc7XG5AaW1wb3J0ICcuL2ZvbnRzJztcblxuLnByaW1hcnktYnRuLWZpbGxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgY29sb3I6ICRvbi1wcmltYXJ5O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAycHggJHByaW1hcnktc2hhZG93O1xuICAgIFxuICAgIEBleHRlbmQgLmJ1dHRvbi10ZXh0O1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuXG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45OCk7XG4gICAgc2NhbGU6IDAuOTk7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICAgIHNjYWxlOiAwLjk4O1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogbm9uZTtcbn1cblxuLnByaW1hcnktYnRuLW91dGxpbmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VyZmFjZTtcblxuICAgIEBleHRlbmQgLmJ1dHRvbi10ZXh0O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG5cbn1cblxuYm9keSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xufSIsImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICAgIGFsbDogdW5zZXQ7XG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGFsbDogdW5zZXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDEtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uYm9keTEtdGV4dCwgLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjlweDtcbn1cblxuLmJvZHkyLXRleHQsIC5wcm9maWxlLWxpbmstdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLmJvZHkzLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5idXR0b24tdGV4dCwgLmxpbmstY29udGFpbmVyLCAucHJpbWFyeS1idG4tb3V0bGluZSwgLmxvZ291dC1idG4sIC5wcmltYXJ5LWJ0bi1maWxsZWQsIC51cGxvYWQtcGhvdG8tYnRuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FwdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ub3ZlcmxpbmUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZCwgLnVwbG9hZC1waG90by1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU2OWI5O1xuICBjb2xvcjogI0ZGRkZGQjtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IDJweCByZ2JhKDUsIDEwNSwgMTg1LCAwLjIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkLS1ob3ZlciwgLnVwbG9hZC1waG90by1idG46aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45OCk7XG4gIHNjYWxlOiAwLjk5O1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkLS1hY3RpdmUsIC51cGxvYWQtcGhvdG8tYnRuOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcbiAgc2NhbGU6IDAuOTg7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQ6ZGlzYWJsZWQsIC51cGxvYWQtcGhvdG8tYnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M5QzlDOTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogbm9uZTtcbn1cblxuLnByaW1hcnktYnRuLW91dGxpbmUsIC5sb2dvdXQtYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA1NjliOTtcbiAgY29sb3I6ICMwNTY5Yjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZFO1xufVxuXG4ubmF2YmFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkU7XG4gIHBhZGRpbmc6IDE4cHggMjRweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubmF2YmFyLWxlZnQtY29udGFpbmVyLFxuLm5hdmJhci1yaWdodC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nby1pbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubG9nby10ZXh0IHtcbiAgY29sb3I6ICMyMzI1Mjg7XG59XG5cbi51cGxvYWQtcGhvdG8tYnRuIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG59XG5cbi51cGxvYWQtcGhvdG8tYnRuLWljb24ge1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4ucHJvZmlsZS1saW5rLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5wcm9maWxlLWxpbmstdGV4dCB7XG4gIGNvbG9yOiAjMjMyNTI4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9maWxlLWltZy1jb250YWluZXIge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzZjg4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvZmlsZS1pbWcge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5saW5rLWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjMjMyNTI4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saW5rLWNvbnRhaW5lcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xufVxuXG4ubG9nb3V0LWJ0biB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iLCIkcHJpbWFyeTogIzA1NjliOTtcbiRwcmltYXJ5LWxpZ2h0OiAjNTg5NmVjO1xuJHByaW1hcnktZGFyazogIzAwM2Y4ODtcblxuJHNlY29uZGFyeS15ZWxsb3c6ICNmZmQyMDA7XG5cbiRlcnJvcjogI0M5MDAwMDtcbiRlcnJvci10cmFuc3BhcmVudDogcmdiYSgyMDEsIDAsIDAsIDAuNyk7XG4kYm9yZGVyOiAjQzlDOUM5O1xuJHBsYWNlaG9sZGVyOiAjQTVBNUE1O1xuXG4kYmFja2dyb3VuZDogI0Y5RkFGRTtcbiRzdXJmYWNlOiAjRjlGQUZFO1xuXG4kb24tcHJpbWFyeTogI0ZGRkZGQjtcbiRvbi1wcmltYXJ5LWxpZ2h0OiAjMjMyNTI4O1xuJG9uLXByaW1hcnktZGFyazogI0ZGRkZGQjtcblxuJG9uLXNlY29uZGFyeS15ZWxsb3c6ICMyMzI1Mjg7XG5cbiRvbi1lcnJvcjogI0ZGRkZGQjtcblxuJG9uLWJhY2tncm91bmQ6ICMyMzI1Mjg7XG4kb24tc3VyZmFjZTogIzIzMjUyODtcblxuJHByaW1hcnktc2hhZG93OiByZ2JhKDUsIDEwNSwgMTg1LCAwLjIpO1xuJHNlY29uZGFyeS10ZWFsLXNoYWRvdzogcmdiKDc0LCAxODksIDE3MiwgMzUlKTtcbiRzZWNvbmRhcnkteWVsbG93LXNoYWRvdzogcmdiKDI1MiwgMjEwLCAzNCwgMzUlKTtcbiRjYXJkLXNoYWRvdzogcmdiKDExMiwgMTQ0LCAxNzYsIDM1JSk7IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG4ubmF2YmFyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcblxuICAgIHBhZGRpbmc6IDE4cHggMjRweDtcblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm5hdmJhci1sZWZ0LWNvbnRhaW5lcixcbi5uYXZiYXItcmlnaHQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dvLWltZyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubG9nby10ZXh0IHtcbiAgICBAZXh0ZW5kIC5ib2R5MS10ZXh0O1xuICAgIGNvbG9yOiAkb24tYmFja2dyb3VuZDtcbn1cblxuLnVwbG9hZC1waG90by1idG4ge1xuICAgIEBleHRlbmQgLnByaW1hcnktYnRuLWZpbGxlZDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG59XG5cbi51cGxvYWQtcGhvdG8tYnRuOmhvdmVyIHtcbiAgICBAZXh0ZW5kIC5wcmltYXJ5LWJ0bi1maWxsZWQtLWhvdmVyO1xufVxuXG4udXBsb2FkLXBob3RvLWJ0bjphY3RpdmUge1xuICAgIEBleHRlbmQgLnByaW1hcnktYnRuLWZpbGxlZC0tYWN0aXZlO1xufVxuXG4udXBsb2FkLXBob3RvLWJ0bi1pY29uIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5wcm9maWxlLWxpbmstY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5wcm9maWxlLWxpbmstdGV4dCB7XG4gICAgQGV4dGVuZCAuYm9keTItdGV4dDtcbiAgICBjb2xvcjogJG9uLWJhY2tncm91bmQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZmlsZS1pbWctY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktZGFyaztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubGluay1jb250YWluZXIge1xuICAgIEBleHRlbmQgLmJ1dHRvbi10ZXh0O1xuICAgIGNvbG9yOiAkb24tYmFja2dyb3VuZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saW5rLWNvbnRhaW5lcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG59XG5cbi5sb2dvdXQtYnRuIHtcbiAgICBAZXh0ZW5kIC5wcmltYXJ5LWJ0bi1vdXRsaW5lO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(router, authService) {
        _classCallCheck(this, NavbarComponent);

        this.router = router;
        this.authService = authService;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedIn = localStorage.getItem("isLoggedIn") === null ? "false" : localStorage.getItem("isLoggedIn");
          this.user = localStorage.getItem("user");
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this4 = this;

          this.authService.doLogout().subscribe(function (resp) {
            localStorage.setItem("isLoggedIn", resp.results.loggedIn);
            _this4.isLoggedIn = resp.results.loggedIn.toString();

            _this4.router.navigate(["/"]);
          }, function (errorResp) {
            localStorage.setItem("isLoggedIn", "false");
            localStorage.removeItem("user");
            _this4.isLoggedIn = "false";

            _this4.router.navigate(["/"]);
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/navbar/navbar.component.scss"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap\");\n/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput,\ntextarea {\n  all: unset;\n}\nbutton {\n  border: none;\n}\n* {\n  font-family: \"Nunito\", sans-serif;\n}\n.title-text {\n  font-size: 60px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h1-text {\n  font-size: 32px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h2-text, .page-not-found-text {\n  font-size: 23px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h3-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h4-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n}\n.body1-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n}\n.body2-text {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 22px;\n}\n.body3-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 20px;\n}\n.button-text, .primary-btn-outline, .primary-btn-filled {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n  text-transform: uppercase;\n}\n.caption-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n}\n.overline-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.primary-btn-filled {\n  background-color: #0569b9;\n  color: #FFFFFB;\n  box-shadow: 0 4px 4px 2px rgba(5, 105, 185, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\n.primary-btn-filled--hover {\n  filter: brightness(0.98);\n  scale: 0.99;\n}\n.primary-btn-filled--active {\n  filter: brightness(0.95);\n  scale: 0.98;\n}\n.primary-btn-filled:disabled {\n  background-color: #C9C9C9;\n  pointer-events: none;\n  cursor: none;\n}\n.primary-btn-outline {\n  border: 1px solid #0569b9;\n  color: #0569b9;\n  background-color: #F9FAFE;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\nbody {\n  background-color: #F9FAFE;\n}\n.page-not-found-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 90vh;\n}\n.page-not-found-text {\n  margin-bottom: 30px;\n}\n.page-not-found-link-container {\n  margin-bottom: 30px;\n}\n.page-not-found-link-container a {\n  color: #0569b9;\n}\n.page-not-found-img {\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9mb250cy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3Jlc2V0cy5zY3NzIiwic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9jb2xvcnMuc2NzcyIsIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNRLG9GQUFBO0FDRFIsOEVBQUE7QUNBQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNHRDtBRERBLGdEQUFBO0FBQ0E7O0VBRUMsY0FBQTtBQ0lEO0FERkE7RUFDQyxjQUFBO0FDS0Q7QURIQTtFQUNDLGdCQUFBO0FDTUQ7QURKQTtFQUNDLFlBQUE7QUNPRDtBRExBOztFQUVDLFdBQUE7RUFDQSxhQUFBO0FDUUQ7QUROQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QUNTRDtBRE5BOztFQUVJLFVBQUE7QUNTSjtBRE5BO0VBQ0ksWUFBQTtBQ1NKO0FIeERBO0VBQ0ksaUNBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRzJESjtBRm5JQTtFQUNJLHlCR1BNO0VIUU4sY0dNUztFSExULGdEQUFBO0VBSUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsNEJBQUE7QUVrSUo7QUY5SEE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7QUVpSUo7QUY5SEE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7QUVpSUo7QUY5SEE7RUFDSSx5Qkd6Qks7RUgwQkwsb0JBQUE7RUFDQSxZQUFBO0FFaUlKO0FGOUhBO0VBQ0kseUJBQUE7RUFDQSxjR3hDTTtFSHlDTix5Qkc3Qk07RUhpQ04sYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsNEJBQUE7QUU2SEo7QUZ6SEE7RUFDQyx5Qkc1Q1k7QUR3S2I7QUVqTEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBRm1MSjtBRWhMQTtFQUVJLG1CQUFBO0FGa0xKO0FFL0tBO0VBQ0ksbUJBQUE7QUZrTEo7QUUvS0E7RUFDSSxjRHJCTTtBRHVNVjtBRS9LQTtFQUNJLGFBQUE7QUZrTEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0byZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcblxuKiB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDEtdGV4dCB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmgyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5oMy10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxufVxuXG4uaDQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmJvZHkxLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5ib2R5Mi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uYm9keTMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXB0aW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5vdmVybGluZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0ICcuL3Jlc2V0cy5zY3NzJztcbkBpbXBvcnQgJy4vY29sb3JzJztcbkBpbXBvcnQgJy4vZm9udHMnO1xuXG4ucHJpbWFyeS1idG4tZmlsbGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgICBjb2xvcjogJG9uLXByaW1hcnk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IDJweCAkcHJpbWFyeS1zaGFkb3c7XG4gICAgXG4gICAgQGV4dGVuZCAuYnV0dG9uLXRleHQ7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG5cbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0taG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk4KTtcbiAgICBzY2FsZTogMC45OTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0tYWN0aXZlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG4gICAgc2NhbGU6IDAuOTg7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQ6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBub25lO1xufVxuXG4ucHJpbWFyeS1idG4tb3V0bGluZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnk7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdXJmYWNlO1xuXG4gICAgQGV4dGVuZCAuYnV0dG9uLXRleHQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcblxufVxuXG5ib2R5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG59IiwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gICAgYWxsOiB1bnNldDtcbn1cblxuYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgYWxsOiB1bnNldDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZS10ZXh0IHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMS10ZXh0IHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMi10ZXh0LCAucGFnZS1ub3QtZm91bmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uYm9keTEtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjlweDtcbn1cblxuLmJvZHkyLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5ib2R5My10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uYnV0dG9uLXRleHQsIC5wcmltYXJ5LWJ0bi1vdXRsaW5lLCAucHJpbWFyeS1idG4tZmlsbGVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FwdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ub3ZlcmxpbmUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTY5Yjk7XG4gIGNvbG9yOiAjRkZGRkZCO1xuICBib3gtc2hhZG93OiAwIDRweCA0cHggMnB4IHJnYmEoNSwgMTA1LCAxODUsIDAuMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTgpO1xuICBzY2FsZTogMC45OTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0tYWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICBzY2FsZTogMC45ODtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOUM5Qzk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IG5vbmU7XG59XG5cbi5wcmltYXJ5LWJ0bi1vdXRsaW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA1NjliOTtcbiAgY29sb3I6ICMwNTY5Yjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZFO1xufVxuXG4ucGFnZS1ub3QtZm91bmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogOTB2aDtcbn1cblxuLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ucGFnZS1ub3QtZm91bmQtbGluay1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ucGFnZS1ub3QtZm91bmQtbGluay1jb250YWluZXIgYSB7XG4gIGNvbG9yOiAjMDU2OWI5O1xufVxuXG4ucGFnZS1ub3QtZm91bmQtaW1nIHtcbiAgaGVpZ2h0OiA1MDBweDtcbn0iLCIkcHJpbWFyeTogIzA1NjliOTtcbiRwcmltYXJ5LWxpZ2h0OiAjNTg5NmVjO1xuJHByaW1hcnktZGFyazogIzAwM2Y4ODtcblxuJHNlY29uZGFyeS15ZWxsb3c6ICNmZmQyMDA7XG5cbiRlcnJvcjogI0M5MDAwMDtcbiRlcnJvci10cmFuc3BhcmVudDogcmdiYSgyMDEsIDAsIDAsIDAuNyk7XG4kYm9yZGVyOiAjQzlDOUM5O1xuJHBsYWNlaG9sZGVyOiAjQTVBNUE1O1xuXG4kYmFja2dyb3VuZDogI0Y5RkFGRTtcbiRzdXJmYWNlOiAjRjlGQUZFO1xuXG4kb24tcHJpbWFyeTogI0ZGRkZGQjtcbiRvbi1wcmltYXJ5LWxpZ2h0OiAjMjMyNTI4O1xuJG9uLXByaW1hcnktZGFyazogI0ZGRkZGQjtcblxuJG9uLXNlY29uZGFyeS15ZWxsb3c6ICMyMzI1Mjg7XG5cbiRvbi1lcnJvcjogI0ZGRkZGQjtcblxuJG9uLWJhY2tncm91bmQ6ICMyMzI1Mjg7XG4kb24tc3VyZmFjZTogIzIzMjUyODtcblxuJHByaW1hcnktc2hhZG93OiByZ2JhKDUsIDEwNSwgMTg1LCAwLjIpO1xuJHNlY29uZGFyeS10ZWFsLXNoYWRvdzogcmdiKDc0LCAxODksIDE3MiwgMzUlKTtcbiRzZWNvbmRhcnkteWVsbG93LXNoYWRvdzogcmdiKDI1MiwgMjEwLCAzNCwgMzUlKTtcbiRjYXJkLXNoYWRvdzogcmdiKDExMiwgMTQ0LCAxNzYsIDM1JSk7IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG4ucGFnZS1ub3QtZm91bmQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaGVpZ2h0OiA5MHZoO1xufVxuXG4ucGFnZS1ub3QtZm91bmQtdGV4dCB7IFxuICAgIEBleHRlbmQgLmgyLXRleHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnBhZ2Utbm90LWZvdW5kLWxpbmstY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ucGFnZS1ub3QtZm91bmQtbGluay1jb250YWluZXIgYSB7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xufVxuXG4ucGFnZS1ub3QtZm91bmQtaW1nIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.scss */
      "./src/app/page-not-found/page-not-found.component.scss"))["default"]]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/post-detail/post-detail.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/post-detail/post-detail.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostDetailPostDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap\");\n/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput,\ntextarea {\n  all: unset;\n}\nbutton {\n  border: none;\n}\n* {\n  font-family: \"Nunito\", sans-serif;\n}\n.title-text {\n  font-size: 60px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h1-text {\n  font-size: 32px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h2-text, .post-username {\n  font-size: 23px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h3-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h4-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n}\n.body1-text, .login-link,\n.signup-link, .post-like-text,\n.post-comment-text, .post-like-count,\n.post-comment-count {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n}\n.body2-text, .post-actions-overlay, .form-input-label, .post-comment-list-item, .post-caption, .post-caption-username, .post-date {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 22px;\n}\n.body3-text, .form-input {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 20px;\n}\n.button-text, .primary-btn-outline, .primary-btn-filled, .comment-submit-btn {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n  text-transform: uppercase;\n}\n.caption-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n}\n.overline-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.primary-btn-filled, .comment-submit-btn {\n  background-color: #0569b9;\n  color: #FFFFFB;\n  box-shadow: 0 4px 4px 2px rgba(5, 105, 185, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\n.primary-btn-filled--hover {\n  filter: brightness(0.98);\n  scale: 0.99;\n}\n.primary-btn-filled--active {\n  filter: brightness(0.95);\n  scale: 0.98;\n}\n.primary-btn-filled:disabled, .comment-submit-btn:disabled {\n  background-color: #C9C9C9;\n  pointer-events: none;\n  cursor: none;\n}\n.primary-btn-outline {\n  border: 1px solid #0569b9;\n  color: #0569b9;\n  background-color: #F9FAFE;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\nbody {\n  background-color: #F9FAFE;\n}\n.post-detail-container {\n  display: flex;\n  justify-content: center;\n  padding: 100px 0;\n}\n.post-img-container {\n  height: 500px;\n  border-radius: 20px;\n  overflow: hidden;\n  margin-right: 40px;\n  box-shadow: 0 16px 40px 0 rgba(112, 144, 176, 0.35);\n}\n.post-img {\n  height: 100%;\n}\n.post-detail-content-container {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  height: 500px;\n  overflow: hidden;\n  justify-content: space-between;\n}\n.post-info-container {\n  display: flex;\n  flex-direction: column;\n  height: 55%;\n  overflow: scroll;\n}\n.post-username-container {\n  display: flex;\n  align-items: center;\n  height: 10%;\n}\n.post-date {\n  color: #C9C9C9;\n  margin-bottom: 10px;\n}\n.profile-img-container {\n  height: 45px;\n  width: 45px;\n  background-color: #003f88;\n  border-radius: 100%;\n  margin-right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.profile-img {\n  height: 35px;\n}\n.post-username {\n  color: #232528;\n}\n.post-caption-container {\n  display: flex;\n  margin-bottom: 10px;\n}\n.post-caption-username {\n  color: #232528;\n  font-weight: bold;\n  margin-right: 10px;\n}\n.post-caption {\n  white-space: pre-line;\n  color: #232528;\n}\n.post-likes-container,\n.post-comments-container {\n  display: flex;\n}\n.post-likes-container {\n  padding-right: 10px;\n  border-right: 1px solid #C9C9C9;\n}\n.post-comments-container {\n  padding-left: 10px;\n  border-left: 1px solid #C9C9C9;\n}\n.post-comment-list-item {\n  color: #232528;\n}\n.post-comment-username {\n  font-weight: bold;\n  margin-right: 5px;\n}\n.post-comment-list-item:not(:last-of-type) {\n  margin-bottom: 10px;\n}\n.post-like-count,\n.post-comment-count {\n  color: #232528;\n  margin-right: 5px;\n}\n.post-like-text,\n.post-comment-text {\n  color: #232528;\n}\n.post-like-icon {\n  height: 30px;\n}\n.post-actions-container {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: column;\n  height: 32%;\n}\n.post-actions-btns-container {\n  position: relative;\n}\n.post-comment-box-container {\n  margin-top: 15px;\n}\n.form-input-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n.form-input-container:not(:last-of-type) {\n  margin-bottom: 20px;\n}\n.form-input-label {\n  color: #003f88;\n  margin-bottom: 5px;\n  width: 100%;\n}\n.form-input {\n  border-radius: 8px;\n  padding: 10px;\n  border: 1px solid;\n  color: #232528;\n  border-color: #C9C9C9;\n  transition: all 0.2s ease-in;\n  width: 70%;\n}\n.comment-submit-btn {\n  width: 20%;\n  margin-left: 5px;\n  border-radius: 10px;\n}\n.form-input::-moz-placeholder {\n  color: #A5A5A5;\n}\n.form-input::placeholder {\n  color: #A5A5A5;\n}\n.form-input:focus {\n  border-color: #5896ec;\n}\n.post-actions-overlay {\n  color: #FFFFFB;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.disabled {\n  pointer-events: none;\n}\n.login-link,\n.signup-link {\n  color: #FFFFFB;\n  margin: 0 5px;\n}\n.post-statistics-container {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9mb250cy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3Jlc2V0cy5zY3NzIiwic3JjL2FwcC9wb3N0LWRldGFpbC9wb3N0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9jb2xvcnMuc2NzcyIsIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9hcHAvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNRLG9GQUFBO0FDRFIsOEVBQUE7QUNBQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FB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cG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8mZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmgxLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5oMi10ZXh0IHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxufVxuXG4uaDMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmg0LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5ib2R5MS10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuXG4uYm9keTItdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLmJvZHkzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5idXR0b24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FwdGlvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ub3ZlcmxpbmUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCAnLi9yZXNldHMuc2Nzcyc7XG5AaW1wb3J0ICcuL2NvbG9ycyc7XG5AaW1wb3J0ICcuL2ZvbnRzJztcblxuLnByaW1hcnktYnRuLWZpbGxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgY29sb3I6ICRvbi1wcmltYXJ5O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAycHggJHByaW1hcnktc2hhZG93O1xuICAgIFxuICAgIEBleHRlbmQgLmJ1dHRvbi10ZXh0O1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuXG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45OCk7XG4gICAgc2NhbGU6IDAuOTk7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICAgIHNjYWxlOiAwLjk4O1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogbm9uZTtcbn1cblxuLnByaW1hcnktYnRuLW91dGxpbmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VyZmFjZTtcblxuICAgIEBleHRlbmQgLmJ1dHRvbi10ZXh0O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG5cbn1cblxuYm9keSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xufSIsImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICAgIGFsbDogdW5zZXQ7XG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGFsbDogdW5zZXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDEtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDItdGV4dCwgLnBvc3QtdXNlcm5hbWUge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmgzLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmg0LXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmJvZHkxLXRleHQsIC5sb2dpbi1saW5rLFxuLnNpZ251cC1saW5rLCAucG9zdC1saWtlLXRleHQsXG4ucG9zdC1jb21tZW50LXRleHQsIC5wb3N0LWxpa2UtY291bnQsXG4ucG9zdC1jb21tZW50LWNvdW50IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuXG4uYm9keTItdGV4dCwgLnBvc3QtYWN0aW9ucy1vdmVybGF5LCAuZm9ybS1pbnB1dC1sYWJlbCwgLnBvc3QtY29tbWVudC1saXN0LWl0ZW0sIC5wb3N0LWNhcHRpb24sIC5wb3N0LWNhcHRpb24tdXNlcm5hbWUsIC5wb3N0LWRhdGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5ib2R5My10ZXh0LCAuZm9ybS1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbi10ZXh0LCAucHJpbWFyeS1idG4tb3V0bGluZSwgLnByaW1hcnktYnRuLWZpbGxlZCwgLmNvbW1lbnQtc3VibWl0LWJ0biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcHRpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLm92ZXJsaW5lLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQsIC5jb21tZW50LXN1Ym1pdC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU2OWI5O1xuICBjb2xvcjogI0ZGRkZGQjtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IDJweCByZ2JhKDUsIDEwNSwgMTg1LCAwLjIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkLS1ob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk4KTtcbiAgc2NhbGU6IDAuOTk7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcbiAgc2NhbGU6IDAuOTg7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQ6ZGlzYWJsZWQsIC5jb21tZW50LXN1Ym1pdC1idG46ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzlDOUM5O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBub25lO1xufVxuXG4ucHJpbWFyeS1idG4tb3V0bGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNTY5Yjk7XG4gIGNvbG9yOiAjMDU2OWI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZFO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RkFGRTtcbn1cblxuLnBvc3QtZGV0YWlsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMDBweCAwO1xufVxuXG4ucG9zdC1pbWctY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBib3gtc2hhZG93OiAwIDE2cHggNDBweCAwIHJnYmEoMTEyLCAxNDQsIDE3NiwgMC4zNSk7XG59XG5cbi5wb3N0LWltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBvc3QtZGV0YWlsLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucG9zdC1pbmZvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogNTUlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4ucG9zdC11c2VybmFtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuLnBvc3QtZGF0ZSB7XG4gIGNvbG9yOiAjQzlDOUM5O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvZmlsZS1pbWctY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2Y4ODtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtaW1nIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ucG9zdC11c2VybmFtZSB7XG4gIGNvbG9yOiAjMjMyNTI4O1xufVxuXG4ucG9zdC1jYXB0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wb3N0LWNhcHRpb24tdXNlcm5hbWUge1xuICBjb2xvcjogIzIzMjUyODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnBvc3QtY2FwdGlvbiB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgY29sb3I6ICMyMzI1Mjg7XG59XG5cbi5wb3N0LWxpa2VzLWNvbnRhaW5lcixcbi5wb3N0LWNvbW1lbnRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wb3N0LWxpa2VzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDOUM5Qzk7XG59XG5cbi5wb3N0LWNvbW1lbnRzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQzlDOUM5O1xufVxuXG4ucG9zdC1jb21tZW50LWxpc3QtaXRlbSB7XG4gIGNvbG9yOiAjMjMyNTI4O1xufVxuXG4ucG9zdC1jb21tZW50LXVzZXJuYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucG9zdC1jb21tZW50LWxpc3QtaXRlbTpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucG9zdC1saWtlLWNvdW50LFxuLnBvc3QtY29tbWVudC1jb3VudCB7XG4gIGNvbG9yOiAjMjMyNTI4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnBvc3QtbGlrZS10ZXh0LFxuLnBvc3QtY29tbWVudC10ZXh0IHtcbiAgY29sb3I6ICMyMzI1Mjg7XG59XG5cbi5wb3N0LWxpa2UtaWNvbiB7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnBvc3QtYWN0aW9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDMyJTtcbn1cblxuLnBvc3QtYWN0aW9ucy1idG5zLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBvc3QtY29tbWVudC1ib3gtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmZvcm0taW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZm9ybS1pbnB1dC1jb250YWluZXI6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm0taW5wdXQtbGFiZWwge1xuICBjb2xvcjogIzAwM2Y4ODtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBjb2xvcjogIzIzMjUyODtcbiAgYm9yZGVyLWNvbG9yOiAjQzlDOUM5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICB3aWR0aDogNzAlO1xufVxuXG4uY29tbWVudC1zdWJtaXQtYnRuIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmZvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNBNUE1QTU7XG59XG5cbi5mb3JtLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNTg5NmVjO1xufVxuXG4ucG9zdC1hY3Rpb25zLW92ZXJsYXkge1xuICBjb2xvcjogI0ZGRkZGQjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubG9naW4tbGluayxcbi5zaWdudXAtbGluayB7XG4gIGNvbG9yOiAjRkZGRkZCO1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4ucG9zdC1zdGF0aXN0aWNzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59IiwiJHByaW1hcnk6ICMwNTY5Yjk7XG4kcHJpbWFyeS1saWdodDogIzU4OTZlYztcbiRwcmltYXJ5LWRhcms6ICMwMDNmODg7XG5cbiRzZWNvbmRhcnkteWVsbG93OiAjZmZkMjAwO1xuXG4kZXJyb3I6ICNDOTAwMDA7XG4kZXJyb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMjAxLCAwLCAwLCAwLjcpO1xuJGJvcmRlcjogI0M5QzlDOTtcbiRwbGFjZWhvbGRlcjogI0E1QTVBNTtcblxuJGJhY2tncm91bmQ6ICNGOUZBRkU7XG4kc3VyZmFjZTogI0Y5RkFGRTtcblxuJG9uLXByaW1hcnk6ICNGRkZGRkI7XG4kb24tcHJpbWFyeS1saWdodDogIzIzMjUyODtcbiRvbi1wcmltYXJ5LWRhcms6ICNGRkZGRkI7XG5cbiRvbi1zZWNvbmRhcnkteWVsbG93OiAjMjMyNTI4O1xuXG4kb24tZXJyb3I6ICNGRkZGRkI7XG5cbiRvbi1iYWNrZ3JvdW5kOiAjMjMyNTI4O1xuJG9uLXN1cmZhY2U6ICMyMzI1Mjg7XG5cbiRwcmltYXJ5LXNoYWRvdzogcmdiYSg1LCAxMDUsIDE4NSwgMC4yKTtcbiRzZWNvbmRhcnktdGVhbC1zaGFkb3c6IHJnYig3NCwgMTg5LCAxNzIsIDM1JSk7XG4kc2Vjb25kYXJ5LXllbGxvdy1zaGFkb3c6IHJnYigyNTIsIDIxMCwgMzQsIDM1JSk7XG4kY2FyZC1zaGFkb3c6IHJnYigxMTIsIDE0NCwgMTc2LCAzNSUpOyIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJzsgXG5cbi5wb3N0LWRldGFpbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTAwcHggMDtcbn1cblxuLnBvc3QtaW1nLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTZweCA0MHB4IDAgJGNhcmQtc2hhZG93O1xufVxuXG4ucG9zdC1pbWcge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnBvc3QtZGV0YWlsLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLnBvc3QtaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDU1JTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnBvc3QtdXNlcm5hbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgLy9tYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ucG9zdC1kYXRlIHtcbiAgICBAZXh0ZW5kIC5ib2R5Mi10ZXh0O1xuICAgIGNvbG9yOiAkYm9yZGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wcm9maWxlLWltZy1jb250YWluZXIge1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1kYXJrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvZmlsZS1pbWcge1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuLnBvc3QtdXNlcm5hbWUge1xuICAgIEBleHRlbmQgLmgyLXRleHQ7XG4gICAgY29sb3I6ICRvbi1iYWNrZ3JvdW5kO1xufVxuXG4ucG9zdC1jYXB0aW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucG9zdC1jYXB0aW9uLXVzZXJuYW1lIHtcbiAgICBAZXh0ZW5kIC5ib2R5Mi10ZXh0O1xuICAgIGNvbG9yOiAkb24tYmFja2dyb3VuZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5wb3N0LWNhcHRpb24ge1xuICAgIEBleHRlbmQgLmJvZHkyLXRleHQ7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgIGNvbG9yOiAkb24tYmFja2dyb3VuZDtcbn1cblxuLnBvc3QtbGlrZXMtY29udGFpbmVyLFxuLnBvc3QtY29tbWVudHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucG9zdC1saWtlcy1jb250YWluZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJvcmRlcjtcbn1cblxuLnBvc3QtY29tbWVudHMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkYm9yZGVyO1xufVxuXG4ucG9zdC1jb21tZW50LWxpc3QtaXRlbSB7XG4gICAgQGV4dGVuZCAuYm9keTItdGV4dDtcbiAgICBjb2xvcjogJG9uLWJhY2tncm91bmQ7XG59XG5cbi5wb3N0LWNvbW1lbnQtdXNlcm5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucG9zdC1jb21tZW50LWxpc3QtaXRlbTpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wb3N0LWxpa2UtY291bnQsXG4ucG9zdC1jb21tZW50LWNvdW50IHtcbiAgICBAZXh0ZW5kIC5ib2R5MS10ZXh0O1xuICAgIGNvbG9yOiAkb24tYmFja2dyb3VuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnBvc3QtbGlrZS10ZXh0LFxuLnBvc3QtY29tbWVudC10ZXh0IHtcbiAgICBAZXh0ZW5kIC5ib2R5MS10ZXh0O1xuICAgIGNvbG9yOiAkb24tYmFja2dyb3VuZDtcbn1cblxuLnBvc3QtbGlrZS1pY29uIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5wb3N0LWFjdGlvbnMtY29udGFpbmVyIHsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAzMiU7XG59XG5cbi5wb3N0LWFjdGlvbnMtYnRucy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4ucG9zdC1jb21tZW50LWJveC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5mb3JtLWlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5mb3JtLWlucHV0LWNvbnRhaW5lcjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWlucHV0LWxhYmVsIHtcbiAgICBAZXh0ZW5kIC5ib2R5Mi10ZXh0O1xuICAgIGNvbG9yOiAkcHJpbWFyeS1kYXJrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0taW5wdXQge1xuICAgIEBleHRlbmQgLmJvZHkzLXRleHQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7ICAgIFxuICAgIFxuICAgIGNvbG9yOiAkb24tYmFja2dyb3VuZDtcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXI7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuXG4gICAgd2lkdGg6IDcwJTtcbiAgICBcbn1cblxuLmNvbW1lbnQtc3VibWl0LWJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIEBleHRlbmQgLnByaW1hcnktYnRuLWZpbGxlZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuIH1cblxuLmZvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyO1xufVxuXG4uZm9ybS1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1saWdodDtcbn1cblxuLnBvc3QtYWN0aW9ucy1vdmVybGF5IHsgXG4gICAgQGV4dGVuZCAuYm9keTItdGV4dDtcbiAgICBjb2xvcjogJG9uLXByaW1hcnktZGFyaztcbiAgIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuLmRpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmxvZ2luLWxpbmssXG4uc2lnbnVwLWxpbmsge1xuICAgIEBleHRlbmQgLmJvZHkxLXRleHQ7XG4gICAgY29sb3I6ICRvbi1wcmltYXJ5LWRhcms7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuLnBvc3Qtc3RhdGlzdGljcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/post-detail/post-detail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/post-detail/post-detail.component.ts ***!
    \******************************************************/

  /*! exports provided: PostDetailComponent */

  /***/
  function srcAppPostDetailPostDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function () {
      return PostDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../trinity-lyfe.service */
    "./src/app/trinity-lyfe.service.ts");

    var PostDetailComponent = /*#__PURE__*/function () {
      function PostDetailComponent(router, route, trinityLyfeService, fb) {
        _classCallCheck(this, PostDetailComponent);

        this.router = router;
        this.route = route;
        this.trinityLyfeService = trinityLyfeService;
        this.fb = fb;
        this.commentForm = this.fb.group({
          comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(PostDetailComponent, [{
        key: "comment",
        get: function get() {
          return this.comment.get('comment');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.isLoggedIn = localStorage.getItem("isLoggedIn");
          this.user = localStorage.getItem("user");

          if (this.isLoggedIn === 'false') {
            this.commentForm.controls['comment'].disable();
          }

          this.postDetail = {};
          this.route.params.subscribe(function (params) {
            _this5.postId = params['post_id'];

            _this5.getPostDetails();

            _this5.getLikesForPost();

            _this5.getCommentsForPost();
          });
        }
      }, {
        key: "getPostDetails",
        value: function getPostDetails() {
          var _this6 = this;

          this.trinityLyfeService.getAPIData("photo/" + this.postId, true).subscribe(function (resp) {
            var results = resp.results.posts;

            if (results.length !== 0) {
              var post = results[0];
              _this6.postDetail["postId"] = post["post_id"];
              _this6.postDetail["username"] = post["username"];
              _this6.postDetail["src"] = "data:image/jpeg;base64," + post["post_img_path"];
              _this6.postDetail["caption"] = post["caption"];
              _this6.postDetail["date"] = new Date(post["created_at"]).toLocaleDateString("en-US");
            }
          }, function (errorResp) {
            if (errorResp.status === 404) {
              _this6.router.navigate(['/page-not-found']);
            } else {}
          });
        }
      }, {
        key: "getLikesForPost",
        value: function getLikesForPost() {
          var _this7 = this;

          this.trinityLyfeService.getAPIData("like/" + this.postId, true).subscribe(function (resp) {
            _this7.postDetail["likes"] = resp.results.likes;
            _this7.postDetail["likesCount"] = _this7.postDetail["likes"].length;
            _this7.postDetail["likedByCurrentUser"] = _this7.postDetail["likes"].filter(function (likeObject) {
              return likeObject.username === _this7.user;
            }).length === 1 ? true : false;
          }, function (errorResp) {
            _this7.error = "Something went wrong! Please try again later";
          });
        }
      }, {
        key: "getCommentsForPost",
        value: function getCommentsForPost() {
          var _this8 = this;

          this.trinityLyfeService.getAPIData("comment/" + this.postId, true).subscribe(function (resp) {
            _this8.postDetail["comments"] = resp.results.comments;
            _this8.postDetail["commentsCount"] = _this8.postDetail["comments"].length;
          }, function (errorResp) {
            _this8.error = "Something went wrong! Please try again later";
          });
        }
      }, {
        key: "toggleLike",
        value: function toggleLike() {
          var _this9 = this;

          if (this.postDetail["likedByCurrentUser"]) {
            var likeId = this.postDetail["likes"].filter(function (likeObject) {
              return likeObject.username === _this9.user;
            })[0].like_id;
            this.trinityLyfeService.deleteAPIData("like/" + likeId, true).subscribe(function (resp) {
              _this9.getLikesForPost();
            }, function (errorResp) {
              if (errorResp.status == 401) {
                _this9.error = "You are authorised to perform the operation!";
                localStorage.setItem("isLoggedIn", "false");
                localStorage.removeItem("user");

                _this9.router.navigate(['/login']);
              } else {
                _this9.error = "Something went wrong! Please try again later";
              }
            });
          } else {
            var formData = new FormData();
            formData.append("postId", this.postDetail["postId"]);
            formData.append("username", this.user);
            this.trinityLyfeService.postAPIData("like", formData, true).subscribe(function (resp) {
              _this9.getLikesForPost();
            }, function (errorResp) {
              if (errorResp.status == 401) {
                _this9.error = "You are authorised to perform the operation!";
                localStorage.setItem("isLoggedIn", "false");
                localStorage.removeItem("user");

                _this9.router.navigate(['/login']);
              } else {
                _this9.error = "Something went wrong! Please try again later";
              }
            });
          }
        }
      }, {
        key: "postComment",
        value: function postComment() {
          var _this10 = this;

          if (this.commentForm.valid) {
            var comment = this.commentForm.get('comment').value;
            var formData = new FormData();
            formData.append('username', this.user);
            formData.append('postId', this.postId);
            formData.append('comment', comment);
            this.trinityLyfeService.postAPIData("comment", formData, true).subscribe(function (res) {
              _this10.getCommentsForPost();

              _this10.commentForm.get('comment').reset('');
            }, function (errorResp) {
              if (errorResp.status == 401) {
                _this10.error = "You are authorised to perform the operation!";
                localStorage.setItem("isLoggedIn", "false");
                localStorage.removeItem("user");

                _this10.router.navigate(['/login']);
              } else {
                _this10.error = "Something went wrong! Please try again later";
              }
            });
          }
        }
      }]);

      return PostDetailComponent;
    }();

    PostDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_4__["TrinityLyfeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    PostDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post-detail/post-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-detail.component.scss */
      "./src/app/post-detail/post-detail.component.scss"))["default"]]
    })], PostDetailComponent);
    /***/
  },

  /***/
  "./src/app/post-grid/post-grid.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/post-grid/post-grid.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostGridPostGridComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap\");\n/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput,\ntextarea {\n  all: unset;\n}\nbutton {\n  border: none;\n}\n* {\n  font-family: \"Nunito\", sans-serif;\n}\n.title-text {\n  font-size: 60px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h1-text {\n  font-size: 32px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h2-text {\n  font-size: 23px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h3-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h4-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n}\n.body1-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n}\n.body2-text, .no-posts-text {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 22px;\n}\n.body3-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 20px;\n}\n.button-text, .primary-btn-outline, .primary-btn-filled {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n  text-transform: uppercase;\n}\n.caption-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n}\n.overline-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.primary-btn-filled {\n  background-color: #0569b9;\n  color: #FFFFFB;\n  box-shadow: 0 4px 4px 2px rgba(5, 105, 185, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\n.primary-btn-filled--hover {\n  filter: brightness(0.98);\n  scale: 0.99;\n}\n.primary-btn-filled--active {\n  filter: brightness(0.95);\n  scale: 0.98;\n}\n.primary-btn-filled:disabled {\n  background-color: #C9C9C9;\n  pointer-events: none;\n  cursor: none;\n}\n.primary-btn-outline {\n  border: 1px solid #0569b9;\n  color: #0569b9;\n  background-color: #F9FAFE;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\nbody {\n  background-color: #F9FAFE;\n}\n.posts-container {\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n}\n.post-container {\n  height: 250px;\n  width: 300px;\n  border-radius: 15px;\n  margin: 30px;\n  background-color: #F9FAFE;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0 16px 40px 0 rgba(112, 144, 176, 0.35);\n}\n.post-overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 1.5em;\n  background-color: rgba(0, 0, 0, 0);\n  transition: all 0.2s ease;\n}\n.post-likes-count,\n.post-comments-count {\n  visibility: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #FFFFFB;\n}\n.post-likes-icon,\n.post-comments-icon {\n  height: 30px;\n  margin-right: 5px;\n}\n.post-container:hover .post-comments-count,\n.post-container:hover .post-likes-count {\n  visibility: visible;\n}\n.post-container:hover .post-overlay {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.post-img {\n  height: 100%;\n}\n.no-posts-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 40px;\n}\n.no-posts-text {\n  color: #232528;\n}\n.no-posts-img {\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9mb250cy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3Jlc2V0cy5zY3NzIiwic3JjL2FwcC9wb3N0LWdyaWQvcG9zdC1ncmlkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL2NvbG9ycy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL2FwcC9wb3N0LWdyaWQvcG9zdC1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSxvRkFBQTtBQ0RSLDhFQUFBO0FDQUE7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxl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bnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0byZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcblxuKiB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDEtdGV4dCB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmgyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5oMy10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxufVxuXG4uaDQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmJvZHkxLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5ib2R5Mi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uYm9keTMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXB0aW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5vdmVybGluZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0ICcuL3Jlc2V0cy5zY3NzJztcbkBpbXBvcnQgJy4vY29sb3JzJztcbkBpbXBvcnQgJy4vZm9udHMnO1xuXG4ucHJpbWFyeS1idG4tZmlsbGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgICBjb2xvcjogJG9uLXByaW1hcnk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IDJweCAkcHJpbWFyeS1zaGFkb3c7XG4gICAgXG4gICAgQGV4dGVuZCAuYnV0dG9uLXRleHQ7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG5cbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0taG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk4KTtcbiAgICBzY2FsZTogMC45OTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0tYWN0aXZlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG4gICAgc2NhbGU6IDAuOTg7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQ6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBub25lO1xufVxuXG4ucHJpbWFyeS1idG4tb3V0bGluZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnk7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdXJmYWNlO1xuXG4gICAgQGV4dGVuZCAuYnV0dG9uLXRleHQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcblxufVxuXG5ib2R5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG59IiwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gICAgYWxsOiB1bnNldDtcbn1cblxuYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgYWxsOiB1bnNldDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZS10ZXh0IHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMS10ZXh0IHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMi10ZXh0IHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMy10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oNC10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5ib2R5MS10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuXG4uYm9keTItdGV4dCwgLm5vLXBvc3RzLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5ib2R5My10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uYnV0dG9uLXRleHQsIC5wcmltYXJ5LWJ0bi1vdXRsaW5lLCAucHJpbWFyeS1idG4tZmlsbGVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FwdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ub3ZlcmxpbmUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTY5Yjk7XG4gIGNvbG9yOiAjRkZGRkZCO1xuICBib3gtc2hhZG93OiAwIDRweCA0cHggMnB4IHJnYmEoNSwgMTA1LCAxODUsIDAuMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTgpO1xuICBzY2FsZTogMC45OTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0tYWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICBzY2FsZTogMC45ODtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOUM5Qzk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IG5vbmU7XG59XG5cbi5wcmltYXJ5LWJ0bi1vdXRsaW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA1NjliOTtcbiAgY29sb3I6ICMwNTY5Yjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZFO1xufVxuXG4ucG9zdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBvc3QtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW46IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDQwcHggMCByZ2JhKDExMiwgMTQ0LCAxNzYsIDAuMzUpO1xufVxuXG4ucG9zdC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4ucG9zdC1saWtlcy1jb3VudCxcbi5wb3N0LWNvbW1lbnRzLWNvdW50IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNGRkZGRkI7XG59XG5cbi5wb3N0LWxpa2VzLWljb24sXG4ucG9zdC1jb21tZW50cy1pY29uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnBvc3QtY29udGFpbmVyOmhvdmVyIC5wb3N0LWNvbW1lbnRzLWNvdW50LFxuLnBvc3QtY29udGFpbmVyOmhvdmVyIC5wb3N0LWxpa2VzLWNvdW50IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnBvc3QtY29udGFpbmVyOmhvdmVyIC5wb3N0LW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5wb3N0LWltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5vLXBvc3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuLm5vLXBvc3RzLXRleHQge1xuICBjb2xvcjogIzIzMjUyODtcbn1cblxuLm5vLXBvc3RzLWltZyB7XG4gIGhlaWdodDogNTAwcHg7XG59IiwiJHByaW1hcnk6ICMwNTY5Yjk7XG4kcHJpbWFyeS1saWdodDogIzU4OTZlYztcbiRwcmltYXJ5LWRhcms6ICMwMDNmODg7XG5cbiRzZWNvbmRhcnkteWVsbG93OiAjZmZkMjAwO1xuXG4kZXJyb3I6ICNDOTAwMDA7XG4kZXJyb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMjAxLCAwLCAwLCAwLjcpO1xuJGJvcmRlcjogI0M5QzlDOTtcbiRwbGFjZWhvbGRlcjogI0E1QTVBNTtcblxuJGJhY2tncm91bmQ6ICNGOUZBRkU7XG4kc3VyZmFjZTogI0Y5RkFGRTtcblxuJG9uLXByaW1hcnk6ICNGRkZGRkI7XG4kb24tcHJpbWFyeS1saWdodDogIzIzMjUyODtcbiRvbi1wcmltYXJ5LWRhcms6ICNGRkZGRkI7XG5cbiRvbi1zZWNvbmRhcnkteWVsbG93OiAjMjMyNTI4O1xuXG4kb24tZXJyb3I6ICNGRkZGRkI7XG5cbiRvbi1iYWNrZ3JvdW5kOiAjMjMyNTI4O1xuJG9uLXN1cmZhY2U6ICMyMzI1Mjg7XG5cbiRwcmltYXJ5LXNoYWRvdzogcmdiYSg1LCAxMDUsIDE4NSwgMC4yKTtcbiRzZWNvbmRhcnktdGVhbC1zaGFkb3c6IHJnYig3NCwgMTg5LCAxNzIsIDM1JSk7XG4kc2Vjb25kYXJ5LXllbGxvdy1zaGFkb3c6IHJnYigyNTIsIDIxMCwgMzQsIDM1JSk7XG4kY2FyZC1zaGFkb3c6IHJnYigxMTIsIDE0NCwgMTc2LCAzNSUpOyIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJztcblxuLnBvc3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbn1cblxuLnBvc3QtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbjogMzBweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdXJmYWNlO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBib3gtc2hhZG93OiAwIDE2cHggNDBweCAwICRjYXJkLXNoYWRvdztcbn1cblxuLnBvc3Qtb3ZlcmxheSB7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICBwYWRkaW5nOiAxLjVlbTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4ucG9zdC1saWtlcy1jb3VudCxcbi5wb3N0LWNvbW1lbnRzLWNvdW50IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY29sb3I6ICRvbi1wcmltYXJ5LWRhcms7XG59XG5cbi5wb3N0LWxpa2VzLWljb24sXG4ucG9zdC1jb21tZW50cy1pY29uIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5wb3N0LWNvbnRhaW5lcjpob3ZlciAucG9zdC1jb21tZW50cy1jb3VudCxcbi5wb3N0LWNvbnRhaW5lcjpob3ZlciAucG9zdC1saWtlcy1jb3VudCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnBvc3QtY29udGFpbmVyOmhvdmVyIC5wb3N0LW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcbn1cblxuXG4ucG9zdC1pbWcge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm5vLXBvc3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA0MHB4O1xufVxuXG4ubm8tcG9zdHMtdGV4dCB7XG4gICAgQGV4dGVuZCAuYm9keTItdGV4dDtcbiAgICBjb2xvcjogJG9uLWJhY2tncm91bmQ7XG59XG5cbi5uby1wb3N0cy1pbWcge1xuICAgIGhlaWdodDogNTAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/post-grid/post-grid.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/post-grid/post-grid.component.ts ***!
    \**************************************************/

  /*! exports provided: PostGridComponent */

  /***/
  function srcAppPostGridPostGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostGridComponent", function () {
      return PostGridComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PostGridComponent = /*#__PURE__*/function () {
      function PostGridComponent() {
        _classCallCheck(this, PostGridComponent);
      }

      _createClass(PostGridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PostGridComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PostGridComponent.prototype, "postDetailArray", void 0);
    PostGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-grid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-grid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post-grid/post-grid.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-grid.component.scss */
      "./src/app/post-grid/post-grid.component.scss"))["default"]]
    })], PostGridComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.scss":
  /*!************************************************!*\
    !*** ./src/app/profile/profile.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap\");\n/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput,\ntextarea {\n  all: unset;\n}\nbutton {\n  border: none;\n}\n* {\n  font-family: \"Nunito\", sans-serif;\n}\n.title-text {\n  font-size: 60px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h1-text, .profile-username {\n  font-size: 32px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h2-text, .profile-name {\n  font-size: 23px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h3-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h4-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n}\n.body1-text, .profile-post-count {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n}\n.body2-text {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 22px;\n}\n.body3-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 20px;\n}\n.button-text, .primary-btn-outline, .primary-btn-filled, .change-password-btn {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n  text-transform: uppercase;\n}\n.caption-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n}\n.overline-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.primary-btn-filled, .change-password-btn {\n  background-color: #0569b9;\n  color: #FFFFFB;\n  box-shadow: 0 4px 4px 2px rgba(5, 105, 185, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\n.primary-btn-filled--hover {\n  filter: brightness(0.98);\n  scale: 0.99;\n}\n.primary-btn-filled--active {\n  filter: brightness(0.95);\n  scale: 0.98;\n}\n.primary-btn-filled:disabled, .change-password-btn:disabled {\n  background-color: #C9C9C9;\n  pointer-events: none;\n  cursor: none;\n}\n.primary-btn-outline {\n  border: 1px solid #0569b9;\n  color: #0569b9;\n  background-color: #F9FAFE;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\nbody {\n  background-color: #F9FAFE;\n}\n.profile-detail-container {\n  display: flex;\n  align-items: center;\n  padding: 40px;\n}\n.profile-img-container {\n  height: 150px;\n  width: 150px;\n  border-radius: 100%;\n  background-color: #003f88;\n  margin-right: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.profile-img {\n  height: 120px;\n}\n.profile-username {\n  margin-bottom: 20px;\n}\n.profile-name {\n  color: #C9C9C9;\n  margin-bottom: 25px;\n}\n.change-password-btn {\n  padding: 0.5em 1em;\n  border-radius: 10px;\n  margin-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9mb250cy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3Jlc2V0cy5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcmFzaG1pbmF5YWsvRG9jdW1lbnRzL1N0dWR5L1Byb2dyYW1taW5nL0NTNzAyNS0yMS0yMi1SYXNobWlQcmFtb2ROYXlhay9CYWNrLWVuZCBQcm9ncmFtbWluZy9Qcm9qZWN0L3RyaW5pdHktbHlmZS1mZS9zcmMvY29sb3JzLnNjc3MiLCIvVXNlcnMvcmFzaG1pbmF5YWsvRG9jdW1lbnRzL1N0dWR5L1Byb2dyYW1taW5nL0NTNzAyNS0yMS0yMi1SYXNobWlQcmFtb2ROYXlhay9CYWNrLWVuZCBQcm9ncmFtbWluZy9Qcm9qZWN0L3RyaW5pdHktbHlmZS1mZS9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ1Esb0ZBQUE7QUNEUiw4RUFBQTtBQ0FBOzs7Ozs7Ozs7Ozs7O0VBYUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0dEO0FEREEsZ0RBQUE7QUFDQTs7RUFFQyxjQUFBO0FDSUQ7QURGQTtFQUNDLGNBQUE7QUNLRDtBREhBO0VBQ0MsZ0JBQUE7QUNNRDtBREpBO0VBQ0MsWUFBQTtBQ09EO0FETEE7O0VBRUMsV0FBQTtFQUNBLGFBQUE7QUNRRDtBRE5BO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBQ1NEO0FETkE7O0VBRUksVUFBQTtBQ1NKO0FETkE7RUFDSSxZQUFBO0FDU0o7QUh4REE7RUFDSSxpQ0FBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FHMkRKO0FGbklBO0VBQ0kseUJHUE07RUhRTixjR01TO0VITFQsZ0RBQUE7RUFJQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSw0QkFBQTtBRWtJSjtBRjlIQTtFQUNJLHdCQUFBO0VBQ0EsV0FBQTtBRWlJSjtBRjlIQTtFQUNJLHdCQUFBO0VBQ0EsV0FBQTtBRWlJSjtBRjlIQTtFQUNJLHlCR3pCSztFSDBCTCxvQkFBQTtFQUNBLFlBQUE7QUVpSUo7QUY5SEE7RUFDSSx5QkFBQTtFQUNBLGNHeENNO0VIeUNOLHlCRzdCTTtFSGlDTixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSw0QkFBQTtBRTZISjtBRnpIQTtFQUNDLHlCRzVDWTtBRHdLYjtBRWhMQTtFQUNJLGFBQUE7RUFFQSxtQkFBQTtFQUVBLGFBQUE7QUZpTEo7QUU5S0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJEYlc7RUNjWCxrQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FGZ0xKO0FFN0tBO0VBQ0ksYUFBQTtBRmdMSjtBRTdLQTtFQUVJLG1CQUFBO0FGK0tKO0FFNUtBO0VBRUksY0QxQks7RUMyQkwsbUJBQUE7QUY4S0o7QUV2S0E7RUFFSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUZ5S0oiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8mZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmgxLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5oMi10ZXh0IHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxufVxuXG4uaDMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmg0LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5ib2R5MS10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuXG4uYm9keTItdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLmJvZHkzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5idXR0b24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FwdGlvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ub3ZlcmxpbmUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCAnLi9yZXNldHMuc2Nzcyc7XG5AaW1wb3J0ICcuL2NvbG9ycyc7XG5AaW1wb3J0ICcuL2ZvbnRzJztcblxuLnByaW1hcnktYnRuLWZpbGxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgY29sb3I6ICRvbi1wcmltYXJ5O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAycHggJHByaW1hcnktc2hhZG93O1xuICAgIFxuICAgIEBleHRlbmQgLmJ1dHRvbi10ZXh0O1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuXG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45OCk7XG4gICAgc2NhbGU6IDAuOTk7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICAgIHNjYWxlOiAwLjk4O1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogbm9uZTtcbn1cblxuLnByaW1hcnktYnRuLW91dGxpbmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VyZmFjZTtcblxuICAgIEBleHRlbmQgLmJ1dHRvbi10ZXh0O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG5cbn1cblxuYm9keSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xufSIsImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICAgIGFsbDogdW5zZXQ7XG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGFsbDogdW5zZXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDEtdGV4dCwgLnByb2ZpbGUtdXNlcm5hbWUge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmgyLXRleHQsIC5wcm9maWxlLW5hbWUge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmgzLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmg0LXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmJvZHkxLXRleHQsIC5wcm9maWxlLXBvc3QtY291bnQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5ib2R5Mi10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uYm9keTMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbi10ZXh0LCAucHJpbWFyeS1idG4tb3V0bGluZSwgLnByaW1hcnktYnRuLWZpbGxlZCwgLmNoYW5nZS1wYXNzd29yZC1idG4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXB0aW9uLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5vdmVybGluZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkLCAuY2hhbmdlLXBhc3N3b3JkLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTY5Yjk7XG4gIGNvbG9yOiAjRkZGRkZCO1xuICBib3gtc2hhZG93OiAwIDRweCA0cHggMnB4IHJnYmEoNSwgMTA1LCAxODUsIDAuMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTgpO1xuICBzY2FsZTogMC45OTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0tYWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICBzY2FsZTogMC45ODtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZDpkaXNhYmxlZCwgLmNoYW5nZS1wYXNzd29yZC1idG46ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzlDOUM5O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBub25lO1xufVxuXG4ucHJpbWFyeS1idG4tb3V0bGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNTY5Yjk7XG4gIGNvbG9yOiAjMDU2OWI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZFO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RkFGRTtcbn1cblxuLnByb2ZpbGUtZGV0YWlsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5wcm9maWxlLWltZy1jb250YWluZXIge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDNmODg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5wcm9maWxlLXVzZXJuYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnByb2ZpbGUtbmFtZSB7XG4gIGNvbG9yOiAjQzlDOUM5O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uY2hhbmdlLXBhc3N3b3JkLWJ0biB7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59IiwiJHByaW1hcnk6ICMwNTY5Yjk7XG4kcHJpbWFyeS1saWdodDogIzU4OTZlYztcbiRwcmltYXJ5LWRhcms6ICMwMDNmODg7XG5cbiRzZWNvbmRhcnkteWVsbG93OiAjZmZkMjAwO1xuXG4kZXJyb3I6ICNDOTAwMDA7XG4kZXJyb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMjAxLCAwLCAwLCAwLjcpO1xuJGJvcmRlcjogI0M5QzlDOTtcbiRwbGFjZWhvbGRlcjogI0E1QTVBNTtcblxuJGJhY2tncm91bmQ6ICNGOUZBRkU7XG4kc3VyZmFjZTogI0Y5RkFGRTtcblxuJG9uLXByaW1hcnk6ICNGRkZGRkI7XG4kb24tcHJpbWFyeS1saWdodDogIzIzMjUyODtcbiRvbi1wcmltYXJ5LWRhcms6ICNGRkZGRkI7XG5cbiRvbi1zZWNvbmRhcnkteWVsbG93OiAjMjMyNTI4O1xuXG4kb24tZXJyb3I6ICNGRkZGRkI7XG5cbiRvbi1iYWNrZ3JvdW5kOiAjMjMyNTI4O1xuJG9uLXN1cmZhY2U6ICMyMzI1Mjg7XG5cbiRwcmltYXJ5LXNoYWRvdzogcmdiYSg1LCAxMDUsIDE4NSwgMC4yKTtcbiRzZWNvbmRhcnktdGVhbC1zaGFkb3c6IHJnYig3NCwgMTg5LCAxNzIsIDM1JSk7XG4kc2Vjb25kYXJ5LXllbGxvdy1zaGFkb3c6IHJnYigyNTIsIDIxMCwgMzQsIDM1JSk7XG4kY2FyZC1zaGFkb3c6IHJnYigxMTIsIDE0NCwgMTc2LCAzNSUpOyIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJztcblxuXG4ucHJvZmlsZS1kZXRhaWwtY29udGFpbmVyIHsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvL2p1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nOiA0MHB4O1xufVxuXG4ucHJvZmlsZS1pbWctY29udGFpbmVyIHsgXG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1kYXJrO1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gICAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLnByb2ZpbGUtdXNlcm5hbWUge1xuICAgIEBleHRlbmQgLmgxLXRleHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0gXG5cbi5wcm9maWxlLW5hbWUge1xuICAgIEBleHRlbmQgLmgyLXRleHQ7XG4gICAgY29sb3I6ICRib3JkZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnByb2ZpbGUtcG9zdC1jb3VudCB7XG4gICAgQGV4dGVuZCAuYm9keTEtdGV4dDtcbn1cblxuLmNoYW5nZS1wYXNzd29yZC1idG4ge1xuICAgIEBleHRlbmQgLnByaW1hcnktYnRuLWZpbGxlZDtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../trinity-lyfe.service */
    "./src/app/trinity-lyfe.service.ts");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(router, trinityLyfeService, route) {
        _classCallCheck(this, ProfileComponent);

        this.router = router;
        this.trinityLyfeService = trinityLyfeService;
        this.route = route;
        this.postDetailArray = [];
        this.profilePostCount = 0;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.isLoggedIn = localStorage.getItem("isLoggedIn");
          this.user = localStorage.getItem("user");
          console.log(this.isLoggedIn);

          if (this.isLoggedIn == "false") {
            this.router.navigate(['/login']);
          }

          this.route.params.subscribe(function (params) {
            _this11.profileUser = params.username;

            _this11.getUserDetails();

            _this11.getPostDetails();
          });
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var _this12 = this;

          this.trinityLyfeService.getAPIData("user/" + this.profileUser, true).subscribe(function (resp) {
            _this12.profileUserName = resp.results["name"];
          }, function (errorResp) {
            if (errorResp.status === 404) {
              _this12.router.navigate(['/page-not-found']);
            }
          });
        }
      }, {
        key: "getPostDetails",
        value: function getPostDetails() {
          var _this13 = this;

          this.trinityLyfeService.getAPIData("photo?username=" + this.profileUser, true).subscribe(function (resp) {
            var postResultArray = resp.results.posts;
            _this13.postDetailArray = [];

            var _loop2 = function _loop2(index) {
              var postResult = postResultArray[index];
              var postDetail = {};
              postDetail["post_id"] = postResult["post_id"];
              postDetail["src"] = "data:image/jpeg;base64," + postResult["post_img_path"];

              _this13.trinityLyfeService.getAPIData("like/" + postDetail["post_id"], true).subscribe(function (resp) {
                postDetail["likesCount"] = resp.results.likes.length;
              }, function (errorResp) {
                console.log(errorResp);
              });

              _this13.trinityLyfeService.getAPIData("comment/" + postDetail["post_id"], true).subscribe(function (resp) {
                postDetail["commentsCount"] = resp.results.comments.length;
              }, function (errorResp) {
                console.log(errorResp);
              });

              _this13.postDetailArray.push(postDetail);
            };

            for (var index in postResultArray) {
              _loop2(index);
            }

            _this13.profilePostCount = _this13.postDetailArray.length;
          }, function (errorResp) {});
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_3__["TrinityLyfeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/profile/profile.component.scss"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/search-results/search-results.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/search-results/search-results.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchResultsSearchResultsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap\");\n/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput,\ntextarea {\n  all: unset;\n}\nbutton {\n  border: none;\n}\n* {\n  font-family: \"Nunito\", sans-serif;\n}\n.title-text {\n  font-size: 60px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h1-text {\n  font-size: 32px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h2-text, .search-result-username, .search-result-text {\n  font-size: 23px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h3-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h4-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n}\n.body1-text, .search-result-name, .search-result-count {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n}\n.body2-text {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 22px;\n}\n.body3-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 20px;\n}\n.button-text, .primary-btn-outline, .primary-btn-filled {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n  text-transform: uppercase;\n}\n.caption-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n}\n.overline-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.primary-btn-filled {\n  background-color: #0569b9;\n  color: #FFFFFB;\n  box-shadow: 0 4px 4px 2px rgba(5, 105, 185, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\n.primary-btn-filled--hover {\n  filter: brightness(0.98);\n  scale: 0.99;\n}\n.primary-btn-filled--active {\n  filter: brightness(0.95);\n  scale: 0.98;\n}\n.primary-btn-filled:disabled {\n  background-color: #C9C9C9;\n  pointer-events: none;\n  cursor: none;\n}\n.primary-btn-outline {\n  border: 1px solid #0569b9;\n  color: #0569b9;\n  background-color: #F9FAFE;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\nbody {\n  background-color: #F9FAFE;\n}\n.search-results-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.search-result-text {\n  margin-top: 30px;\n}\n.search-result-count {\n  margin: 20px 0 30px 0;\n}\n.search-result-item {\n  display: flex;\n  align-items: center;\n  padding: 40px 0;\n  width: 40%;\n  cursor: pointer;\n}\n.search-result-item:not(:last-of-type) {\n  border-bottom: 1px solid #C9C9C9;\n}\n.profile-img-container {\n  height: 50px;\n  width: 50px;\n  background-color: #003f88;\n  border-radius: 100%;\n  margin-right: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.profile-img {\n  height: 40px;\n}\n.search-result-username {\n  color: #232528;\n  margin-bottom: 10px;\n  text-decoration: underline;\n}\n.search-result-name {\n  color: #C9C9C9;\n}\n.no-results-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9mb250cy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3Jlc2V0cy5zY3NzIiwic3JjL2FwcC9zZWFyY2gtcmVzdWx0cy9zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9jb2xvcnMuc2NzcyIsIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9hcHAvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNRLG9GQUFBO0FDRFIsOEVBQUE7QUNBQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNHRDtBRERBLGdEQUFBO0FBQ0E7O0VBRUMsY0FBQTtBQ0lEO0FERkE7RUFDQyxjQUFBO0FDS0Q7QURIQTtFQUNDLGdCQUFBO0FDTUQ7QURKQTtFQUNDLFlBQUE7QUNPRDtBRExBOztFQUVDLFdBQUE7RUFDQSxhQUFBO0FDUUQ7QUROQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QUNTRDtBRE5BOztFQUVJLFVBQUE7QUNTSjtBRE5BO0VBQ0ksWUFBQTtBQ1NKO0FIeERBO0VBQ0ksaUNBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUcyREo7QUh4REE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FHMkRKO0FIeERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRzJESjtBSHhEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRzJESjtBRm5JQTtFQUNJLHlCR1BNO0VIUU4sY0dNUztFSExULGdEQUFBO0VBSUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsNEJBQUE7QUVrSUo7QUY5SEE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7QUVpSUo7QUY5SEE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7QUVpSUo7QUY5SEE7RUFDSSx5Qkd6Qks7RUgwQkwsb0JBQUE7RUFDQSxZQUFBO0FFaUlKO0FGOUhBO0VBQ0kseUJBQUE7RUFDQSxjR3hDTTtFSHlDTix5Qkc3Qk07RUhpQ04sYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsNEJBQUE7QUU2SEo7QUZ6SEE7RUFDQyx5Qkc1Q1k7QUR3S2I7QUVoTEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRm1MSjtBRWhMQTtFQUVJLGdCQUFBO0FGa0xKO0FFL0tBO0VBRUkscUJBQUE7QUZpTEo7QUU5S0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUZpTEo7QUU5S0E7RUFDSSxnQ0FBQTtBRmlMSjtBRTlLQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJEaENXO0VDaUNYLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRmdMSjtBRTdLQTtFQUNJLFlBQUE7QUZnTEo7QUU3S0E7RUFFSSxjRDNCWTtFQzRCWixtQkFBQTtFQUNBLDBCQUFBO0FGK0tKO0FFNUtBO0VBRUksY0RoREs7QUQ4TlQ7QUUzS0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUY4S0oiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtcmVzdWx0cy9zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0byZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcblxuKiB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDEtdGV4dCB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmgyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5oMy10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxufVxuXG4uaDQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmJvZHkxLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5ib2R5Mi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uYm9keTMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXB0aW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5vdmVybGluZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0ICcuL3Jlc2V0cy5zY3NzJztcbkBpbXBvcnQgJy4vY29sb3JzJztcbkBpbXBvcnQgJy4vZm9udHMnO1xuXG4ucHJpbWFyeS1idG4tZmlsbGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgICBjb2xvcjogJG9uLXByaW1hcnk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IDJweCAkcHJpbWFyeS1zaGFkb3c7XG4gICAgXG4gICAgQGV4dGVuZCAuYnV0dG9uLXRleHQ7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG5cbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0taG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk4KTtcbiAgICBzY2FsZTogMC45OTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0tYWN0aXZlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG4gICAgc2NhbGU6IDAuOTg7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQ6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBub25lO1xufVxuXG4ucHJpbWFyeS1idG4tb3V0bGluZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnk7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdXJmYWNlO1xuXG4gICAgQGV4dGVuZCAuYnV0dG9uLXRleHQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcblxufVxuXG5ib2R5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG59IiwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gICAgYWxsOiB1bnNldDtcbn1cblxuYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgYWxsOiB1bnNldDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZS10ZXh0IHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMS10ZXh0IHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMi10ZXh0LCAuc2VhcmNoLXJlc3VsdC11c2VybmFtZSwgLnNlYXJjaC1yZXN1bHQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uYm9keTEtdGV4dCwgLnNlYXJjaC1yZXN1bHQtbmFtZSwgLnNlYXJjaC1yZXN1bHQtY291bnQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5ib2R5Mi10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uYm9keTMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbi10ZXh0LCAucHJpbWFyeS1idG4tb3V0bGluZSwgLnByaW1hcnktYnRuLWZpbGxlZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcHRpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLm92ZXJsaW5lLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU2OWI5O1xuICBjb2xvcjogI0ZGRkZGQjtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IDJweCByZ2JhKDUsIDEwNSwgMTg1LCAwLjIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkLS1ob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk4KTtcbiAgc2NhbGU6IDAuOTk7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcbiAgc2NhbGU6IDAuOTg7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzlDOUM5O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBub25lO1xufVxuXG4ucHJpbWFyeS1idG4tb3V0bGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNTY5Yjk7XG4gIGNvbG9yOiAjMDU2OWI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZFO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RkFGRTtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtcmVzdWx0LXRleHQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uc2VhcmNoLXJlc3VsdC1jb3VudCB7XG4gIG1hcmdpbjogMjBweCAwIDMwcHggMDtcbn1cblxuLnNlYXJjaC1yZXN1bHQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgd2lkdGg6IDQwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VhcmNoLXJlc3VsdC1pdGVtOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzlDOUM5O1xufVxuXG4ucHJvZmlsZS1pbWctY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2Y4ODtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uc2VhcmNoLXJlc3VsdC11c2VybmFtZSB7XG4gIGNvbG9yOiAjMjMyNTI4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnNlYXJjaC1yZXN1bHQtbmFtZSB7XG4gIGNvbG9yOiAjQzlDOUM5O1xufVxuXG4ubm8tcmVzdWx0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn0iLCIkcHJpbWFyeTogIzA1NjliOTtcbiRwcmltYXJ5LWxpZ2h0OiAjNTg5NmVjO1xuJHByaW1hcnktZGFyazogIzAwM2Y4ODtcblxuJHNlY29uZGFyeS15ZWxsb3c6ICNmZmQyMDA7XG5cbiRlcnJvcjogI0M5MDAwMDtcbiRlcnJvci10cmFuc3BhcmVudDogcmdiYSgyMDEsIDAsIDAsIDAuNyk7XG4kYm9yZGVyOiAjQzlDOUM5O1xuJHBsYWNlaG9sZGVyOiAjQTVBNUE1O1xuXG4kYmFja2dyb3VuZDogI0Y5RkFGRTtcbiRzdXJmYWNlOiAjRjlGQUZFO1xuXG4kb24tcHJpbWFyeTogI0ZGRkZGQjtcbiRvbi1wcmltYXJ5LWxpZ2h0OiAjMjMyNTI4O1xuJG9uLXByaW1hcnktZGFyazogI0ZGRkZGQjtcblxuJG9uLXNlY29uZGFyeS15ZWxsb3c6ICMyMzI1Mjg7XG5cbiRvbi1lcnJvcjogI0ZGRkZGQjtcblxuJG9uLWJhY2tncm91bmQ6ICMyMzI1Mjg7XG4kb24tc3VyZmFjZTogIzIzMjUyODtcblxuJHByaW1hcnktc2hhZG93OiByZ2JhKDUsIDEwNSwgMTg1LCAwLjIpO1xuJHNlY29uZGFyeS10ZWFsLXNoYWRvdzogcmdiKDc0LCAxODksIDE3MiwgMzUlKTtcbiRzZWNvbmRhcnkteWVsbG93LXNoYWRvdzogcmdiKDI1MiwgMjEwLCAzNCwgMzUlKTtcbiRjYXJkLXNoYWRvdzogcmdiKDExMiwgMTQ0LCAxNzYsIDM1JSk7IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnOyBcblxuXG4uc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1yZXN1bHQtdGV4dCB7XG4gICAgQGV4dGVuZCAuaDItdGV4dDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uc2VhcmNoLXJlc3VsdC1jb3VudCB7XG4gICAgQGV4dGVuZCAuYm9keTEtdGV4dDtcbiAgICBtYXJnaW46IDIwcHggMCAzMHB4IDA7XG59XG5cbi5zZWFyY2gtcmVzdWx0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2gtcmVzdWx0LWl0ZW06bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlcjtcbn1cblxuLnByb2ZpbGUtaW1nLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWRhcms7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uc2VhcmNoLXJlc3VsdC11c2VybmFtZSB7XG4gICAgQGV4dGVuZCAuaDItdGV4dDtcbiAgICBjb2xvcjogJG9uLWJhY2tncm91bmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnNlYXJjaC1yZXN1bHQtbmFtZSB7XG4gICAgQGV4dGVuZCAuYm9keTEtdGV4dDtcbiAgICBjb2xvcjogJGJvcmRlcjtcbn1cblxuLm5vLXJlc3VsdHMtY29udGFpbmVyIHsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/search-results/search-results.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/search-results/search-results.component.ts ***!
    \************************************************************/

  /*! exports provided: SearchResultsComponent */

  /***/
  function srcAppSearchResultsSearchResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function () {
      return SearchResultsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../trinity-lyfe.service */
    "./src/app/trinity-lyfe.service.ts");

    var SearchResultsComponent = /*#__PURE__*/function () {
      function SearchResultsComponent(route, trinityLyfeService) {
        _classCallCheck(this, SearchResultsComponent);

        this.route = route;
        this.trinityLyfeService = trinityLyfeService;
        this.searchResultsArray = [];
      }

      _createClass(SearchResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.route.params.subscribe(function (params) {
            _this14.searchTerm = params['search_term'];

            _this14.trinityLyfeService.getAPIData("user?search_term=" + _this14.searchTerm, true).subscribe(function (resp) {
              var searchResults = resp.results.searchResults;

              for (var index in searchResults) {
                var searchResult = searchResults[index];
                var searchResultItem = {};
                searchResultItem["username"] = searchResult["username"];
                searchResultItem["name"] = searchResult["name"];

                _this14.searchResultsArray.push(searchResultItem);
              }
            }, function (errorResp) {
              _this14.searchError = "Something went wrong, please try again!";
            });
          });
        }
      }]);

      return SearchResultsComponent;
    }();

    SearchResultsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_3__["TrinityLyfeService"]
      }];
    };

    SearchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-results',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-results.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search-results/search-results.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-results.component.scss */
      "./src/app/search-results/search-results.component.scss"))["default"]]
    })], SearchResultsComponent);
    /***/
  },

  /***/
  "./src/app/shared/email-validator.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/email-validator.ts ***!
    \*******************************************/

  /*! exports provided: PasswordValidator */

  /***/
  function srcAppSharedEmailValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordValidator", function () {
      return PasswordValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PasswordValidator = /*#__PURE__*/function () {
      function PasswordValidator() {
        _classCallCheck(this, PasswordValidator);
      }

      _createClass(PasswordValidator, null, [{
        key: "checkPasswords",
        value: function checkPasswords(password, confirmPassword) {
          return function () {
            return password.value === confirmPassword.value ? null : {
              notSame: true
            };
          };
        }
      }]);

      return PasswordValidator;
    }();
    /***/

  },

  /***/
  "./src/app/signup/signup.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/signup/signup.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap\");\n/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput,\ntextarea {\n  all: unset;\n}\nbutton {\n  border: none;\n}\n* {\n  font-family: \"Nunito\", sans-serif;\n}\n.title-text {\n  font-size: 60px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h1-text {\n  font-size: 32px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h2-text, .form-header {\n  font-size: 23px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h3-text, .form-subheader {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h4-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n}\n.body1-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n}\n.body2-text, .alternate-link-text {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 22px;\n}\n.body3-text, .form-input, .form-input-label {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 20px;\n}\n.button-text, .primary-btn-outline, .primary-btn-filled, .form-submit-btn {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n  text-transform: uppercase;\n}\n.caption-text, .form-input-error {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n}\n.overline-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.primary-btn-filled, .form-submit-btn {\n  background-color: #0569b9;\n  color: #FFFFFB;\n  box-shadow: 0 4px 4px 2px rgba(5, 105, 185, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\n.primary-btn-filled--hover, .form-submit-btn:hover {\n  filter: brightness(0.98);\n  scale: 0.99;\n}\n.primary-btn-filled--active, .form-submit-btn:active {\n  filter: brightness(0.95);\n  scale: 0.98;\n}\n.primary-btn-filled:disabled, .form-submit-btn:disabled {\n  background-color: #C9C9C9;\n  pointer-events: none;\n  cursor: none;\n}\n.primary-btn-outline {\n  border: 1px solid #0569b9;\n  color: #0569b9;\n  background-color: #F9FAFE;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\nbody {\n  background-color: #F9FAFE;\n}\n.page-container {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n}\n.illustration-container {\n  width: 45%;\n  height: 100vh;\n}\n.illustration-img {\n  height: 100%;\n  width: 100%;\n}\n.form-container {\n  flex-grow: 1;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.form-header {\n  color: #232528;\n  margin-bottom: 25px;\n}\n.form-subheader {\n  color: #A5A5A5;\n  margin-bottom: 30px;\n}\n.form {\n  width: 50%;\n}\n.form-input-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n}\n.form-input-label {\n  color: #003f88;\n  margin-bottom: 5px;\n}\n.form-input {\n  border-radius: 8px;\n  padding: 10px;\n  border: 1px solid;\n  color: #232528;\n  border-color: #C9C9C9;\n  transition: all 0.2s ease-in;\n}\n.form-input::-moz-placeholder {\n  color: #A5A5A5;\n}\n.form-input::placeholder {\n  color: #A5A5A5;\n}\n.form-input:focus {\n  border-color: #5896ec;\n}\n.form-input-error {\n  color: #C90000;\n  margin-top: 5px;\n}\n.form-submit-btn {\n  margin-top: 10px;\n  padding: 12px 28px;\n  border-radius: 10px;\n}\n.alternate-link-text {\n  color: #232528;\n}\n.alternate-link {\n  text-decoration: none;\n  color: #0569b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9mb250cy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3Jlc2V0cy5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL2NvbG9ycy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSxvRkFBQTtBQ0RSLDhFQUFBO0FDQUE7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFB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OiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8mZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmgxLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5oMi10ZXh0IHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxufVxuXG4uaDMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmg0LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5ib2R5MS10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuXG4uYm9keTItdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLmJvZHkzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5idXR0b24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FwdGlvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ub3ZlcmxpbmUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCAnLi9yZXNldHMuc2Nzcyc7XG5AaW1wb3J0ICcuL2NvbG9ycyc7XG5AaW1wb3J0ICcuL2ZvbnRzJztcblxuLnByaW1hcnktYnRuLWZpbGxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgY29sb3I6ICRvbi1wcmltYXJ5O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAycHggJHByaW1hcnktc2hhZG93O1xuICAgIFxuICAgIEBleHRlbmQgLmJ1dHRvbi10ZXh0O1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuXG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45OCk7XG4gICAgc2NhbGU6IDAuOTk7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICAgIHNjYWxlOiAwLjk4O1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogbm9uZTtcbn1cblxuLnByaW1hcnktYnRuLW91dGxpbmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VyZmFjZTtcblxuICAgIEBleHRlbmQgLmJ1dHRvbi10ZXh0O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG5cbn1cblxuYm9keSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xufSIsImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICAgIGFsbDogdW5zZXQ7XG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGFsbDogdW5zZXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDEtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaDItdGV4dCwgLmZvcm0taGVhZGVyIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMy10ZXh0LCAuZm9ybS1zdWJoZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmg0LXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmJvZHkxLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5ib2R5Mi10ZXh0LCAuYWx0ZXJuYXRlLWxpbmstdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLmJvZHkzLXRleHQsIC5mb3JtLWlucHV0LCAuZm9ybS1pbnB1dC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbi10ZXh0LCAucHJpbWFyeS1idG4tb3V0bGluZSwgLnByaW1hcnktYnRuLWZpbGxlZCwgLmZvcm0tc3VibWl0LWJ0biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcHRpb24tdGV4dCwgLmZvcm0taW5wdXQtZXJyb3Ige1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5vdmVybGluZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkLCAuZm9ybS1zdWJtaXQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1NjliOTtcbiAgY29sb3I6ICNGRkZGRkI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAycHggcmdiYSg1LCAxMDUsIDE4NSwgMC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0taG92ZXIsIC5mb3JtLXN1Ym1pdC1idG46aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45OCk7XG4gIHNjYWxlOiAwLjk5O1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkLS1hY3RpdmUsIC5mb3JtLXN1Ym1pdC1idG46YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICBzY2FsZTogMC45ODtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZDpkaXNhYmxlZCwgLmZvcm0tc3VibWl0LWJ0bjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOUM5Qzk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IG5vbmU7XG59XG5cbi5wcmltYXJ5LWJ0bi1vdXRsaW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA1NjliOTtcbiAgY29sb3I6ICMwNTY5Yjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZFO1xufVxuXG4ucGFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlsbHVzdHJhdGlvbi1jb250YWluZXIge1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uaWxsdXN0cmF0aW9uLWltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgY29sb3I6ICMyMzI1Mjg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5mb3JtLXN1YmhlYWRlciB7XG4gIGNvbG9yOiAjQTVBNUE1O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZm9ybSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5mb3JtLWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWlucHV0LWxhYmVsIHtcbiAgY29sb3I6ICMwMDNmODg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmZvcm0taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBjb2xvcjogIzIzMjUyODtcbiAgYm9yZGVyLWNvbG9yOiAjQzlDOUM5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuXG4uZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0E1QTVBNTtcbn1cblxuLmZvcm0taW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM1ODk2ZWM7XG59XG5cbi5mb3JtLWlucHV0LWVycm9yIHtcbiAgY29sb3I6ICNDOTAwMDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZvcm0tc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFsdGVybmF0ZS1saW5rLXRleHQge1xuICBjb2xvcjogIzIzMjUyODtcbn1cblxuLmFsdGVybmF0ZS1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzA1NjliOTtcbn0iLCIkcHJpbWFyeTogIzA1NjliOTtcbiRwcmltYXJ5LWxpZ2h0OiAjNTg5NmVjO1xuJHByaW1hcnktZGFyazogIzAwM2Y4ODtcblxuJHNlY29uZGFyeS15ZWxsb3c6ICNmZmQyMDA7XG5cbiRlcnJvcjogI0M5MDAwMDtcbiRlcnJvci10cmFuc3BhcmVudDogcmdiYSgyMDEsIDAsIDAsIDAuNyk7XG4kYm9yZGVyOiAjQzlDOUM5O1xuJHBsYWNlaG9sZGVyOiAjQTVBNUE1O1xuXG4kYmFja2dyb3VuZDogI0Y5RkFGRTtcbiRzdXJmYWNlOiAjRjlGQUZFO1xuXG4kb24tcHJpbWFyeTogI0ZGRkZGQjtcbiRvbi1wcmltYXJ5LWxpZ2h0OiAjMjMyNTI4O1xuJG9uLXByaW1hcnktZGFyazogI0ZGRkZGQjtcblxuJG9uLXNlY29uZGFyeS15ZWxsb3c6ICMyMzI1Mjg7XG5cbiRvbi1lcnJvcjogI0ZGRkZGQjtcblxuJG9uLWJhY2tncm91bmQ6ICMyMzI1Mjg7XG4kb24tc3VyZmFjZTogIzIzMjUyODtcblxuJHByaW1hcnktc2hhZG93OiByZ2JhKDUsIDEwNSwgMTg1LCAwLjIpO1xuJHNlY29uZGFyeS10ZWFsLXNoYWRvdzogcmdiKDc0LCAxODksIDE3MiwgMzUlKTtcbiRzZWNvbmRhcnkteWVsbG93LXNoYWRvdzogcmdiKDI1MiwgMjEwLCAzNCwgMzUlKTtcbiRjYXJkLXNoYWRvdzogcmdiKDExMiwgMTQ0LCAxNzYsIDM1JSk7IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG4ucGFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbn1cblxuLmlsbHVzdHJhdGlvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmlsbHVzdHJhdGlvbi1pbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9ybS1oZWFkZXIge1xuICAgIEBleHRlbmQgLmgyLXRleHQ7XG4gICAgY29sb3I6ICRvbi1iYWNrZ3JvdW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5mb3JtLXN1YmhlYWRlciB7XG4gICAgQGV4dGVuZCAuaDMtdGV4dDtcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4uZm9ybS1pbnB1dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybS1pbnB1dC1sYWJlbCB7XG4gICAgQGV4dGVuZCAuYm9keTMtdGV4dDtcbiAgICBjb2xvcjogJHByaW1hcnktZGFyaztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgICBAZXh0ZW5kIC5ib2R5My10ZXh0O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkOyAgICBcbiAgICBcbiAgICBjb2xvcjogJG9uLWJhY2tncm91bmQ7XG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgICBcbn1cblxuLmZvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyO1xufVxuXG4uZm9ybS1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1saWdodDtcbn1cblxuLmZvcm0taW5wdXQtZXJyb3Ige1xuICAgIGNvbG9yOiAkZXJyb3I7XG4gICAgQGV4dGVuZCAuY2FwdGlvbi10ZXh0O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZvcm0tc3VibWl0LWJ0biB7XG4gICAgQGV4dGVuZCAucHJpbWFyeS1idG4tZmlsbGVkO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogMTJweCAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5mb3JtLXN1Ym1pdC1idG46aG92ZXIge1xuICAgIEBleHRlbmQgLnByaW1hcnktYnRuLWZpbGxlZC0taG92ZXI7XG59XG5cbi5mb3JtLXN1Ym1pdC1idG46YWN0aXZlIHtcbiAgICBAZXh0ZW5kIC5wcmltYXJ5LWJ0bi1maWxsZWQtLWFjdGl2ZTtcbn1cblxuLmFsdGVybmF0ZS1saW5rLXRleHQge1xuICAgIEBleHRlbmQgLmJvZHkyLXRleHQ7XG4gICAgY29sb3I6ICRvbi1iYWNrZ3JvdW5kO1xufVxuXG4uYWx0ZXJuYXRlLWxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogJHByaW1hcnk7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_email_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/email-validator */
    "./src/app/shared/email-validator.ts");
    /* harmony import */


    var _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../trinity-lyfe.service */
    "./src/app/trinity-lyfe.service.ts");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(fb, trinityLyfeService, router) {
        _classCallCheck(this, SignupComponent);

        this.fb = fb;
        this.trinityLyfeService = trinityLyfeService;
        this.router = router;
        this.signupForm = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
          confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]]
        });
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setValidators();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this15 = this;

          var formData = new FormData();
          formData.append('name', this.signupForm.get('name').value);
          formData.append('username', this.signupForm.get('username').value);
          formData.append('email', this.signupForm.get('email').value);
          formData.append('password', this.signupForm.get('password').value);
          this.trinityLyfeService.postAPIData('signup', formData, true).subscribe(function (resp) {
            _this15.router.navigate(['/login']);
          }, function (errorResp) {
            if (errorResp.status == 409) {
              _this15.signupError = "User already exists! Try logging in instead";
            } else {
              _this15.signupError = "Something went wrong! Please try again later";
            }
          });
        }
      }, {
        key: "name",
        get: function get() {
          return this.signupForm.get('name');
        }
      }, {
        key: "username",
        get: function get() {
          return this.signupForm.get('username');
        }
      }, {
        key: "email",
        get: function get() {
          return this.signupForm.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.signupForm.get('password');
        }
      }, {
        key: "confirmPassword",
        get: function get() {
          return this.signupForm.get('confirmPassword');
        }
      }, {
        key: "setValidators",
        value: function setValidators() {
          this.signupForm.get('confirmPassword').setValidators(_shared_email_validator__WEBPACK_IMPORTED_MODULE_4__["PasswordValidator"].checkPasswords(this.signupForm.get('password'), this.signupForm.get('confirmPassword')));
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_5__["TrinityLyfeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/signup/signup.component.scss"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/trinity-lyfe.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/trinity-lyfe.service.ts ***!
    \*****************************************/

  /*! exports provided: TrinityLyfeService */

  /***/
  function srcAppTrinityLyfeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrinityLyfeService", function () {
      return TrinityLyfeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var TrinityLyfeService = /*#__PURE__*/function () {
      function TrinityLyfeService(http) {
        _classCallCheck(this, TrinityLyfeService);

        this.http = http;
      }

      _createClass(TrinityLyfeService, [{
        key: "postAPIData",
        value: function postAPIData(endpoint, formData, withCredentials) {
          return this.http.post('/api/' + endpoint, formData, {
            withCredentials: true
          });
        }
      }, {
        key: "getAPIData",
        value: function getAPIData(endpoint, withCredentials) {
          return this.http.get('/api/' + endpoint, {
            withCredentials: true
          });
        }
      }, {
        key: "postMultipartAPIData",
        value: function postMultipartAPIData(endpoint, formData, withCredentials) {
          return this.http.post('/api/' + endpoint, formData, {
            withCredentials: true
          });
        }
      }, {
        key: "deleteAPIData",
        value: function deleteAPIData(endpoint, formData, withCredentials) {
          return this.http["delete"]('/api/' + endpoint, {
            withCredentials: true
          });
        }
      }]);

      return TrinityLyfeService;
    }();

    TrinityLyfeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TrinityLyfeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TrinityLyfeService);
    /***/
  },

  /***/
  "./src/app/upload-photo/upload-photo.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/upload-photo/upload-photo.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUploadPhotoUploadPhotoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap\");\n/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput,\ntextarea {\n  all: unset;\n}\nbutton {\n  border: none;\n}\n* {\n  font-family: \"Nunito\", sans-serif;\n}\n.title-text {\n  font-size: 60px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h1-text {\n  font-size: 32px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h2-text, .photo-upload-header {\n  font-size: 23px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h3-text, .photo-browser-header, .photo-upload-subheader {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n}\n.h4-text {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n}\n.body1-text {\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n}\n.body2-text {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 22px;\n}\n.body3-text, .form-input, .photo-browser-description {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 20px;\n}\n.button-text, .primary-btn-outline, .primary-btn-filled, .photo-browser-btn {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 29px;\n  text-transform: uppercase;\n}\n.caption-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n}\n.overline-text {\n  font-size: 10px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.primary-btn-filled, .photo-browser-btn {\n  background-color: #0569b9;\n  color: #FFFFFB;\n  box-shadow: 0 4px 4px 2px rgba(5, 105, 185, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\n.primary-btn-filled--hover, .photo-browser-btn:hover {\n  filter: brightness(0.98);\n  scale: 0.99;\n}\n.primary-btn-filled--active, .photo-browser-btn:active {\n  filter: brightness(0.95);\n  scale: 0.98;\n}\n.primary-btn-filled:disabled, .photo-browser-btn:disabled {\n  background-color: #C9C9C9;\n  pointer-events: none;\n  cursor: none;\n}\n.primary-btn-outline {\n  border: 1px solid #0569b9;\n  color: #0569b9;\n  background-color: #F9FAFE;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\nbody {\n  background-color: #F9FAFE;\n}\n.photo-upload-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  position: relative;\n}\n.photo-upload-header {\n  color: #232528;\n  margin-bottom: 25px;\n}\n.photo-upload-subheader {\n  color: #A5A5A5;\n  margin-bottom: 50px;\n}\n.photo-browser-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  padding: 100px 200px;\n  background-color: #F9FAFE;\n  box-shadow: 0 16px 40px 0 rgba(112, 144, 176, 0.35);\n}\n.photo-caption-edit-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n}\n.photo-browser-illustration-container {\n  margin-bottom: 30px;\n}\n.photo-browser-illustration {\n  height: 100px;\n}\n.photo-browser-header {\n  color: #232528;\n  margin-bottom: 25px;\n}\n.photo-browser-description {\n  color: #A5A5A5;\n  margin-bottom: 30px;\n}\n.photo-browser-btn {\n  padding: 12px 28px;\n  border-radius: 10px;\n  position: relative;\n}\n.photo-browser-btn input {\n  display: none;\n}\n.photo-browser-btn-icon {\n  height: 15px;\n  margin-right: 8px;\n}\n.form-input {\n  border-radius: 8px;\n  padding: 15px;\n  margin-top: 20px;\n  width: 100%;\n  border: 1px solid;\n  background-color: #F9FAFE;\n  color: #232528;\n  border-color: #C9C9C9;\n  transition: all 0.2s ease-in;\n}\n.form-input::-moz-placeholder {\n  color: #A5A5A5;\n}\n.form-input::placeholder {\n  color: #A5A5A5;\n}\n.form-input:focus {\n  border-color: #5896ec;\n}\n.photo-upload-form {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.photo-caption-container {\n  width: 60%;\n  margin-left: 50px;\n}\n.photo-preview-img {\n  height: 500px;\n  border-radius: 20px;\n  box-shadow: 0 16px 40px 0 rgba(112, 144, 176, 0.35);\n}\n.upload-btn-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXNobWluYXlhay9Eb2N1bWVudHMvU3R1ZHkvUHJvZ3JhbW1pbmcvQ1M3MDI1LTIxLTIyLVJhc2htaVByYW1vZE5heWFrL0JhY2stZW5kIFByb2dyYW1taW5nL1Byb2plY3QvdHJpbml0eS1seWZlLWZlL3NyYy9mb250cy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL3Jlc2V0cy5zY3NzIiwic3JjL2FwcC91cGxvYWQtcGhvdG8vdXBsb2FkLXBob3RvLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL2NvbG9ycy5zY3NzIiwiL1VzZXJzL3Jhc2htaW5heWFrL0RvY3VtZW50cy9TdHVkeS9Qcm9ncmFtbWluZy9DUzcwMjUtMjEtMjItUmFzaG1pUHJhbW9kTmF5YWsvQmFjay1lbmQgUHJvZ3JhbW1pbmcvUHJvamVjdC90cmluaXR5LWx5ZmUtZmUvc3JjL2FwcC91cGxvYWQtcGhvdG8vdXBsb2FkLXBob3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSxvRkFBQTtBQ0RSLDhFQUFBO0FDQUE7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VBQ0EsVUFBQTtFQUNB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RUFDSSxjRHBHVTtBRGdRZDtBRTdKQTtFQUNJLGNEcEdVO0FEZ1FkO0FFekpBO0VBQ0kscUJEaEhZO0FENFFoQjtBRXpKQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRjRKSjtBRXpKQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBRjRKSjtBRXpKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1EQUFBO0FGNEpKO0FFekpBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUY0SkoiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQtcGhvdG8vdXBsb2FkLXBob3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4qIHtcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMS10ZXh0IHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxufVxuXG4uaDItdGV4dCB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbn1cblxuLmgzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG59XG5cbi5oNC10ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxufVxuXG4uYm9keTEtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMjlweDtcbn1cblxuLmJvZHkyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5ib2R5My10ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uYnV0dG9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcHRpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLm92ZXJsaW5lLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgJy4vcmVzZXRzLnNjc3MnO1xuQGltcG9ydCAnLi9jb2xvcnMnO1xuQGltcG9ydCAnLi9mb250cyc7XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICAgIGNvbG9yOiAkb24tcHJpbWFyeTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA0cHggMnB4ICRwcmltYXJ5LXNoYWRvdztcbiAgICBcbiAgICBAZXh0ZW5kIC5idXR0b24tdGV4dDtcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcblxufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkLS1ob3ZlciB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTgpO1xuICAgIHNjYWxlOiAwLjk5O1xufVxuXG4ucHJpbWFyeS1idG4tZmlsbGVkLS1hY3RpdmUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcbiAgICBzY2FsZTogMC45ODtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZDpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlcjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjdXJzb3I6IG5vbmU7XG59XG5cbi5wcmltYXJ5LWJ0bi1vdXRsaW5lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeTtcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1cmZhY2U7XG5cbiAgICBAZXh0ZW5kIC5idXR0b24tdGV4dDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuXG59XG5cbmJvZHkge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbn0iLCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgICBhbGw6IHVuc2V0O1xufVxuXG5idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSwgcSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICBhbGw6IHVuc2V0O1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlLXRleHQge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmgxLXRleHQge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmgyLXRleHQsIC5waG90by11cGxvYWQtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oMy10ZXh0LCAucGhvdG8tYnJvd3Nlci1oZWFkZXIsIC5waG90by11cGxvYWQtc3ViaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oNC10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5ib2R5MS10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuXG4uYm9keTItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLmJvZHkzLXRleHQsIC5mb3JtLWlucHV0LCAucGhvdG8tYnJvd3Nlci1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbi10ZXh0LCAucHJpbWFyeS1idG4tb3V0bGluZSwgLnByaW1hcnktYnRuLWZpbGxlZCwgLnBob3RvLWJyb3dzZXItYnRuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FwdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ub3ZlcmxpbmUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZCwgLnBob3RvLWJyb3dzZXItYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1NjliOTtcbiAgY29sb3I6ICNGRkZGRkI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAycHggcmdiYSg1LCAxMDUsIDE4NSwgMC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbn1cblxuLnByaW1hcnktYnRuLWZpbGxlZC0taG92ZXIsIC5waG90by1icm93c2VyLWJ0bjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk4KTtcbiAgc2NhbGU6IDAuOTk7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQtLWFjdGl2ZSwgLnBob3RvLWJyb3dzZXItYnRuOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcbiAgc2NhbGU6IDAuOTg7XG59XG5cbi5wcmltYXJ5LWJ0bi1maWxsZWQ6ZGlzYWJsZWQsIC5waG90by1icm93c2VyLWJ0bjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOUM5Qzk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IG5vbmU7XG59XG5cbi5wcmltYXJ5LWJ0bi1vdXRsaW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA1NjliOTtcbiAgY29sb3I6ICMwNTY5Yjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZFO1xufVxuXG4ucGhvdG8tdXBsb2FkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5waG90by11cGxvYWQtaGVhZGVyIHtcbiAgY29sb3I6ICMyMzI1Mjg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5waG90by11cGxvYWQtc3ViaGVhZGVyIHtcbiAgY29sb3I6ICNBNUE1QTU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5waG90by1icm93c2VyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxMDBweCAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RkFGRTtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDQwcHggMCByZ2JhKDExMiwgMTQ0LCAxNzYsIDAuMzUpO1xufVxuXG4ucGhvdG8tY2FwdGlvbi1lZGl0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogODAlO1xufVxuXG4ucGhvdG8tYnJvd3Nlci1pbGx1c3RyYXRpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnBob3RvLWJyb3dzZXItaWxsdXN0cmF0aW9uIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnBob3RvLWJyb3dzZXItaGVhZGVyIHtcbiAgY29sb3I6ICMyMzI1Mjg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5waG90by1icm93c2VyLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICNBNUE1QTU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5waG90by1icm93c2VyLWJ0biB7XG4gIHBhZGRpbmc6IDEycHggMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGhvdG8tYnJvd3Nlci1idG4gaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucGhvdG8tYnJvd3Nlci1idG4taWNvbiB7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkU7XG4gIGNvbG9yOiAjMjMyNTI4O1xuICBib3JkZXItY29sb3I6ICNDOUM5Qzk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbi5mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjQTVBNUE1O1xufVxuXG4uZm9ybS1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzU4OTZlYztcbn1cblxuLnBob3RvLXVwbG9hZC1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGhvdG8tY2FwdGlvbi1jb250YWluZXIge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLnBob3RvLXByZXZpZXctaW1nIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDQwcHggMCByZ2JhKDExMiwgMTQ0LCAxNzYsIDAuMzUpO1xufVxuXG4udXBsb2FkLWJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn0iLCIkcHJpbWFyeTogIzA1NjliOTtcbiRwcmltYXJ5LWxpZ2h0OiAjNTg5NmVjO1xuJHByaW1hcnktZGFyazogIzAwM2Y4ODtcblxuJHNlY29uZGFyeS15ZWxsb3c6ICNmZmQyMDA7XG5cbiRlcnJvcjogI0M5MDAwMDtcbiRlcnJvci10cmFuc3BhcmVudDogcmdiYSgyMDEsIDAsIDAsIDAuNyk7XG4kYm9yZGVyOiAjQzlDOUM5O1xuJHBsYWNlaG9sZGVyOiAjQTVBNUE1O1xuXG4kYmFja2dyb3VuZDogI0Y5RkFGRTtcbiRzdXJmYWNlOiAjRjlGQUZFO1xuXG4kb24tcHJpbWFyeTogI0ZGRkZGQjtcbiRvbi1wcmltYXJ5LWxpZ2h0OiAjMjMyNTI4O1xuJG9uLXByaW1hcnktZGFyazogI0ZGRkZGQjtcblxuJG9uLXNlY29uZGFyeS15ZWxsb3c6ICMyMzI1Mjg7XG5cbiRvbi1lcnJvcjogI0ZGRkZGQjtcblxuJG9uLWJhY2tncm91bmQ6ICMyMzI1Mjg7XG4kb24tc3VyZmFjZTogIzIzMjUyODtcblxuJHByaW1hcnktc2hhZG93OiByZ2JhKDUsIDEwNSwgMTg1LCAwLjIpO1xuJHNlY29uZGFyeS10ZWFsLXNoYWRvdzogcmdiKDc0LCAxODksIDE3MiwgMzUlKTtcbiRzZWNvbmRhcnkteWVsbG93LXNoYWRvdzogcmdiKDI1MiwgMjEwLCAzNCwgMzUlKTtcbiRjYXJkLXNoYWRvdzogcmdiKDExMiwgMTQ0LCAxNzYsIDM1JSk7IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG4ucGhvdG8tdXBsb2FkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG5cbi5waG90by11cGxvYWQtaGVhZGVyIHtcbiAgICBAZXh0ZW5kIC5oMi10ZXh0O1xuICAgIGNvbG9yOiAkb24tYmFja2dyb3VuZDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ucGhvdG8tdXBsb2FkLXN1YmhlYWRlciB7XG4gICAgQGV4dGVuZCAuaDMtdGV4dDtcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5waG90by1icm93c2VyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwMHB4IDIwMHB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1cmZhY2U7XG4gICAgYm94LXNoYWRvdzogMCAxNnB4IDQwcHggMCAkY2FyZC1zaGFkb3c7XG59XG5cblxuLnBob3RvLWNhcHRpb24tZWRpdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuXG59XG5cbi5waG90by1icm93c2VyLWlsbHVzdHJhdGlvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5waG90by1icm93c2VyLWlsbHVzdHJhdGlvbiB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnBob3RvLWJyb3dzZXItaGVhZGVyIHtcbiAgICBAZXh0ZW5kIC5oMy10ZXh0O1xuICAgIGNvbG9yOiAkb24tYmFja2dyb3VuZDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ucGhvdG8tYnJvd3Nlci1kZXNjcmlwdGlvbiB7XG4gICAgQGV4dGVuZCAuYm9keTMtdGV4dDtcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5waG90by1icm93c2VyLWJ0biB7XG4gICAgQGV4dGVuZCAucHJpbWFyeS1idG4tZmlsbGVkO1xuICAgIHBhZGRpbmc6IDEycHggMjhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBob3RvLWJyb3dzZXItYnRuIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ucGhvdG8tYnJvd3Nlci1idG46aG92ZXIge1xuICAgIEBleHRlbmQgLnByaW1hcnktYnRuLWZpbGxlZC0taG92ZXI7XG59XG5cbi5waG90by1icm93c2VyLWJ0bjphY3RpdmUge1xuICAgIEBleHRlbmQgLnByaW1hcnktYnRuLWZpbGxlZC0tYWN0aXZlO1xufVxuXG4ucGhvdG8tYnJvd3Nlci1idG4taWNvbiB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gICAgQGV4dGVuZCAuYm9keTMtdGV4dDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkOyAgICBcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VyZmFjZTtcbiAgICBjb2xvcjogJG9uLXN1cmZhY2U7XG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgICBcbn1cblxuLmZvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyO1xufVxuXG4uZm9ybS1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1saWdodDtcbn1cblxuLnBob3RvLXVwbG9hZC1mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5waG90by1jYXB0aW9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLnBob3RvLXByZXZpZXctaW1nIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxNnB4IDQwcHggMCAkY2FyZC1zaGFkb3c7XG59XG5cbi51cGxvYWQtYnRuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/upload-photo/upload-photo.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/upload-photo/upload-photo.component.ts ***!
    \********************************************************/

  /*! exports provided: UploadPhotoComponent */

  /***/
  function srcAppUploadPhotoUploadPhotoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadPhotoComponent", function () {
      return UploadPhotoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../trinity-lyfe.service */
    "./src/app/trinity-lyfe.service.ts");

    var UploadPhotoComponent = /*#__PURE__*/function () {
      function UploadPhotoComponent(authService, fb, trinityLyfeService, router) {
        _classCallCheck(this, UploadPhotoComponent);

        this.authService = authService;
        this.fb = fb;
        this.trinityLyfeService = trinityLyfeService;
        this.router = router;
        this.postUploadForm = this.fb.group({
          caption: [''],
          photoFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          photoFileSource: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(UploadPhotoComponent, [{
        key: "postUploadFormControls",
        get: function get() {
          return this.postUploadForm.controls;
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event) {
          var _this16 = this;

          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.postUploadForm.get('photoFileSource').setValue(file);
            var reader = new FileReader();

            reader.onload = function (e) {
              var imgBase64Path = e.target.result;
              _this16.selectedFile = imgBase64Path;
            };

            reader.readAsDataURL(file);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedIn = localStorage.getItem("isLoggedIn");
          this.user = localStorage.getItem("user");

          if (this.isLoggedIn == "false") {
            this.router.navigate(['/login']);
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this17 = this;

          var formData = new FormData();
          var file = this.postUploadForm.get('photoFileSource').value;
          var caption = this.postUploadForm.get('caption').value;
          formData.append('caption', caption);
          formData.append('file', file);
          formData.append('username', this.user);
          this.trinityLyfeService.postAPIData('photo', formData, true).subscribe(function (resp) {
            _this17.router.navigate(['/landing-page']);
          }, function (errorResp) {
            if (errorResp.status == 401) {
              _this17.uploadError = "You are authorised to perform the operation!";
              localStorage.setItem("isLoggedIn", "false");
              localStorage.removeItem("user");

              _this17.router.navigate(['/login']);
            } else {
              _this17.uploadError = "Something went wrong! Please try again later";
            }
          });
        }
      }]);

      return UploadPhotoComponent;
    }();

    UploadPhotoComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _trinity_lyfe_service__WEBPACK_IMPORTED_MODULE_5__["TrinityLyfeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UploadPhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-upload-photo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload-photo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-photo/upload-photo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload-photo.component.scss */
      "./src/app/upload-photo/upload-photo.component.scss"))["default"]]
    })], UploadPhotoComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/rashminayak/Documents/Study/Programming/CS7025-21-22-RashmiPramodNayak/Back-end Programming/Project/trinity-lyfe-fe/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map