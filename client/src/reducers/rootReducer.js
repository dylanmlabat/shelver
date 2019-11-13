import { combineReducers } from 'redux';
import usersReducer from './usersReducer.js';
import booksReducer from './booksReducer.js';

const rootReducer = combineReducers({
  user: usersReducer,
  books: booksReducer
});

export default rootReducer;
