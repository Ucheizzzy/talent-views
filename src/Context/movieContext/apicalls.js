import axios from 'axios';
import { getMoviesError, getMoviesStart, getMoviesSuccess } from './movieActions';

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())
    try {
        const res = await axios.get('/movies')
        dispatch(getMoviesSuccess(res.data))
    } catch (err) {
        dispatch(getMoviesError())
    }
}