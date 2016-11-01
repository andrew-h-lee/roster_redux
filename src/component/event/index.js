import React, { Component, PropTypes } from 'react';

export default class Event extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        {this.props.isAdded ?
          <button type="button" onClick={this.props.removeHandler}>Remove</button> :
          <button type="button" onClick={this.props.addHandler}>Add</button> }
      </div>
    );
  }
}

Event.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
