import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Ansoka from './routes/Ansoka';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Utbildningar from './routes/Utbildningar';
import Kurser from './routes/Courses';
import Personal from './routes/Personal';
import AddPersonal from './Components/personal/create-personal';
import UpdatePersonal from './Components/personal/update-personal';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SkapaKurs from './Components/NewCourseComponents/CreateCourse'
import Kontakta from './routes/Kontakta';
import Login from './Components/Login';
import CreateEducation from './Components/EducationComponents/CreateEducation';
import UpdateEducation from './Components/EducationComponents/UpdateEducation';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path='/utbildningar' element={<Utbildningar />} />
          <Route path='/skapaUtbildning' element={<CreateEducation />} />
          <Route path='/Kurser' element={<Kurser />} />
          <Route path="/skapa-kurs" element={<SkapaKurs/>}/>
          <Route path='/personal' element={<Personal />} />
          <Route path="/AddPersonal" element={<AddPersonal />}/>
          <Route path='/UppdateraPersonal' element={<UpdatePersonal />}/>
          <Route path='/ansoka' element={<Ansoka />} />
          <Route path='/kontakta' element={<Kontakta />} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
 
  </React.StrictMode>,
  document.getElementById('root')
);
