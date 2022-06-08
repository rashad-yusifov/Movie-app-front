import axios from 'axios';
import {BASE_URL} from '../config/env';
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED";
export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";

export const fetchMovies = () => {
    return dispatch => {
        dispatch({
            type: 'FETCH_MOVIES',
            payload: axios.get(`${BASE_URL}/get-movies`).then(res => res.data)
        });
    }
}