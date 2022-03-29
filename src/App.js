import './css/App.css';
import React from 'react';
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
