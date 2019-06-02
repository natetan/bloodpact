import React, { Component } from 'react';
import FaqItem from './FaqItem/FaqItem';
import faq from '../../../resources/strings/Faq.json';
import './FaqView.css';

export class FaqView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = faq.map((item, index) => {
      return <FaqItem
        key={index}
        question={item.question}
        answer={item.answer}
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