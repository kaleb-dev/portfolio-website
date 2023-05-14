import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {lazy} from "react";
import { ThemeProvider } from "./Components/ThemeContext";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "../src/index.scss"
import Preloader from "./Components/Preloader/Preloader";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Resume from "./Pages/Resume/Resume"
import NotFound from "./Pages/NotFound/NotFound"
import Contact from "./Pages/Contact/Contact";



// const NotFound = lazy(() => import('./Pages/NotFound/NotFound'));
// const Resume = lazy(() => import('./Pages/Resume/Resume'));



function App() {

  return (
    <ThemeProvider>
            <AnimatedCursor
      innerSize={10}
      outerSize={40}
      outerAlpha={0.4}
      innerScale={4}
      outerScale={0}
      hasBlendMode={true}
      outerStyle={{
        border: '1.5px solid var(--cursor-color)',
        backgroundColor: '255, 0, 0, 0',
        color: 'var(--cursor-color)',
        zIndex: 99999,
        mixBlendMode: 'difference'

      }}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)',
        color: 'var(--cursor-color)',
        zIndex: 99999,
        mixBlendMode: 'difference'
      }}
              clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
      />
      <BrowserRouter>
      <Navbar homeNav="navbar navbar-expand-lg  bg-custom" />
        <Routes>
        {/* <Route element={<Preloader/>} >      */}
              <Route path="/" element={<Home />}  /> 
    {/* </Route> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
