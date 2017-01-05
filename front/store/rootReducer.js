import {combineReducers} from 'redux';
import app from '../features/app/appReducer'
import chatBar from '../features/chatBar/chatBarReducer'

export const rootReducer = combineReducers({
  app,
  chatBar,
});