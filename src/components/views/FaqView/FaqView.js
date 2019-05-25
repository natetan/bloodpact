import React, { Component } from 'react';
import FaqItem from './FaqItem/FaqItem';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import faq from '../../../resources/strings/Faq.json';
import './FaqView.css';

export class FaqView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: {
        
      }
    };
  }

  handleCollapse = (id) => {
    this.setState((currentState) => {
      let collapse = currentState.collapse;
      collapse[id] = !collapse[id];
      return collapse;
    })
  }

  render() {
    let items = faq.map((item, index) => {
      return <FaqItem
        key={index}
        id={index}
        handleCollapse={this.handleCollapse}
        open={this.state.collapse[index]}
        question={item.question}
        answer={item.answer}
        icon={this.state.collapse[index] ? faAngleUp : faAngleDown}
        size='lg'
        color='white' />
    });
    return (
      <div className='faq-view'>
        <h1>Frequently Asked Questions</h1>
        <div className='questions'>
          {items}
        </div>
      </div>
    )
  }
}