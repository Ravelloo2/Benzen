import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Ansoka from './routes/Ansoka';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Utbildningar from './routes/Utbildningar';
import Kurser from './routes/Courses';
import Personal from './routes/Personal';
// import AddCourse2 from './CourseComponents/AddCourse2';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SkapaKurs from './Components/NewCourseComponents/CreateCourse'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path='/utbildningar' element={<Utbildningar />} />
          <Route path='/Kurser' element={<Kurser />} />
          <Route path="/skapa-kurs" element={<SkapaKurs/>}/>
          <Route path='/personal' element={<Personal />} />
          <Route path='/ansoka' element={<Ansoka />} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);
