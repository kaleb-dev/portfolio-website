import React, { useEffect, useState } from "react";
import { motion} from "framer-motion";
import {Outlet } from "react-router-dom";
import logoWhite from "../../Assets/Images/logoWhiteTransparentBg.webp";
import logoBlack from "../../Assets/Images/logoBlackTransparentBg.webp";
import "./Preloader.scss";
const items = [
  {
    id: 1,
    content: "REACT JS",
  },
  {
    id: 2,
    content: "REACT NATIVE",
  },
  {
    id: 3,
    content: "HTML",
  },
  {
    id: 4,
    content: "CSS/SCSS",
  },
  {
    id: 5,
    content: "JAVASCRIPT",
  },
];

const Preloader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <motion.div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#menu-target"
        animate={{
          top: "-100vh",
          transition: {
            duration: 1.4,
            ease: [0.17, 0.67, 0.83, 0.67],
            delay: 9,
          },
        }}
        className="preloader"
      >
        <div className="preloader__wrapper">
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1.4, ease: [0.17, 0.67, 0.83, 0.67] },
            }}
            className="preloader__left"
          >
            <img
              src={logoWhite}
              id="logoPreloader"
              className="white"
              alt="kaleb logo"
            />
            <img
              src={logoBlack}
              id="logoPreloader"
              className="black"
              alt="kaleb logo"
            />
          </motion.div>
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1.4, ease: [0.17, 0.67, 0.83, 0.67] },
            }}
            className="preloader__right"
          >
            <h1 className="preloader__text">HTML</h1>
            <h1 className="preloader__text">CSS/SCSS</h1>
            <h1 className="preloader__text">JAVASCRIPT</h1>
            <h1 className="preloader__text">TYPESCRIPT</h1>
            <h1 className="preloader__text">REACT JS</h1>
            <h1 className="preloader__text">NEXT JS</h1>
            <h1 className="preloader__text">FRAMER MOTION</h1>
          </motion.div>
        </div>
      </motion.div>
      <Outlet />
    </div>
  );
};

export default Preloader;
