import React, { Component, bgColors } from "react";
import { Container, Row, Col, NavLink } from "reactstrap";
import "./BloodPactFooter.css";
export class BloodPactFooter extends Component {
	render() {
		return (
			<Container>
				<footer>
					{/* className="pt-4 my-md-5 pt-md-5 border-top" */}
					<small className="d-block mb-3 text-muted">© BloodPact 2019</small>
					{/* <Row>
            <Col md='3'>
              <img className='mb-2' src='https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg' alt='logo' width='24' height='24' />
              <small className='d-block mb-3 text-muted'>© BloodPact 2019</small>
            </Col>
            <Col md='3'>
              <h5>Features</h5>
              <ul className='list-unstyled text-small'>
                <li><a target='_blank' className='text-muted' href='#'>Cool stuff</a></li>
                <li><a target='_blank' className='text-muted' href='#'>Random feature</a></li>
                <li><a target='_blank' className='text-muted' href='#'>Team feature</a></li>
                <li><a target='_blank' className='text-muted' href='#'>Stuff for developers</a></li>
                <li><a target='_blank' className='text-muted' href='#'>Another one</a></li>
                <li><a target='_blank' className='text-muted' href='#'>Last time</a></li>
              </ul>
            </Col>
            <Col md='3'>
              <h5>Resources</h5>
              <ul className='list-unstyled text-small'>
                <li><a target='_blank' className='text-muted' href='#'>Resource</a></li>
                <li><a target='_blank' className='text-muted' href='#'>Resource name</a></li>
                <li><a target='_blank' className='text-muted' href='#'>Another resource</a></li>
                <li><a target='_blank' className='text-muted' href='#'>Final resource</a></li>
              </ul>
            </Col>
            <Col md='3'>
              <h5>About</h5>
              <ul className='list-unstyled text-small'>
                <li><a target='_blank' className='text-muted' href='https://yulongtan.github.io/infocapstone2019/'>Team</a></li>
                <li><a target='_blank' className='text-muted' href='#'>Locations</a></li>
                <li><a target='_blank' className='text-muted' href='#'>Privacy</a></li>
                <li><a target='_blank' className='text-muted' href='#'>Terms</a></li>
              </ul>
            </Col>
          </Row> */}
				</footer>
			</Container>
		);
	}
}
