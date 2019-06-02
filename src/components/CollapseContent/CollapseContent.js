import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import './CollapseContent.css';

export default class CollapseContent extends Component {
  render() {
    return (
      <Collapse isOpen={this.props.open}>
        {this.props.children}
      </Collapse>
    )
  }
}