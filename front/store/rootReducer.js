import {combineReducers} from 'redux';
import app from '../features/app/appReducer'

export const rootReducer = combineReducers({
  app
});