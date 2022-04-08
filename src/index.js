import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import Ansoka from "./routes/Ansoka";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Utbildningar from "./routes/Utbildningar";
import Kurser from "./routes/Courses";
import SkapaKurs from "./Components/NewCourseComponents/CreateCourse";
import Personal from "./routes/Personal";
import AddPersonal from "./Components/personal/create-personal";
import UpdatePersonal from "./Components/personal/update-personal";
import NotFound from "./Components/NotFound";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Kontakta from "./routes/Kontakta";
import Login from "./Components/Login";
import CreateEducation from "./Components/EducationComponents/CreateEducation";
import { AuthProvider } from "./Components/auth";
import RequireAuth from "./Components/RequireAuth";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/utbildningar" element={<Utbildningar />} />
          <Route path="/skapaUtbildning" element={<RequireAuth><CreateEducation /> </RequireAuth>} />
          <Route path="/Kurser" element={<Kurser />} />
          <Route path="/skapa-kurs" element={<RequireAuth><SkapaKurs /> </RequireAuth>} />
          <Route path="/personal" element={<RequireAuth> <Personal /> </RequireAuth>} />
          <Route path="/AddPersonal" element={<AddPersonal />} />
          <Route path="/UppdateraPersonal" element={<UpdatePersonal />} />
          <Route path="/ansoka" element={<Ansoka />} />
          <Route path="/kontakta" element={<Kontakta />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </AuthProvider>
        <Footer />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
