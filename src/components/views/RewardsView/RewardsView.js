import React, { Component } from 'react';
import { Progress, Row, Col } from 'reactstrap';
import './RewardsView.css';
import { DonationProgress } from './DonationProgress/DonationProgress';
import { RewardItem } from './RewardItem/RewardItem';

export class RewardsView extends Component {
  render() {
    let progressData = [
      {
        current: 5,
        goal: 15,
        show: true,
        img: 'https://cdn3.iconfinder.com/data/icons/vote-and-rewards/48/12-512.png'
      },
      {
        current: 15,
        goal: 25,
        show: false,
        img: 'https://cdn3.iconfinder.com/data/icons/vote-and-rewards/48/12-512.png'
      },
      {
        current: 25,
        goal: 35,
        show: false,
        img: 'https://cdn3.iconfinder.com/data/icons/vote-and-rewards/48/12-512.png'
      }
    ];

    let progress = progressData.map((item, index) => {
      return <DonationProgress key={index} current={item.current} goal={item.goal} show={item.show} img={item.img} />
    })

    let rewardData = [
      {
        title: 'Rank 2',
        img: 'https://cdn3.iconfinder.com/data/icons/vote-and-rewards/48/12-512.png'
      },
      {
        title: 'Rank 3',
        img: 'https://cdn3.iconfinder.com/data/icons/vote-and-rewards/48/12-512.png'
      },
      {
        title: 'Rank 4',
        img: 'https://cdn3.iconfinder.com/data/icons/vote-and-rewards/48/12-512.png'
      }
    ]

    let rewards = rewardData.map((item, index) => {
      return (
        <Col md='4'>
          <RewardItem key={index} title={item.title} img={item.img} />
        </Col>
      )
    })

    return (
      <div className='rewards-page'>
        <div className='rewards-progress'>
          <h1 className='rewards-titles'>Tiers</h1>
          {progress}
          <h1 className='rewards-titles'>Rewards</h1>
          <Row>
            {rewards}
          </Row>
        </div>
      </div>
    )
  }
}