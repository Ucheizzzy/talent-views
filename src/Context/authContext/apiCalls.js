import axios from "axios";
import { API_URL } from "../../BaseUrl/baseurl";
import authHeader from "../../services/auth-header";
import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess, setMessage } from "./AuthActions";

export let message;

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(API_URL + "user/login", user, { headers: authHeader() });
    // const currentUser = res?.data?.data?.user
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure());
    if (err.response) {
      message = err.response.data.message;
      dispatch(setMessage(message));
      // console.log("deji:", message)
    }
  }
};

export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(API_URL + "user/register", user, { headers: authHeader() });
    dispatch(registerSuccess(res.data)) 
  } catch (err) {
    dispatch(registerFailure());
    if (err.response) {
      message = err.response.data.message;
      dispatch(setMessage(message));
    } 
  } 
}
