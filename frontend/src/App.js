import React, {useState} from 'react'
//import Welcome from './WelcomePage'
import Metrics from './components/Metrics';
import ExInMenu from './components/ExInMenu';
import Login from './components/Login';
import MainMenu from './components/MainMenu';
import Registration from './components/Registration';
import Validation from './components/Validation';
import Stitching from './components/Stitching';
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
          <Route path='/validation' element={<Validation/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/stitching' element={<Stitching/>}/>
        </Routes>
    </Router>
    </div>
    
  )  



}

export default App;

