import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import scheduleReducer from 'component/schedule/reducer/schedule-reducer';

export default combineReducers({
  scheduleReducer,

  routing: routerReducer
});
