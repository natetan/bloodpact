import React, { Component } from "react";
import "./GroupsPlot.css";
import Plot from 'react-plotly.js';

export class GroupsPlot extends Component {

    render() {
        let goalStats = [1, 3];
        return (
        <Plot id="goal-viz"
            data={[
            {
                values: goalStats,
                hole: .9,
                type: 'pie',
                marker: {
                colors: ['#f9423a ', '#E5E5E5']
                },
                textinfo: 'none',
                rotation: (goalStats[0] / (goalStats[0] + goalStats[1]) * 360),
            }
            ]}
            layout={
            {
                annotations: [
                {
                    font: {
                    size: 52,
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
                grid: { rows: 1, columns: 1 },
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
        />
        );
    }
    }