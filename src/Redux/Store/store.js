import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from '../Reducers/authReducer';
const thunkMiddleware = require('redux-thunk').default;

const mainReducer = combineReducers({
    auth: authReducer
})

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;