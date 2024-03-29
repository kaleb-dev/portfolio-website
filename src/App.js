import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { lazy } from "react";
import { ThemeProvider } from "./Components/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/index.scss";
import Preloader from "./Components/Preloader/Preloader";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Resume from "./Pages/Resume/Resume";
import NotFound from "./Pages/NotFound/NotFound";
import Contact from "./Pages/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
import Notification from "./Components/Notification";

// const NotFound = lazy(() => import('./Pages/NotFound/NotFound'));
// const Resume = lazy(() => import('./Pages/Resume/Resume'));

function App() {
  return (
    <ThemeProvider>
      <Cursor />
      <BrowserRouter>
        <Notification />
        <Navbar homeNav="navbar navbar-expand-lg  bg-custom" />
        <Routes>
          {/* <Route element={<Preloader/>} >      */}
          <Route path="/" element={<Home />} />
          {/* </Route> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
