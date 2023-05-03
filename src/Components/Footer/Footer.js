import React from "react";
import "./Footer.scss";
import logo from "../../Assets/Images/logoBlackTransparentBg.webp";
import logoWhite from "../../Assets/Images/logoWhiteTransparentBg.webp";

import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";

function Footer({ style }) {
  return (
    <div id="footer" style={style}>
      <div className="footerContainer">
        <div className="blueBlob" />
        <div className="purpBlob" />
        <div className="footerTop">
          <div class="footerLeft">
            <img id="footerLogo" className="logoWhite" src={logoWhite} alt="logo" />
            <img id="footerLogo" className="logoBlack" src={logo} alt="logo" />

            <div class="footerLeftText">
              <p className="company">© Copyright 2023</p>
              <p>Made by <b style={{fontWeight:'bold'}}>Kaleb Tessema</b></p>
            </div>
          </div>
          <div className="footerRedirects">

            <ul>
              <p className="listHeader">Pages</p>
              <li>
                <a href="mailto:support@resellology.io" className="listText">
                Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://mobile.twitter.com/resellbasement"
                  target="_blank"
                  rel="noreferrer"
                  className="listText"
                >
                  Resume
                </a>
              </li>
              <li>
                <a href="mailto:support@resellology.io" className="listText">
                  Contact
                </a>
              </li>
            </ul>
            <ul>
              <p className="listHeader">Social</p>
              <li>
                <a href="mailto:support@resellology.io" className="listText">
                Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://mobile.twitter.com/resellbasement"
                  target="_blank"
                  rel="noreferrer"
                  className="listText"
                >
                  Resume
                </a>
              </li>
              <li>
                <a href="mailto:support@resellology.io" className="listText">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="socialContainer">
            <a
              id="socialLink"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
            >
              <BsTwitter
                size={20}
                color="white"
                id="icon"
                className="socialBlack"
              />
              <BsTwitter
                size={20}
                color="black"
                id="icon"
                className="socialWhite"
              />
            </a>
            <a
              id="socialLink"
              className="instagram"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram
                size={20}
                color="white"
                id="icon"
                className="socialBlack"
              />
              <BsInstagram
                size={20}
                color="black"
                id="icon"
                className="socialWhite"
              />
            </a>
            <a
              id="socialLink"
              className="github"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub
                size={20}
                color="white"
                id="icon"
                className="socialBlack"
              />
              <BsGithub
                size={20}
                color="black"
                id="icon"
                className="socialWhite"
              />
              </a>
              <a
              className="contactBtn"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
