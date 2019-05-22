import React, { Component } from 'react';
import {
  Card, CardImg, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import './RewardItem.css';

export class RewardItem extends Component {
  render() {
    return (
      <div className='reward-item'>
        <Card>
          <CardHeader className='text-center' tag='h4'>{this.props.title}</CardHeader>
          <CardBody>
            <CardImg className='reward-item-img text-center' src={this.props.img}/>
          </CardBody>
        </Card>
      </div>
    )
  }
}