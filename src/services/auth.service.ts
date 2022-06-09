import { LoginInfo, SignUpInfo } from "../models/user";
import { _getUrl, _GET_, _POST_ } from "./utils/requests";

const signup = (data: SignUpInfo) => {
  return _POST_(_getUrl('users'), data);
};

const login = (data: LoginInfo) => {
  return _POST_(_getUrl('auth'), data);
};

const retrieveUserInfo = () => {
  return _GET_(_getUrl('users', 'me'));
};

const authService = {
  signup,
  login,
  retrieveUserInfo
};

export default authService;
