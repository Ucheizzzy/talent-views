import axios from "axios";
import { API_URL } from "../../BaseUrl/baseurl";
import authHeader from "../../services/auth-header";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";


export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(API_URL + "user/login", user, { headers: authHeader() });
    // const currentUser = res?.data?.data?.user
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure());
  }
};
