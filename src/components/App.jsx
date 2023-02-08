import { Statistics } from './Feedback/Statistics.js';
import { FeedbackOptions } from './Feedback/FeedbackOptions.js';
import { Section } from './Feedback/Section.js';
import React, { Component } from 'react';
export class App extends Component {
  state = {
    good: 1,
    neutral: 1,
    bad: 1,
  };

  buttonFeedback = option => {
    this.setState(prevState => {
      return { option: prevState.value + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (
      Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%'
    );
  };
  render() {
    console.log(Object.keys(this.state), 'elo');
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
            onLeaveFeedback={this.buttonFeedback}
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
