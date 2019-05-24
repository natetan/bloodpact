import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './RewardsView.css';
import { DonationProgress } from './DonationProgress/DonationProgress';
import { RewardItem } from './RewardItem/RewardItem';
import Rank1 from '../../../img/rewards/rank1.png';
import Rank2 from '../../../img/rewards/rank2.png';
import Rank3 from '../../../img/rewards/rank3.png';
import Bag from '../../../img/rewards/bag.png';
import Tshirt from '../../../img/rewards/tshirt.png';
import Money from '../../../img/rewards/money.png';

export class RewardsView extends Component {
  render() {
    let progressData = [
      {
        current: 5,
        goal: 15,
        show: true,
        img: Rank1
      },
      {
        current: 15,
        goal: 25,
        show: false,
        img: Rank2
      },
      {
        current: 25,
        goal: 35,
        show: false,
        img: Rank3
      }
    ];

    let progress = progressData.map((item, index) => {
      return <DonationProgress key={index} current={item.current} goal={item.goal} show={item.show} img={item.img} />
    })

    let rewardData = [
      {
        title: 'Rank 2',
        img: Bag
      },
      {
        title: 'Rank 3',
        img: Tshirt
      },
      {
        title: 'Rank 4',
        img: Money
      }
    ]

    let rewards = rewardData.map((item, index) => {
      return (
        <Col key={index} md='4'>
          <RewardItem title={item.title} img={item.img} />
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