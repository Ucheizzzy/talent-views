export const getPostsStart = () => ({
  type: "GET_POSTS_START",
});

export const getPostsSuccess = (movies) => ({
  type: "GET_POSTS_SUCCESS",
  payload: movies,
});

export const getPostsFailure = () => ({
  type: "GET_POSTS_FAILURE",
});

export const createPostStart = () => ({
  type: "CREATE_POST_START",
});

export const createPostSuccess = (movie) => ({
  type: "CREATE_POST_SUCCESS",
  payload: movie,
});

export const createPostFailure = () => ({
  type: "CREATE_POST_FAILURE",
});

export const uploadPostStart = () => ({
  type: "UPLOAD_POST_START",
});

export const uploadPostSuccess = (movie) => ({
  type: "UPLOAD_POST_SUCCESS",
  payload: movie,
});

export const uploadPostFailure = () => ({
  type: "UPLOAD_POST_FAILURE",
});

export const deletePostStart = () => ({
  type: "DELETE_POST_START",
});

export const deletePostSuccess = (id) => ({
  type: "DELETE_POST_SUCCESS",
  payload: id,
});

export const deletePostFailure = () => ({
  type: "DELETE_POST_FAILURE",
});
