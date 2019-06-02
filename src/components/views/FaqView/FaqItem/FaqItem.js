import React, { Component } from 'react';
import Icon from '../../../Icon/Icon';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import CollapseContent from '../../../CollapseContent/CollapseContent';
import './FaqItem.css';

export default class FaqItem extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false}
  }

  handleCollapse = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div className='faq-item' onClick={this.handleCollapse}>
        <div className='question'>
          <h3 className='text'>{this.props.question}</h3>
          <Icon icon={this.state.open ? faAngleUp : faAngleDown} size={this.props.size} color={this.props.color} />
        </div>
        <CollapseContent open={this.state.open}>
          <div>
            <p>
              {this.props.answer}
            </p>
          </div>
        </CollapseContent>
        <hr />
      </div>
    )
  }
}