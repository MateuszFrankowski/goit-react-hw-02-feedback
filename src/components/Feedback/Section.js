// import ProtoTypes from 'proto-types';
import css from './Section.module.css';
import React, { Component } from 'react';
export class Section extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className={css.profile}>
        <h2>{title}</h2>
        <ul className={css['item-list']}></ul>
      </div>
    );
  }
}
