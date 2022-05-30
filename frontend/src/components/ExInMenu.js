/* Ex-vivo or In-vivo*/

import React, {Component} from "react";
import {BrowserRouter} from 'react-router-dom'
import '../App.css'
import ImperialImage from './Imperial.png'

export default function ExInMenu(){
    return (
    <div >
        
        <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'20vh'}}>Please select a datasource to process </h2>
        <a href="./brainselection">
            <button className="menu-button">Ex-Vivo</button>
        </a>
        
    
        <div class="space">
        </div>

        <a>
            <button className="menu-button">In-Vivo</button>
        </a>

        <img src={ImperialImage} style={{position: 'absolute',left: '50px', top:'700px', height: '80px', width: '200px'}}></img>
        
    </div>);
}