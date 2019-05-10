import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import {
  Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, ListGroup, ListGroupItem, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink
} from 'reactstrap';
import './main-viz.css';
//import { VerticalNav } from '../navs/VerticalNav';



export class MainViz extends React.Component {
  render() {
    return (
      <Plot id="main-viz"
        data={[
          {
            x: [" ", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
            y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            type: 'scatter',
            mode: 'markers',
            marker: {color: '#0E1A1F', size: 1},
            //text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
            //textfont : { family:'Times New Roman'},
            showlegend: false,

          },
          {
            x: ["JAN", "APR", "SEP"],
            y: [25, 10, 31],
            type: 'scatter',
            mode: 'markers',
            name: 'Your Donations',
            marker: {color: 'red', size: 10},
            //text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
            //textfont : { family:'Times New Roman'},
          },
          {
            type: 'scatter', 
            mode: 'markers', 
            marker: {color: 'white', size: 10}, 
            x: ["NOV"], 
            y: [23],
            name: 'Next Eligiblity'
          },
        ]}
        layout = { 
          {
            xaxis: { 
              range: [ 0, 12 ],
              color: '#C2C5C7',
              showgrid: false,
              autosize: false,
              width: 8000,
              height: 500,
            },
            yaxis: {
              range: [0, 33],
              color: '#C2C5C7',
              showgrid: true,
              gridcolor: '#4B5357',
              gridwidth: 1,
              dtick: 10,
            },
            legend: {
              x: -0.07,
              y: 1.2,
              traceorder: 'normal',
              font: {
                family: 'Aleo', 
                size: 18,
                color: '#C2C5C7',
              },
              "orientation": "h",
            },
            plot_bgcolor:"#0E1A1F",
            paper_bgcolor:"#0E1A1F",
            font: {
              size: 18, 
              family: 'Aleo, sans-serif' 
            }
          } 
        }
      />
    );
  }
}
