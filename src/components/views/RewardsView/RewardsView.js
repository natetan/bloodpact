import React, { Component } from 'react';
import { Progress, Row, Col } from 'reactstrap';
import './RewardsView.css';
import {DonationProgress} from './DonationProgress/DonationProgress';

export class RewardsView extends Component {
  render() {
    let data = [
      {
        current: 5,
        goal: 15,
        show: true,
        img: 'https://static.thenounproject.com/png/594650-200.png'
      },
      {
        current: 15,
        goal: 25,
        show: false,
        img: 'https://static.thenounproject.com/png/594650-200.png'
      },
      {
        current: 25,
        goal: 35,
        show: false,
        img: 'https://static.thenounproject.com/png/594650-200.png'
      }
    ];

    let progress = data.map((item, index) => {
      return <DonationProgress current={item.current} goal={item.goal} show={item.show} img={item.img} />
    })
    return (
      <div className='rewards-page'>
        <div className='rewards-progress'>
        <h1 className='rewards-tiers'>Tiers</h1>
          {progress}
        </div>
      </div>
    )
  }
}