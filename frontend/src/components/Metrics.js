import React, {Component} from "react";
import {BrowserRouter} from 'react-router-dom'
import MetricsImage from './MetricsImage.png'
import ImperialImage from './Imperial.png'

export default function Metrics(){
    return (
        <div>
            <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'20vh', position: 'absolute', left: '50px', top: '50px'}}>Quantitative Metrics Obtained:</h2>
            <img src={MetricsImage} style={{position: 'absolute', left: '50px', top: '200px'}}></img>
            <p style={{position: 'absolute', left: '100px', top: '575px', textAlign: 'left'}}>
                <b>y27</b><br></br>
                <b>Age (mo): </b> 3<br></br>
                <b>Sex: </b> F<br></br>
                <b>Genetic Identifier: </b> 5xFAD
            </p>
            <table style={{position: 'absolute', left: '400px', top: '235px'}}>
                <thead>
                    <tr>
                        <th>
                            Hippocampal region
                        </th>
                        <th>Plaques (/um^3)</th>
                        <th>Plaque Volume</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>VAL</td>
                        <td>4.6</td>
                        <td>0.76</td>
                    </tr>
                    <tr>
                        <td>VM</td>
                        <td>2.9</td>
                        <td>0.53</td>
                    </tr>
                    <tr>
                        <td>VPL</td>
                        <td>3.1</td>
                        <td>0.23</td>
                    </tr>
                    <tr>
                        <td>VPLpc</td>
                        <td>2.4</td>
                        <td>0.04</td>
                    </tr>
                    <tr>
                        <td>VPM</td>
                        <td>1.2</td>
                        <td>0.51</td>
                    </tr>
                    <tr>
                        <td>VPMpc</td>
                        <td>3.6</td>
                        <td>0.43</td>
                    </tr>
                    <tr>
                        <td>SPFm</td>
                        <td>2.4</td>
                        <td>0.49</td>
                    </tr>
                    <tr>
                        <td>SPFp</td>
                        <td>1.2</td>
                        <td>0.04</td>
                    </tr>
                    <tr>
                        <td>SPA</td>
                        <td>3.6</td>
                        <td>0.22</td>
                    </tr>
                    <tr>
                        <td>PP</td>
                        <td>7.2</td>
                        <td>0.46</td>
                    </tr>
                </tbody>
            </table>

            <img src={ImperialImage} style={{position: 'absolute',left: '50px', top:'700px', height: '80px', width: '200px'}}></img>
        </div>
    );

}