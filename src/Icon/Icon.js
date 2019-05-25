import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icon.scss';

export default class Icon extends Component {
  render() {
    return (
      <span className='icon'>
        <FontAwesomeIcon icon={this.props.icon} size={this.props.size} color={this.props.color} />
      </span>
    )
  }
}