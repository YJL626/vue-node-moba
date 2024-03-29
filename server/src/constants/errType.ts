type constantError = {
  stateCode: number
  msg: string
}
const NAME_OR_PASSWORD_IS_REQUIRED = 'name_or_password_is_required'
const DB_SERVER_ERROR = {
  stateCode: 500,
  msg: 'DB_SERVER_ERROR',
}
const USER_ALREADY_EXISTS = {
  stateCode: 400,
  msg: 'user_already_exists',
}
const CATEGORY_ID_IS_NOT_EXISTS = {
  stateCode: 400,
  msg: 'CATEGORY_ID_IS_NOT_EXISTS',
}

const DEL_ERROR = {
  stateCode: 400,
  msg: 'THE_DEL_RESOURCE_IS_NOT_FOUND',
}
const PUT_ERROR = {
  stateCode: 400,
  msg: 'PUT_ERROR',
}
const USER_NOT_EXISTS = {
  stateCode: 400,
  msg: 'user_not_exists',
}
const EMAIL_ALREADY_EXISTS = {
  stateCode: 400,
  msg: 'EMAIL_ALREADY_EXISTS',
}
const EMAIL_NOT_EXISTS = {
  stateCode: 400,
  msg: 'EMAIL_NOT_EXISTS',
}
const USER_DOES_NOT_EXISTS = 'user_does_not_exists'
const INCORRECT_USERNAME_OR_PASSWORD = {
  stateCode: 401,
  msg: '用户名或密码错误',
}
const DATA_FORM_ERROR = {
  stateCode: 400,
  msg: 'DATE_FORM_ERROR',
}
const INTERNAL_FORGET_CTR_SERVE_ERROR = {
  stateCode: 500,
  msg: 'INTERNAL_FORGET_CTR_SERVE_ERROR',
}
const INTERNAL_EMAIL_SERVE_ERROR = {
  stateCode: 500,
  msg: 'INTERNAL_MAIL_SERVE_ERROR',
}
const INTERNAL_USER_CREATE_FAILED_ERROR = {
  stateCode: 500,
  msg: 'INTERNAL_USER_CREATE_FAILED_ERROR',
}
const UNAUTHORIZATION = 'UNAUTHORIZATION'
const UNPERMISSION = 'unpermission'

export {
  CATEGORY_ID_IS_NOT_EXISTS,
  PUT_ERROR,
  DEL_ERROR,
  constantError,
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_DOES_NOT_EXISTS,
  INCORRECT_USERNAME_OR_PASSWORD,
  UNAUTHORIZATION,
  UNPERMISSION,
  DATA_FORM_ERROR,
  EMAIL_ALREADY_EXISTS,
  USER_ALREADY_EXISTS,
  INTERNAL_EMAIL_SERVE_ERROR,
  INTERNAL_USER_CREATE_FAILED_ERROR,
  USER_NOT_EXISTS,
  EMAIL_NOT_EXISTS,
  INTERNAL_FORGET_CTR_SERVE_ERROR,
  DB_SERVER_ERROR,
}
