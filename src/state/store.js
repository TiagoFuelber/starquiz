import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { quizReducer as quiz } from './quiz/index';

const reducers = combineReducers({ quiz });

export default createStore(reducers, applyMiddleware(thunkMiddleware));
