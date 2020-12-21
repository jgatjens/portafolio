export const enum MessageType {
  INFO,
  SUCCESS,
  ERROR,
  WARN,
  DEBUG,
}

export const enum Message {
  USER_LOGIN = 'User has successfully logged in!',
  USER_LOGOUT = 'User has successfully logout!',
  USER_CREATE = 'User has been created!',
  USER_NOT_FOUND = 'Email and password doesnt not match!',
  USER_ERROR = 'WE were not able to create the user, please try again!',
}
