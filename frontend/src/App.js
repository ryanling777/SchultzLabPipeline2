import React, {useState} from 'react'
//import Welcome from './WelcomePage'
import Metrics from './components/Metrics';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar  from './components/Navbar';

function App() {


  return (
    <div className='App'>
    
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/metrics' element={<Metrics/>}/>
        </Routes>
    </Router>
    </div>
    
  )  



}

export default App;

