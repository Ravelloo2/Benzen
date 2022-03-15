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
      <Route path='/utbildningar' element={<App/>} />
      <Route path='/kurser' element={<App/>} />
      <Route path='/personal' element={<App/>} />
      <Route path='/ansoka' element={<App/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
