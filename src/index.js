import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Ansoka from './routes/Ansoka';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Utbildningar from './routes/Utbildningar';
import Kurser from './routes/Kurser';
import Personal from './routes/Personal';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/utbildningar' element={<Utbildningar/>} />
      <Route path='/kurser' element={<Kurser/>} />
      <Route path='/personal' element={<Personal/>} />
      <Route path='/ansoka' element={<Ansoka/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
