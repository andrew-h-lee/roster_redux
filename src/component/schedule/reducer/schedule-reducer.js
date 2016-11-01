import update from 'react-addons-update';

import { ADD, REMOVE } from '../action/schedule-action';

const initialState =[{
  title: 'Registration & Breakfast',
  description: 'Kick off the day with a sumptuous meal.',
  speaker: 'Jake Gynn',
  time: {
    start:"2016-09-03T08:30:00.0Z",
    end: "2016-09-03T09:30:00.0Z"
  },
  track: 'a',
  id: 0
}];

export default function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return update(state, { [action.payload]: { isAdded: { $set:true }}});
    case REMOVE:
      return update(state, { [action.payload]: { isAdded: { $set:false }}});
    default:
      return state;
  }
}
