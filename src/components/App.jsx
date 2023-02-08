import { Statistics } from './Feedback/Statistics.js';
import { FeedbackOptions } from './Feedback/FeedbackOptions.js';
import { Section } from './Feedback/Section.js';
import React, { Component } from 'react';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  buttonFeedback = option => {
    this.setState(prevState => {
      console.log('option', [option], 'prevState[option]', prevState[option]);
      return { [option]: prevState[option] + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const value = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    const fedbackPercentage = !!value ? value : 0;
    return fedbackPercentage + '%';
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <Section title={'Please leave feedback'} />
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={option => this.buttonFeedback(option)}
          />
          <Statistics
            data={this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </div>
      </div>
    );
  }
}
