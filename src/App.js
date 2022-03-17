import './css/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home'
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">

  
    <Home/>
    <Outlet />

    </div>
  );
}

export default App;
