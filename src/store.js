import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { plantsReducer } from './reducers/plantsReducer';

const initialState = {}
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store = createStore(combineReducers({
    plants: plantsReducer
}),
initialState,
composeEnhancer(applyMiddleware(thunk))
)

export default store