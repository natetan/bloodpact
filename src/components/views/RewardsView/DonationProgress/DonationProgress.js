import React, { Component, Fragment } from 'react';
import { Progress, Row, Col } from 'reactstrap';
import './DonationProgress.css';

export class DonationProgress extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col md={1}>
            <div className='reward-icon-container'>
              <img className='reward-icon' src={this.props.img} alt='reward' />
            </div>
          </Col>

          <Col md={11}>
            <div className='progress-container'>
              <span className="progress-text progress-text-current">{`${this.props.current} pints`}</span>
              {this.props.show && <span className="progress-text progress-text-goal">{`${this.props.goal} pints`}</span>}
              {this.props.show && <Progress color='danger' value={this.props.current * 1.0 / this.props.goal * 100} />}
            </div>
          </Col>
        </Row>
      </Fragment>
    )
  }
}