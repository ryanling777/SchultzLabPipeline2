import React, {Component} from "react";
import {BrowserRouter} from 'react-router-dom'
import '../App.css'

export default function Login(){
    return (
    <div >
        
        <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'20vh'}}>Alzheimer's Disease Pipeline</h2>
        <h4 style={{display: 'flex', justifyContent: 'center', height:'10vh'}}>Please Input Your Imperial College Credentials</h4>
        <p>
            <input type="text" placeholder='Username'/>
        </p>
        <p>
            <input type="text" placeholder='Password'/>
        </p>

        <p>
        <a href="./exorin">
                <button className="menu-button">Login</button>
        </a>

        </p>

    </div>);
}