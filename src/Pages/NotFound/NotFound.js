import React from 'react'
import {Outlet } from "react-router-dom";
import './NotFound.scss'
import Footer from '../../Components/Footer/Footer';

function NotFound() {
  return (
    <div id="notFound">
      <div className='text'>
        <h1>Page Not Found</h1>
        <p>The page you are looking for doesn't exist or has been moved. Please head <a className="link" href="/">back</a>.</p>
        <Outlet/>
      </div>
      <h6
        style={{
          position: "fixed",
          left: "50%",
          transform: "translate(-50%, 0)",
          bottom: 0
        }}
      >
        NOT FOUND
      </h6>
    </div>
  )
}

export default NotFound