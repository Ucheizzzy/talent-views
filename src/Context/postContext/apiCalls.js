import axios from "axios";
import { API_URL } from "../../BaseUrl/baseurl";
import authHeader from "../../services/auth-header";
import {
  createPostFailure,
  createPostStart,
  createPostSuccess,
  deletePostFailure,
  deletePostStart,
  deletePostSuccess,
  getPostsFailure,
  getPostsStart,
  getPostsSuccess,
} from "./PostActions";

export const getPosts = async (dispatch) => {
  dispatch(getPostsStart());
  try {
    const res = await axios.get( API_URL + "post/allpost", { headers: authHeader() });
    dispatch(getPostsSuccess(res?.data?.data));
  } catch (err) {
    dispatch(getPostsFailure());
  }
};

//create
export const createPost = async (post, dispatch) => {
  dispatch(createPostStart());
  try {
    const res = await axios.post( API_URL + "/post", post, { headers: authHeader() });
    dispatch(createPostSuccess(res.data));
  } catch (err) {
    dispatch(createPostFailure());
  }
};

//delete
export const deletePost = async (id, dispatch) => {
  dispatch(deletePostStart());
  try {
    await axios.delete(API_URL + "movie/" + id, { headers: authHeader() });
    dispatch(deletePostSuccess(id));
  } catch (err) {
    dispatch(deletePostFailure());
  }
};
