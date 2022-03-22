import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Ansoka from './routes/Ansoka';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Utbildningar from './routes/Utbildningar';
import Courses from './routes/Courses';
import Personal from './routes/Personal';
import AddCourse from './Components/AddCourse';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path='/utbildningar' element={<Utbildningar />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/addcourse' element={<AddCourse />} />
          <Route path='/personal' element={<Personal />} />
          <Route path='/ansoka' element={<Ansoka />} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
