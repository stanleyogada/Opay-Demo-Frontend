// const BASE_URL = "https://opay-demo-backend-production.up.railway.app/api/v1"; // TODO: uncomment this line of code
const BASE_URL = "http://localhost:8000"; // TODO: remove this line of code (++ fake data)

const QUERY_KEYS = {
  currentUser: "currentUser",
  currentUserAccounts: "currentUserAccounts",
  defaultUserLoginInfo: "defaultUserLoginInfo",
};

const ENDPOINTS = {
  defaultUserLoginInfo: "/users/default-user-login",
  currentUser: "/users/me", // TODO: remove this comment (++ fake data)
  // currentUserAccounts: "/users/me/accounts", // TODO: uncomment this line of code
  currentUserAccounts: "/users/me.accounts", // TODO: remove this comment (++ fake data) TODO: remove this line of code
  signIn: "/auth/signin", // TODO: remove this comment (++ fake data)
  signOut: "/auth/signout",
  signUp: "/auth/signup",
  sendEmail: "/auth/send-email-verification",
  verifyEmail: "/auth/confirm-email-verification",
  forgetPasscode: "/auth/forgot-login-passcode",
  resetLoginPasscode: "/auth/reset-login-passcode",
  transactions: "/transactions/all",
};

const TEST_NETWORK_SUCCESS_INFO = {
  signUp: "TEST: User signed up successfully",
  sendEmail: "TEST: Email sent successfully",
};

export { QUERY_KEYS, ENDPOINTS, BASE_URL, TEST_NETWORK_SUCCESS_INFO };
