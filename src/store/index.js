import { createStore,  combineReducers } from 'redux'
// import thunk from 'redux-thunk'
// import axios from 'axios'

import { plantsReducer } from './plantsReducer';


const initialState = {}

const store = createStore(combineReducers({
    plants: plantsReducer
}),
initialState,
window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)

export default store