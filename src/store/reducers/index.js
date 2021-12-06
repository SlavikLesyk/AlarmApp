import { combineReducers } from 'redux';
import alarmListReducer from './alarmListReducer';
import timeReducer from './timeReducer';


export default combineReducers({
  alarms: alarmListReducer,
  alarmTime: timeReducer,
})