import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'react-thunk'

import { plantsReducer } from './reducers/plantReducers';

const initialState = {}
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store = createStore(combineReducers({
    plants: plantsReducer
}),
initialState,
composeEnhancer(applyMiddleware(thunk))
)

export default store