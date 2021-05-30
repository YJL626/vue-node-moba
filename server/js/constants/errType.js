"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_SERVER_ERROR = exports.INTERNAL_FORGET_CTR_SERVE_ERROR = exports.EMAIL_NOT_EXISTS = exports.USER_NOT_EXISTS = exports.INTERNAL_USER_CREATE_FAILED_ERROR = exports.INTERNAL_EMAIL_SERVE_ERROR = exports.USER_ALREADY_EXISTS = exports.EMAIL_ALREADY_EXISTS = exports.DATA_FORM_ERROR = exports.UNPERMISSION = exports.UNAUTHORIZATION = exports.INCORRECT_USERNAME_OR_PASSWORD = exports.USER_DOES_NOT_EXISTS = exports.NAME_OR_PASSWORD_IS_REQUIRED = exports.DEL_ERROR = exports.PUT_ERROR = exports.CATEGORY_ID_IS_NOT_EXISTS = void 0;
const NAME_OR_PASSWORD_IS_REQUIRED = 'name_or_password_is_required';
exports.NAME_OR_PASSWORD_IS_REQUIRED = NAME_OR_PASSWORD_IS_REQUIRED;
const DB_SERVER_ERROR = {
    stateCode: 500,
    msg: 'DB_SERVER_ERROR',
};
exports.DB_SERVER_ERROR = DB_SERVER_ERROR;
const USER_ALREADY_EXISTS = {
    stateCode: 400,
    msg: 'user_already_exists',
};
exports.USER_ALREADY_EXISTS = USER_ALREADY_EXISTS;
const CATEGORY_ID_IS_NOT_EXISTS = {
    stateCode: 400,
    msg: 'CATEGORY_ID_IS_NOT_EXISTS',
};
exports.CATEGORY_ID_IS_NOT_EXISTS = CATEGORY_ID_IS_NOT_EXISTS;
const DEL_ERROR = {
    stateCode: 400,
    msg: 'THE_DEL_RESOURCE_IS_NOT_FOUND',
};
exports.DEL_ERROR = DEL_ERROR;
const PUT_ERROR = {
    stateCode: 400,
    msg: 'PUT_ERROR',
};
exports.PUT_ERROR = PUT_ERROR;
const USER_NOT_EXISTS = {
    stateCode: 400,
    msg: 'user_not_exists',
};
exports.USER_NOT_EXISTS = USER_NOT_EXISTS;
const EMAIL_ALREADY_EXISTS = {
    stateCode: 400,
    msg: 'EMAIL_ALREADY_EXISTS',
};
exports.EMAIL_ALREADY_EXISTS = EMAIL_ALREADY_EXISTS;
const EMAIL_NOT_EXISTS = {
    stateCode: 400,
    msg: 'EMAIL_NOT_EXISTS',
};
exports.EMAIL_NOT_EXISTS = EMAIL_NOT_EXISTS;
const USER_DOES_NOT_EXISTS = 'user_does_not_exists';
exports.USER_DOES_NOT_EXISTS = USER_DOES_NOT_EXISTS;
const INCORRECT_USERNAME_OR_PASSWORD = {
    stateCode: 401,
    msg: '用户名或密码错误',
};
exports.INCORRECT_USERNAME_OR_PASSWORD = INCORRECT_USERNAME_OR_PASSWORD;
const DATA_FORM_ERROR = {
    stateCode: 400,
    msg: 'DATE_FORM_ERROR',
};
exports.DATA_FORM_ERROR = DATA_FORM_ERROR;
const INTERNAL_FORGET_CTR_SERVE_ERROR = {
    stateCode: 500,
    msg: 'INTERNAL_FORGET_CTR_SERVE_ERROR',
};
exports.INTERNAL_FORGET_CTR_SERVE_ERROR = INTERNAL_FORGET_CTR_SERVE_ERROR;
const INTERNAL_EMAIL_SERVE_ERROR = {
    stateCode: 500,
    msg: 'INTERNAL_MAIL_SERVE_ERROR',
};
exports.INTERNAL_EMAIL_SERVE_ERROR = INTERNAL_EMAIL_SERVE_ERROR;
const INTERNAL_USER_CREATE_FAILED_ERROR = {
    stateCode: 500,
    msg: 'INTERNAL_USER_CREATE_FAILED_ERROR',
};
exports.INTERNAL_USER_CREATE_FAILED_ERROR = INTERNAL_USER_CREATE_FAILED_ERROR;
const UNAUTHORIZATION = 'UNAUTHORIZATION';
exports.UNAUTHORIZATION = UNAUTHORIZATION;
const UNPERMISSION = 'unpermission';
exports.UNPERMISSION = UNPERMISSION;
//# sourceMappingURL=errType.js.map