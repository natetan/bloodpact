import React, { Component } from 'react';
import {
  Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, ListGroup, ListGroupItem, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink
} from 'reactstrap';
import './DashboardView.css';
import { VerticalNav } from '../navs/VerticalNav';

export class DashboardView extends Component {
  constructor(props) {
    super(props);
  }

  switchTabs = (event) => {
    this.props.switchTabs(event.target.id);
  }

  render() {
    let contentToShow;
    switch (this.props.tab) {
      case 1: // dash
        contentToShow = <div></div>;
        break;
      case 2: // map
        contentToShow = <div></div>;
        break;
      case 3: // groups
        contentToShow = <div></div>;
        break;
      case 4: // rewards
        contentToShow = <div></div>;
        break;
      default: // faq
        contentToShow = <div></div>;
        break;
    }

    return (
      <div className='dashboard'>
        <Row>
          <Col md='3' className='dash-left-pane'>
            <Container>
              <Nav pills vertical className='dash-left-pane-list'>
                <NavItem>
                  <NavLink id='1' className={this.props.tab == 1 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}>Personal Statistics</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id='2' className={this.props.tab == 2 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}>Find Locations</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id='3' className={this.props.tab == 3 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}>Groups</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id='4' className={this.props.tab == 4 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}>Rewards</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id='5' className={this.props.tab == 5 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}>FAQ</NavLink>
                </NavItem>
              </Nav>
            </Container>
          </Col>
          <Col md='9'>

            <React.Fragment>
              <main role="main">

                <section className="jumbotron text-center">
                  <div className="container">
                    <h1 className="jumbotron-heading">Hello, {this.props.displayName}</h1>
                    <p className="lead text-muted">Welcome to your dashboard.</p>
                    <p>
                      <a href="#" className="btn btn-danger my-2">Take a Tour</a>
                    </p>
                    <Row>
                      <Col md='4'>
                        <div>
                          <h1 className="jumbotron-heading">Your Donations</h1>
                          <h3 className="jumbotron-heading sub-text">3 Pints</h3>
                        </div>
                      </Col>
                      <Col md='4'>
                        <div>
                          <h1 className="jumbotron-heading">Your Contribution</h1>
                          <h3 className="jumbotron-heading sub-text">9 lives saved</h3>
                        </div>
                      </Col>
                      <Col md='4'>
                        <div>
                          <h1 className="jumbotron-heading">Your Goal</h1>
                          <h3 className="jumbotron-heading sub-text">20 Pints</h3>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </section>
                <Container>
                  <Row>
                    <Col md='4'>
                      <Card>
                        <CardImg top width="100%" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a7cca6899%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a7cca6899%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.15%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap" />
                        <CardBody>
                          <CardTitle>Card title</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                          <Button>Button</Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md='4'>
                      <Card>
                        <CardImg top width="100%" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a7cca6899%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a7cca6899%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.15%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap" />
                        <CardBody>
                          <CardTitle>Card title</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                          <Button>Button</Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md='4'>
                      <Card>
                        <CardImg top width="100%" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a7cca6899%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a7cca6899%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.15%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap" />
                        <CardBody>
                          <CardTitle>Card title</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                          <Button>Button</Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Container>


              </main>
            </React.Fragment>

          </Col>
        </Row>
      </div>
    )
  }
}