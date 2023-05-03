import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link} from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  staggerRevealClose,
} from "../../../Assets/Animations/Animations.js";

const Hamburger = ({ state, updateMenuState }) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  const handleButtonClick = () => {
    updateMenuState(false, "Menu");
  };

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
        // width: '100%',
      });
      staggerReveal(reveal1, reveal2);
      // fadeInUp(info);
      staggerText(line1, line2, line3,);
    }
  }, [state]);

  return (
    <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
      <div
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (reveal2 = el)} className="menu-layer">
        <div
          // ref={(el) => (cityBackground = el)}
          className="menu-city-background"
        ></div>
        <div className="wrapper">
          <div className="menu-links">
            <nav>
              <ul>
                <li>
                  <Link
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line1 = el)}
                    onClick={handleButtonClick}
                    to="/"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    onClick={handleButtonClick}
                    ref={(el) => (line2 = el)}
                    to="/resume"
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    onClick={handleButtonClick}
                    ref={(el) => (line3 = el)}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* <div className='contact'>
                        <div className='email'>
                           <p>ghofranebh90@gmail.com</p>
                           <p>60 68 92 69</p>
                        </div>
                        <div className='social-media'>
                           <ul>
                              <li>
                                 <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://www.linkedin.com/in/ghofranebenhmaid/'
                                 >
                                    <FaLinkedin />
                                 </a>
                              </li>
                              <li>
                                 <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://github.com/ghofranebenhmaid'
                                 >
                                    <FaGithub />
                                 </a>
                              </li>
                              <li>
                                 <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://www.instagram.com/ghofranbenhmaid/'
                                 >
                                    <FaInstagram />
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
