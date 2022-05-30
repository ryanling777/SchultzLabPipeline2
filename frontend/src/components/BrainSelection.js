import React, {Component} from "react";
import {BrowserRouter} from 'react-router-dom'
import '../App.css'
import ImperialImage from './Imperial.png'

export default function BrainSelection() {
    return (
        <div >
            <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'20vh'}}>Please select a subject for analysis: </h2>
            <table style={{position: 'absolute', left: '340px',top: '225px'}}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Sex</th>
                    <th>Age (mo)</th>
                    <th>Genetic Identifier</th>
                    <th>TissueCyte</th>
                    <th>Histology</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>y27</td>
                    <td>F</td>
                    <td>3</td>
                    <td>5xFAD</td>
                    <td> <a href="./metrics">
                        <button className="brain-button">Quantitative Metrics</button>
                    </a>
                    </td>
                    <td>Validated</td>
                </tr>
                <tr>
                    <td>m122</td>
                    <td>M</td>
                    <td>6</td>
                    <td>Wild-Type</td>
                    <td>Not obtained</td>
                    <td> <a href="./metrics">
                        <button className="brain-button">Upload Data</button>
                    </a>
                    </td>
                </tr>
                <tr>
                    <td>m125</td>
                    <td>M</td>
                    <td>6</td>
                    <td>5xFAD</td>
                    <td> <a href="./metrics">
                        <button className="brain-button">Quantitative Metrics</button>
                    </a></td>
                    <td>Validated</td>
                </tr>
                </tbody>
            </table>

            <img src={ImperialImage} style={{position: 'absolute',left: '50px', top:'700px', height: '80px', width: '200px'}}></img>
        </div>
    );
}