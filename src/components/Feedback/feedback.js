// import ProtoTypes from 'proto-types';
import css from './feedback.module.css';
import React, { Component } from 'react';
export class Feedback extends Component {
  render() {
    const {
      data: { good, neutral, bad },
    } = this.props;
    const { positivePercentage } = this.props;
    const { total } = this.props;
    return (
      <div className={css.profile}>
        <h2>Statistic</h2>
        <h3>Good:{good}</h3>
        <h3>Neutral:{neutral}</h3>
        <h3>Bad:{bad}</h3>
        <h3>Total:{total}</h3>
        <h3>positive feedback:{positivePercentage}</h3>
      </div>
    );
  }
}
