import { FETCH_PLANTS } from './../types';

export const plantsReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_PLANTS:
        return { items: action.payload }
        default: return state
    }
}