import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

import './BloodPactHeader.css';

export class BloodPactHeader extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className='display-3'>this is #bloodpact</h1>
          <p className='lead'>Save lives and connect with others in our blood-donating community.</p>
          <hr className='my-2' />
          <p className='lead'>Did you know that one pint of whole blood can save up to 3 lives?</p>
          <p className='lead'>
            <Button color='danger'>Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
};