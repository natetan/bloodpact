import React, { Component } from 'react';
import Icon from '../../../Icon/Icon';
import CollapseContent from '../../../CollapseContent/CollapseContent';
import './FaqItem.css';

export default class FaqItem extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false}
  }
  handleCollapse = (e) => {
    this.props.handleCollapse(e.target.id);
  }
  render() {
    return (
      <div className='faq-item' onClick={this.handleCollapse} id={this.props.id}>
        <div className='question' id={this.props.id}>
          <h3 className='text' id={this.props.id}>{this.props.question}</h3>
          <Icon icon={this.props.icon} size={this.props.size} color={this.props.color} id={this.props.id} />
        </div>
        <CollapseContent open={this.props.open}>
          <div id={this.props.id}>
            <p id={this.props.id}>
              {this.props.answer}
            </p>
          </div>
        </CollapseContent>
        <hr />
      </div>
    )
  }
}