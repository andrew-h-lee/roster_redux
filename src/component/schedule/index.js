import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Event from '../event';
import * as scheduleAction from './action/schedule-action';

export class Schedule extends Component {
  render() {
    return (
      <ol>
        {this.props.events.map((event, i, events) => {
          if (this.props.personal) {
            if (event.isAdded) {
              return <li key={i}><Event {...event} addHandler={() => this.props.onEventClickAdd(event.id, events)} removeHandler={() => this.props.onEventClickRemove(event.id)} /></li>
            }
          } else if (event.track === this.props.track) {
            return <li key={i}><Event {...event} addHandler={() => this.props.onEventClickAdd(event.id, events)} removeHandler={() => this.props.onEventClickRemove(event.id)} /></li>
          }

        }) }
      </ol>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.scheduleReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onEventClickAdd: function (id, events) {
      const newEvent = events[id];
      const addedEvents = events.filter((event) => event.isAdded);
      const clash = addedEvents.some((event) => {
        if (event.time.start <= newEvent.time.end && event.time.end > newEvent.time.start) {
          alert(`This event conflicts with ${event.title}.`);
          return true;
        }
      });
      if (!clash) {
        dispatch(scheduleAction.add(id));
      }
    },
    onEventClickRemove: function (event) {
      dispatch(scheduleAction.remove(event));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
