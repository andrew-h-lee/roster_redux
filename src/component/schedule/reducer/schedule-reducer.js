import update from 'react-addons-update';

import { ADD, REMOVE } from '../action/schedule-action';

const initialState =[{
  title: 'Registration & Breakfast',
  description: 'Kick off the day with a Big Breakfast',
  speaker: '',
  time: {
    start: "2016-09-03T08:30:00.0Z",
    end: "2016-09-03T09:30:00.0Z"
  },
  track: 'z',
  id: 0
  }, {
    title: '',
    description: '',
    speaker: '',
    time: {
      start: "2016-09-03T09:30:00.0Z",
      end: "2016-09-03T10:10:00.0Z"
    },
    track: 'a',
    id: 1
  }, {
    title: '' ,
    description: '',
    speaker: '',
    time: {
      start: "2016-09-03T09:30:00.0Z",
      end: "2016-09-03T10:10:00.0Z"
    },
    track: 'b',
    id: 2
  }, {
    title: 'Pragmatic Microservices',
    description: 'Whether, When & How to Migrate',
    speaker: 'Randy Shoup',
    time: {
      start: "2016-09-03T09:30:00.0Z",
      end: "2016-09-03T10:10:00.0Z"
    },
    track: 'c',
    id: 3
  }, {
//    title: '',
//    description: '',
//    speaker: '',
//    time: {
//      start: "2016-06-03T11:10:00.0Z",
//      end: "2016-06-03T11:50:00.0Z"
//    },
//    track: 'a',
//    id: 4
//  }, {
//    title: '',
//    description: '',
//    speaker: '',
//    time: {
//      start: "2016-06-03T11:50:00.0Z",
//      end: "2016-06-03T12:30:00.0Z"
//    },
//    track: 'b',
//    id: 5
//  }, {
//    title: '',
//    description: '',
//    speaker: '',
//    time: {
//      start: "2016-06-03T11:50:00.0Z",
//      end: "2016-06-03T12:30:00.0Z"
//    },
//    track: 'c',
//    id: 6
//  }, {
//    title: '',
//    description: '',
//    speaker: '',
//    time: {
//      start: "2016-06-03T13:50:00.0Z",
//      end: "2016-06-03T14:30:00.0Z"
//    },
//    track: 'a',
//    id: 7
//  }, {
//    title: '',
//    description: '',
//    speaker: '',
//    time: {
//      start: "2016-06-03T13:50:00.0Z",
//      end: "2016-06-03T14:30:00.0Z"
//    },
//    track: 'b',
//    id: 8
//  }, {
//    title: '',
//    description: '',
//    speaker: '',
//    time: {
//      start: "2016-06-03T15:40:00.0Z",
//      end: "2016-06-03T16:20:00.0Z"
//    },
//    track: 'c',
//    id: 9
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
