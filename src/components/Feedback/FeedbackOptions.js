// import ProtoTypes from 'proto-types';
import css from './FeedbackOptions.module.css';
import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    console.log('options', options, onLeaveFeedback);
    return (
      <div>
        {options.map(option => (
          <button key={option} onClick={temp => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  }
}
