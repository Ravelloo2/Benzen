import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Utbildningar' element={<App/>} />
      <Route path='/Kurser' element={<App/>} />
      <Route path='/Personal' element={<App/>} />
      <Route path='/Ansoka' element={<App/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
