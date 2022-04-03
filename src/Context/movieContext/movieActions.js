export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies
});

export const getMoviesError = () => ({
    type: "GET_MOVIES_ERROR",
})