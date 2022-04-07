import React, {useState} from 'react'
//import Welcome from './WelcomePage'
import Metrics from './components/Metrics';
import ExInMenu from './components/ExInMenu';
import Login from './components/Login';
import MainMenu from './components/MainMenu';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar  from './components/Navbar';

function App() {


  return (
    <div className='App'>
    
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/exorin' element={<ExInMenu/>}/>
          <Route path='/mainmenu' element={<MainMenu/>}/>
          <Route path='/metrics' element={<Metrics/>}/>
        </Routes>
    </Router>
    </div>
    
  )  



}

export default App;

