// import ProtoTypes from 'proto-types';
import css from './FeedbackOptions.module.css';
import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    console.log('options', options, onLeaveFeedback);
    return (
      <div className={css.container}>
        {options.map(option => (
          <button
            className={css.btn}
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            <span>{option}</span>
          </button>
        ))}
      </div>
    );
  }
}
