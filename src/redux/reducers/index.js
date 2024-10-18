// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';

export default combineReducers({
  recipes: recipesReducer,
});
