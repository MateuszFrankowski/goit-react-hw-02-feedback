import { Feedback } from '../components/Feedback/feedback.js';
import React, { Component } from 'react';
export class App extends Component {
  state = {
    good: 1,
    neutral: 1,
    bad: 1,
  };

  handleGood = () => {
    this.setState(state => {
      return { good: state.good + 1 };
    });
  };

  handleNeutral = () => {
    this.setState(state => {
      return { neutral: state.neutral + 1 };
    });
  };

  handleBad = () => {
    this.setState(state => {
      return { bad: state.bad + 1 };
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
          <h1>Please leave feedback</h1>
          <button onClick={this.handleGood}>Good</button>
          <button onClick={this.handleNeutral}>Neutral</button>
          <button onClick={this.handleBad}>Bad</button>
          <Feedback
            data={this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </div>
      </div>
    );
  }
}
