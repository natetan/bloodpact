import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import {
  Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, ListGroup, ListGroupItem, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink
} from 'reactstrap';
import './goal-viz.css';



export class GoalViz extends React.Component {

  render() {

    var goalStats = [1, 3];

    return (
      <Plot id="goal-viz"
        data = {[
          {
            values: goalStats,
            hole: .9,
            type: 'pie',
            marker: {
              colors: ['#f9423a ', '#E5E5E5']
            },
            textinfo: 'none',
            rotation: (goalStats[0]/(goalStats[0]+goalStats[1]) * 360),
          }
        ]}   
        layout = { 
          {
            annotations: [
              {
                font: {
                  size: 44,
                  color: '#F9423A',
                  family: 'Aleo, sans-serif' 
                },
                showarrow: false,
                text: '<b>25%</b>',
                x: 0.5,
                y: 0.5,
              }
            ],
            showlegend: false,
            grid: {rows: 1, columns: 1},
            /*autosize: true,
            useResizeHandler: true,*/
            autosize: false,
            width: 200,
            height: 200,
            margin: {
              l: 0,
              r: 0,
              b: 0,
              t: 0,
              pad: 4
            },
          }     
        }
  
        //{[{responsive: true}]}
        //{staticPlot: true}
        //{displayModeBar: false}
        //{displaylogo: false}
      />
    );
  }
}
