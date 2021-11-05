import { FETCH_PLANTS } from '../types';

export const fetchPlants = () => async (dispatch) => {
    const res = await fetch('http://localhost:4000/plants')
    const data = await res.json()
    dispatch({
        type: FETCH_PLANTS,
        payload: data
    })
}