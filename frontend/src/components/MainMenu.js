/*Choose between different modules*/

import React, {Component} from "react";
import {BrowserRouter} from 'react-router-dom'
import '../App.css'

export default function MainMenu(){
    return (
    <div >
        <p>
        <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'20vh'}}>Please select an operation to perform </h2>
        <a href="./stitching">
                <button className="menu-button">Stitching</button>
        </a>

        <div class="space">
        </div>

        <a href="./metrics">
            <button className="menu-button">Quantitative Metrics</button>
        </a>

        </p>
        <p>
        <a href="./validation">
            <button className="menu-button">Validation</button>
        </a>
        
        <div class="space">
        </div>

        <a href="./registration">
            <button className="menu-button">Registration</button>
        </a>
        </p>
    </div>);
}