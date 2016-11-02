import React, { Component, PropTypes } from 'react';

export default class Event extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.speaker}</p>
        <p>{this.props.description}</p>
        {this.props.isAdded ?
          <button className="button-remove" type="button" onClick={this.props.removeHandler}>Remove</button> :
          <button className="button-add" type="button" onClick={this.props.addHandler}>Add</button> }
      </div>
    );
  }
}

Event.propTypes = {
    title: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
