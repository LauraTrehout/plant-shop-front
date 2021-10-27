import { FETCH_PLANTS } from './../types';

export const fetchPlants = () => async (dispatch) => {
    const res = await fetch('/plants')
    dispatch({
        type: FETCH_PLANTS,
        payload: res.data
    })
}