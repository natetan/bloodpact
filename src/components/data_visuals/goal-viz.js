import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import {
  Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, ListGroup, ListGroupItem, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink
} from 'reactstrap';
import './goal-viz.css';
//import { VerticalNav } from '../navs/VerticalNav';



export class GoalViz extends React.Component {
  render() {
    return (
      <Plot id="goal-viz"
        data = {[
          {
            values: [25, 75],
            //labels: ['donated', 'remaining' ],
            //domain: {column: 0},
            //name: 'GHG Emissions',
            //hoverinfo: 'label+percent',
            hole: .8,
            type: 'pie',
            marker: {
              colors: ['#f9423a ', '#E5E5E5']
            },
          }
        ]}   
        layout = { 
          {
            height: 300,
            width: 300,
            showlegend: false,
            grid: {rows: 1, columns: 1}
          }
        }
      />
    );
  }
}
