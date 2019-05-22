import React, { Component } from 'react';
import {
  Row, Col, Button, InputGroup, Input, Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import './SearchView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Loader } from '../../Loader/Loader';

export class SearchView extends Component {

  handleInput = (e) => {
    this.props.handleZipcodeInput(e.target.value);
  }

  handleSubmit = (e) => {
    // If enter key was pressed
    if (e.keyCode === 13) {
      this.props.handleSearch(e.target.value);
    }
  }

  render() {
    let drives;
    if (!this.props.drives) {
      drives = '';
    } else {
      drives = this.props.drives.map((item, index) => {
        return (
            <Col className='searchview-card' key={index} sm='12' md='6' lg='5'>
              <Card className='mb-4'>
                <CardHeader tag="h3">{item.name}</CardHeader>
                <CardBody>
                  <CardTitle>{item.address}</CardTitle>
                  <CardText>{item.date}</CardText>
                  <CardText>{`Donation type: ${item.donationType}`}</CardText>
                  <Button color='danger'>Go somewhere</Button>
                </CardBody>
                <CardFooter className="text-muted">{item.distance}</CardFooter>
              </Card>
            </Col>
        )
      });
    }
    return (
      <React.Fragment>
        <div className='search-box'>
          <Row>
            <Col md='10'>
              <div id="custom-search-input">
                <InputGroup>
                  <Input onInput={this.handleInput} onKeyUp={this.handleSubmit} type="number" className="search-query" placeholder="Enter zipcode" />
                  <Button className='search-icon'>
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </InputGroup>
                {this.props.loading && <Loader number={5} />}
              </div>
            </Col>
          </Row>
        </div>
        <div className='drives-display'>
          <Row>
            {drives}
          </Row>
        </div>
      </React.Fragment>
    )
  }
}