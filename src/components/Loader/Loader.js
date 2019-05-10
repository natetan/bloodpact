import React, { Component } from 'react';
import { Container, Spinner } from 'reactstrap';

export class Loader extends Component {
  render() {
    let data = [];
    for (let i = 0; i < this.props.number; i++) {
      data.push(i);
    }
    console.log(data);
    let spinners = data.map((n) => {
      return <Spinner key={n} type='grow' color='danger' />
    })
    return (
      <Container className='loaders'>
        {spinners}
      </Container>
    )
  }
}