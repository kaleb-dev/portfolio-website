import React, { useState} from "react";
import { useTheme } from "../ThemeContext";
import Hamburger from "./Hamburger/Hamburger";
import {Outlet } from "react-router-dom";
import "./Navbar.scss";
import logoVidWhite from "../../Assets/Images/logoVideoWhite.webm";
import logoVidBlack from "../../Assets/Images/logoVideoBlack.webm";
import logoVidWhite1 from "../../Assets/Images/logoVideoWhite.mp4";
import logoVidBlack1 from "../../Assets/Images/logoVideoBlack.mp4";

import "./Navbar.scss";

const Switcher = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="switcher">
      <input
        type="checkbox"
        id="darkmode-toggle"
        onClick={handleClick}
        checked={theme === "dark"}
      />
      <label for="darkmode-toggle">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="sun"
        >
          <path d="M12 5.53125C11.7265 5.53125 11.4642 5.4226 11.2708 5.2292C11.0774 5.03581 10.9688 4.7735 10.9688 4.5V2.25C10.9688 1.9765 11.0774 1.71419 11.2708 1.5208C11.4642 1.3274 11.7265 1.21875 12 1.21875C12.2735 1.21875 12.5358 1.3274 12.7292 1.5208C12.9226 1.71419 13.0312 1.9765 13.0312 2.25V4.5C13.0312 4.7735 12.9226 5.03581 12.7292 5.2292C12.5358 5.4226 12.2735 5.53125 12 5.53125Z" />
          <path d="M12 22.7812C11.7265 22.7812 11.4642 22.6726 11.2708 22.4792C11.0774 22.2858 10.9688 22.0235 10.9688 21.75V19.5C10.9688 19.2265 11.0774 18.9642 11.2708 18.7708C11.4642 18.5774 11.7265 18.4688 12 18.4688C12.2735 18.4688 12.5358 18.5774 12.7292 18.7708C12.9226 18.9642 13.0312 19.2265 13.0312 19.5V21.75C13.0312 22.0235 12.9226 22.2858 12.7292 22.4792C12.5358 22.6726 12.2735 22.7812 12 22.7812Z" />
          <path d="M17.3035 7.7278C17.0995 7.72777 16.9002 7.66729 16.7307 7.55401C16.5611 7.44072 16.429 7.27971 16.3509 7.09133C16.2728 6.90294 16.2524 6.69565 16.2921 6.49564C16.3318 6.29563 16.43 6.11189 16.5741 5.96764L18.165 4.3767C18.3593 4.18751 18.6202 4.08243 18.8914 4.08422C19.1625 4.08601 19.422 4.19451 19.6138 4.38624C19.8055 4.57798 19.914 4.83751 19.9158 5.10866C19.9176 5.3798 19.8125 5.64074 19.6233 5.83499L18.0324 7.42592C17.9367 7.52176 17.8231 7.59777 17.698 7.64957C17.5729 7.70138 17.4389 7.72796 17.3035 7.7278Z" />
          <path d="M5.10562 19.9256C4.90165 19.9256 4.70226 19.8651 4.53268 19.7518C4.3631 19.6384 4.23095 19.4773 4.15292 19.2889C4.0749 19.1004 4.05452 18.893 4.09435 18.693C4.13418 18.4929 4.23245 18.3092 4.37671 18.165L5.96765 16.5741C6.06294 16.4762 6.17671 16.3983 6.30236 16.3448C6.42801 16.2913 6.56304 16.2633 6.6996 16.2624C6.83617 16.2615 6.97155 16.2877 7.0979 16.3396C7.22424 16.3914 7.33903 16.4678 7.4356 16.5644C7.53217 16.661 7.60859 16.7758 7.66044 16.9021C7.71228 17.0285 7.73852 17.1638 7.73762 17.3004C7.73672 17.437 7.70871 17.572 7.6552 17.6976C7.60169 17.8233 7.52376 17.9371 7.42593 18.0324L5.83499 19.6233C5.73933 19.7193 5.62565 19.7954 5.50048 19.8472C5.37531 19.8991 5.24112 19.9258 5.10562 19.9256Z" />
          <path d="M21.75 13.0312H19.5C19.2265 13.0312 18.9642 12.9226 18.7708 12.7292C18.5774 12.5358 18.4688 12.2735 18.4688 12C18.4688 11.7265 18.5774 11.4642 18.7708 11.2708C18.9642 11.0774 19.2265 10.9688 19.5 10.9688H21.75C22.0235 10.9688 22.2858 11.0774 22.4792 11.2708C22.6726 11.4642 22.7812 11.7265 22.7812 12C22.7812 12.2735 22.6726 12.5358 22.4792 12.7292C22.2858 12.9226 22.0235 13.0312 21.75 13.0312Z" />
          <path d="M4.5 13.0312H2.25C1.9765 13.0312 1.71419 12.9226 1.5208 12.7292C1.3274 12.5358 1.21875 12.2735 1.21875 12C1.21875 11.7265 1.3274 11.4642 1.5208 11.2708C1.71419 11.0774 1.9765 10.9688 2.25 10.9688H4.5C4.7735 10.9688 5.03581 11.0774 5.2292 11.2708C5.4226 11.4642 5.53125 11.7265 5.53125 12C5.53125 12.2735 5.4226 12.5358 5.2292 12.7292C5.03581 12.9226 4.7735 13.0312 4.5 13.0312Z" />
          <path d="M18.8944 19.9256C18.7589 19.9258 18.6247 19.8991 18.4995 19.8472C18.3743 19.7953 18.2607 19.7192 18.165 19.6233L16.5741 18.0323C16.3849 17.8381 16.2798 17.5772 16.2816 17.306C16.2834 17.0349 16.3919 16.7753 16.5836 16.5836C16.7753 16.3919 17.0349 16.2834 17.306 16.2816C17.5772 16.2798 17.8381 16.3849 18.0323 16.5741L19.6233 18.165C19.7675 18.3092 19.8658 18.4929 19.9056 18.693C19.9455 18.893 19.9251 19.1004 19.8471 19.2888C19.769 19.4773 19.6369 19.6384 19.4673 19.7517C19.2977 19.8651 19.0983 19.9256 18.8944 19.9256Z" />
          <path d="M6.69655 7.7278C6.56114 7.72806 6.42702 7.70152 6.30192 7.64971C6.17682 7.5979 6.06321 7.52185 5.96764 7.42592L4.3767 5.83499C4.18751 5.64074 4.08243 5.3798 4.08422 5.10866C4.08601 4.83751 4.19451 4.57798 4.38624 4.38624C4.57798 4.19451 4.83751 4.08601 5.10866 4.08422C5.3798 4.08243 5.64074 4.18751 5.83499 4.3767L7.42592 5.96764C7.57005 6.11189 7.66818 6.29563 7.70791 6.49564C7.74764 6.69565 7.72718 6.90294 7.64912 7.09133C7.57105 7.27971 7.43889 7.44072 7.26934 7.55401C7.09979 7.66729 6.90046 7.72777 6.69655 7.7278Z" />
          <path d="M12 16.7813C11.0544 16.7813 10.13 16.5008 9.34368 15.9755C8.55741 15.4501 7.94458 14.7034 7.5827 13.8297C7.22082 12.956 7.12614 11.9947 7.31062 11.0672C7.49511 10.1398 7.95048 9.28782 8.61915 8.61915C9.28782 7.95048 10.1398 7.49511 11.0672 7.31062C11.9947 7.12614 12.956 7.22082 13.8297 7.5827C14.7034 7.94458 15.4501 8.55741 15.9755 9.34368C16.5008 10.13 16.7813 11.0544 16.7813 12C16.7798 13.2676 16.2755 14.4829 15.3792 15.3792C14.4829 16.2755 13.2676 16.7798 12 16.7813Z" />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="moon"
        >
          <path d="M12.375 22.5C9.49077 22.5 6.72467 21.3542 4.68521 19.3148C2.64576 17.2753 1.5 14.5092 1.5 11.625C1.5 7.21874 4.03125 3.26812 7.95047 1.56234C8.0886 1.50214 8.24165 1.48494 8.3897 1.51298C8.53774 1.54102 8.6739 1.613 8.78045 1.71955C8.88699 1.82609 8.95897 1.96226 8.98701 2.1103C9.01506 2.25834 8.99786 2.4114 8.93766 2.54953C8.48766 3.58265 8.25 4.90593 8.25 6.37499C8.25 11.5444 12.4556 15.75 17.625 15.75C19.0941 15.75 20.4173 15.5123 21.4505 15.0623C21.5886 15.0021 21.7417 14.9849 21.8897 15.013C22.0377 15.041 22.1739 15.113 22.2804 15.2195C22.387 15.3261 22.459 15.4623 22.487 15.6103C22.5151 15.7583 22.4979 15.9114 22.4377 16.0495C20.7319 19.9687 16.7813 22.5 12.375 22.5Z" />
        </svg>
      </label>
    </div>
  );
};

