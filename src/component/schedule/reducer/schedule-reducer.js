import update from 'react-addons-update';

import { ADD, REMOVE } from '../action/schedule-action';

const initialState =[{
  title: 'Registration & Breakfast',
  description: 'Kick off the day with a Big Breakfast',
  speaker: 'Conference Announcement',
  time: {
    start: "2016-09-03T08:30:00",
    end: "2016-09-03T09:30:00"
  },
  track: 'z',
  id: 0
  }, {
    title: 'DevOps @ Wotif',
    description: 'Making Easy = Right',
    speaker: 'Alexandra Spillane',
    time: {
      start: "2016-09-03T09:40:00",
      end: "2016-09-03T10:30:00"
    },
    track: 'a',
    id: 1
  }, {
    title: 'Autonomy & Asynchrony' ,
    description: 'The Key to Designing Reliable Systems',
    speaker: 'Indu Alagarsamy',
    time: {
      start: "2016-09-03T09:40:00",
      end: "2016-09-03T10:30:00"
    },
    track: 'b',
    id: 2
  }, {
    title: 'Pragmatic Microservices',
    description: 'Whether, When & How to Migrate',
    speaker: 'Randy Shoup',
    time: {
      start: "2016-09-03T09:40:00",
      end: "2016-09-03T10:30:00"
    },
    track: 'c',
    id: 3
  }, {
    title: 'Scala for Big Data Platform',
    description: 'Lessons from the Spark Project',
    speaker: 'Dean Wampler',
    time: {
      start: "2016-09-03T11:10:00",
      end: "2016-09-03T12:00:00"
    },
    track: 'a',
    id: 4
  }, {
    title: 'Delivery Mapping',
    description: 'Turning the Lights On',
    speaker: 'Dan North',
    time: {
      start: "2016-09-03T11:10:00",
      end: "2016-09-03T12:00:00"
    },
    track: 'b',
    id: 5
  }, {
    title: 'Sustain Support Data Variability',
    description: 'Keeping Components Clean while Dealing with Data Variability',
    speaker: 'Joseph Yolder',
    time: {
      start: "2016-09-03T11:10:00",
      end: "2016-09-03T12:00:00"
    },
    track: 'c',
    id: 6
  }, {
    title: 'Big Wins with Small Data',
    description: 'Prediction.io in Ecommerce',
    speaker: 'David Jones',
    time: {
      start: "2016-09-03T12:10:00",
      end: "2016-09-03T13:00:00"
    },
    track: 'a',
    id: 7
  }, {
    title: 'Azure Machine Learning',
    description: 'Anatomy of Machine Learning Service',
    speaker: 'Sharat Chikkerur',
    time: {
      start: "2016-09-03T12:10:00",
      end: "2016-09-03T13:00:00"
    },
    track: 'b',
    id: 8
  }, {
    title: 'Protocols & Structures for Inference',
    description: 'A RESTful API Guide to Machine Learning',
    speaker: 'James Montgomery',
    time: {
      start: "2016-09-03T12:10:00",
      end: "2016-09-03T13:00:00"
    },
    track: 'c',
    id: 9
// },  {
//    title: '',
//    description: '',
//    speaker: '',
//    time: {
//      start: "2016-09-03T14:00:00",
//      end: "2016-09-03T14:50:00"
//    },
//    track: 'a',
//    id: 10
//  }, {
//    title: '',
//    description: '',
//    speaker: '',
//    time: {
//      start: "2016-09-03T14:00:00",
//      end: "2016-09-03T14:50:00"
//    },
//    track: 'b',
//    id: 11
//  }, {
//    title: '',
//    description: '',
//    speaker: '',
//    time: {
//      start: "2016-09-03T14:00:00",
//      end: "2016-09-03T14:50:00"
//    },
//    track: 'c',
//    id: 12
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