const Navbar = ({ homeNav}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  const updateMenuState = (clicked, menuName) => {
    setState({
      initial: false,
      clicked,
      menuName,
    });
  };

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      // document.body.style.overflowY = "hidden"
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      // document.body.style.overflowY = "scroll"
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      // document.body.style.overflowY = "hidden"
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };
  console.log(state);

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <div id="navbar">
      <nav className={homeNav}>
        <div className="container-fluid navbarWidth ">
          <div className="inner-header">
            <a href="/#landing">
              <video
                autoPlay
                loop={true}
                muted
                defaultmuted="true"
                // controls
                height="70%"
                width="auto"
                id="navLogo"
                className="navlogoBlack"
              >
                <source src={logoVidBlack} type="video/webm" />
                <source src={logoVidBlack1} type="video/mp4;codecs=hvc1" />
              </video>
              <video
                autoPlay
                loop={true}
                muted
                defaultmuted="true"
                // controls
                height="70%"
                width="auto"
                id="navLogo"
                className="navlogoWhite"
              >
                <source src={logoVidWhite} type="video/webm" />
                <source src={logoVidWhite1} type="video/mp4;codecs=hvc1" />
              </video>
            </a>
            <div className="navRight">
              <Switcher />
              <div className="menu">
                <button disabled={disabled} onClick={handleMenu}>
                  {state.menuName}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Hamburger updateMenuState={updateMenuState} state={state} />
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
