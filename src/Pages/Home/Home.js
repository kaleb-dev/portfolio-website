import React, { useState, lazy, Suspense } from "react";
import "./Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// import required modules
import { Controller, Autoplay } from "swiper";

//Images
import deviceBlack from "../../Assets/Images/mockupDisplay.webp";
import deviceWhite from "../../Assets/Images/mockupDisplayWhite.webp";

//Laptop Displays
import unityLaptop from "../../Assets/Images/unityLaptop.webp";
import resellologyLaptop from "../../Assets/Images/resellologyLaptop.webp";
import freebieLaptop from "../../Assets/Images/freebieLaptop.webp";
import fittedLaptop from "../../Assets/Images/fittedLaptop.webp";
import axelLaptop from "../../Assets/Images/axelLaptop.webp";
import frugalLaptop from "../../Assets/Images/frugalLaptop.webp";
import rbLaptop from "../../Assets/Images/rbLaptop.webp";

//Mobile Displays
import unityMobile from "../../Assets/Images/unityMobile.webp";
import resellologyMobile from "../../Assets/Images/resellologyMobile.webp";
import freebieMobile from "../../Assets/Images/freebieMobile.webp";
import fittedMobile from "../../Assets/Images/fittedMobile.webp";
import axelMobile from "../../Assets/Images/axelMobile.webp";
import frugalMobile from "../../Assets/Images/frugalMobile.webp";
import rbMobile from "../../Assets/Images/rbMobile.webp";

//Social Icons
// import logoOutline from "../../Assets/Images/logoOutlineGrey.webp";
import {
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsArrowUpRight,
} from "react-icons/bs";

const Modal = lazy(() => import("../../Components/Modal/Modal"));

function Landing() {
  return (
    <div id="landing">
      {/* <Navbar homeNav="navbar navbar-expand-lg  bg-custom" /> */}
      <div className="blueBlobMobile" />
      <div className="purpBlobMobile" />
      <div className="landingContent">
        <div className="blueBlob" />
        <div className="purpBlob" />
        <div className="landingText">
          <h1 className="headingText">
            my name is <span>Kaleb Tessema </span>- an aspiring Frontend
            Developer
          </h1>
          <p className="landingParagraph">
            I care a lot about using design for positive impact. and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
          <div className="socialContainer">
            <a className="contactBtn" href="/contact">
              Contact me
            </a>
            <a
              id="socialLink"
              href="https://twitter.com/kalebt_dev"
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
              href="https://www.instagram.com/kaleb.dev/"
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
              href="https://github.com/kaleb-dev"
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
          </div>
        </div>
        <div className="landingDeviceDisplay">
          <img
            id="devices"
            className="displayWhite"
            src={deviceWhite}
            alt="logo"
            draggable="false"
          />
          <img
            id="devices"
            className="displayBlack"
            src={deviceBlack}
            alt="logo"
            draggable="false"
          />
          <Slideshow />
        </div>
      </div>
    </div>
  );
}

function Work() {
  const [openFrugal, setOpenFrugal] = useState(false);
  const onClickOpenFrugal = () => setOpenFrugal(true);
  const onClickCloseFrugal = () => setOpenFrugal(false);

  const [openFreebie, setOpenFreebie] = useState(false);
  const onClickOpenFreebie = () => setOpenFreebie(true);
  const onClickCloseFreebie = () => setOpenFreebie(false);

  const [openFitted, setOpenFitted] = useState(false);
  const onClickOpenFitted = () => setOpenFitted(true);
  const onClickCloseFitted = () => setOpenFitted(false);

  const [openAxel, setOpenAxel] = useState(false);
  const onClickOpenAxel = () => setOpenAxel(true);
  const onClickCloseAxel = () => setOpenAxel(false);

  const [openResellology, setOpenResellology] = useState(false);
  const onClickOpenResellology = () => setOpenResellology(true);
  const onClickCloseResellology = () => setOpenResellology(false);

  const [openRb, setOpenRb] = useState(false);
  const onClickOpenRb = () => setOpenRb(true);
  const onClickCloseRb = () => setOpenRb(false);

  const [openUnity, setOpenUnity] = useState(false);
  const onClickOpenUnity = () => setOpenUnity(true);
  const onClickCloseUnity = () => setOpenUnity(false);

  return (
    <div id="work">
      <div className="workContainer">
        <div className="workGrid">
          <div id="workBox" className="frugal" data-aos="fade-down">
            <div
              className="hoverBg"
              onClick={onClickOpenFrugal}
              onClickOpen={() => setOpenFrugal(true)}
              id="cardPopup"
            >
              <div className="hoverInfo">
                <h4>Frugal Season</h4>
                <div className="expandCircle">
                  <BsArrowUpRight
                    size={20}
                    color="white"
                    className="socialBlackWork"
                  />
                  <BsArrowUpRight
                    size={20}
                    color="black"
                    className="socialWhiteWork"
                  />
                </div>
              </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Modal
                open={openFrugal}
                onClose={onClickCloseFrugal}
                name="Frugal"
                image={frugalLaptop}
                technologies={["React", "JavaScript", "CSS"]}
                website="frugalseason.com"
                webLink="https://www.frugalseason.com/"
              />
            </Suspense>
          </div>
          <div id="workBox" className="freebie" data-aos="fade-right">
            <div
              className="hoverBg"
              onClick={onClickOpenFreebie}
              onClickOpen={() => setOpenFreebie(true)}
              data-aos="fade-down"
              data-aos-delay="400"
              id="cardPopup"
            >
              <div className="hoverInfo">
                <h4>Freebie Frenzy</h4>
                <div className="expandCircle">
                  <BsArrowUpRight
                    size={20}
                    color="white"
                    className="socialBlackWork"
                  />
                  <BsArrowUpRight
                    size={20}
                    color="black"
                    className="socialWhiteWork"
                  />
                </div>
              </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Modal
                open={openFreebie}
                onClose={onClickCloseFreebie}
                name="Freebie"
                image={freebieLaptop}
                website="freebiefrenzy.io"
                webLink="https://www.freebiefrenzy.io"
                technologies={["React", "JavaScript", "CSS", "asdasd"]}
              />
            </Suspense>
          </div>
          <div
            id="workBox"
            className="fitted"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div
              className="hoverBg"
              onClick={onClickOpenFitted}
              onClickOpen={() => setOpenFitted(true)}
              id="cardPopup"
            >
              <div className="hoverInfo">
                <h4>Fitted IOS</h4>
                <div className="expandCircle">
                  <BsArrowUpRight
                    size={20}
                    color="white"
                    className="socialBlackWork"
                  />
                  <BsArrowUpRight
                    size={20}
                    color="black"
                    className="socialWhiteWork"
                  />
                </div>
              </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Modal
                open={openFitted}
                onClose={onClickCloseFitted}
                name="Fitted"
                image={fittedLaptop}
                website="fittedios.com"
                webLink="https://fittedios.com/"
                technologies={["React", "JavaScript", "CSS", "asdasd"]}
              />
            </Suspense>
          </div>
          <div id="workBox" className="resellology" data-aos="fade-in">
            <div
              className="hoverBg"
              onClick={onClickOpenResellology}
              onClickOpen={() => setOpenResellology(true)}
              id="cardPopup"
            >
              <div className="hoverInfo">
                <h4>Resellology+</h4>
                <div className="expandCircle">
                  <BsArrowUpRight
                    size={20}
                    color="white"
                    className="socialBlackWork"
                  />
                  <BsArrowUpRight
                    size={20}
                    color="black"
                    className="socialWhiteWork"
                  />
                </div>
              </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Modal
                open={openResellology}
                onClose={onClickCloseResellology}
                name="Resellology"
                image={resellologyLaptop}
                website="resellology.io"
                webLink="https://www.resellology.io/"
                technologies={["React", "JavaScript", "CSS", "asdasd"]}
              />
            </Suspense>
          </div>
          <div id="workBox" className="axel" data-aos="fade-right">
            <div
              className="hoverBg"
              onClick={onClickOpenAxel}
              onClickOpen={() => setOpenAxel(true)}
              id="cardPopup"
            >
              <div className="hoverInfo">
                <h4>Axel Creatures</h4>
                <div className="expandCircle">
                  <BsArrowUpRight
                    size={20}
                    color="white"
                    className="socialBlackWork"
                  />
                  <BsArrowUpRight
                    size={20}
                    color="black"
                    className="socialWhiteWork"
                  />
                </div>
              </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Modal
                open={openAxel}
                onClose={onClickCloseAxel}
                name="Axel"
                image={axelLaptop}
                website="axelcreatures.io"
                webLink="https://www.axelcreatures.io/"
                technologies={["React", "JavaScript", "CSS", "asdasd"]}
              />
            </Suspense>
          </div>
          <div
            id="workBox"
            className="unity"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div
              className="hoverBg"
              onClick={onClickOpenUnity}
              onClickOpen={() => setOpenUnity(true)}
              id="cardPopup"
            >
              <div className="hoverInfo">
                <h4>Unity3</h4>
                <div className="expandCircle">
                  <BsArrowUpRight
                    size={20}
                    color="white"
                    className="socialBlackWork"
                  />
                  <BsArrowUpRight
                    size={20}
                    color="black"
                    className="socialWhiteWork"
                  />
                </div>
              </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Modal
                open={openUnity}
                onClose={onClickCloseUnity}
                name="Unity"
                image={unityLaptop}
                website="unity3.io"
                webLink="https://www.unity3.io/"
                technologies={["React", "JavaScript", "CSS", "asdasd"]}
              />
            </Suspense>
          </div>
          <div id="workBox" className="resellersBasement" data-aos="fade-up">
            <div
              className="hoverBg"
              onClick={onClickOpenRb}
              onClickOpen={() => setOpenRb(true)}
              id="cardPopup"
            >
              <div className="hoverInfo">
                <h4>Resellers Basement</h4>
                <div className="expandCircle">
                  <BsArrowUpRight
                    size={20}
                    color="white"
                    className="socialBlackWork"
                  />
                  <BsArrowUpRight
                    size={20}
                    color="black"
                    className="socialWhiteWork"
                  />
                </div>
              </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Modal
                open={openRb}
                onClose={onClickCloseRb}
                name="Resellers Basement"
                image={rbLaptop}
                website="resellers-basement.com"
                webLink="https://resellers-basement.com/"
                technologies={["React", "JavaScript", "CSS", "asdasd"]}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slideshow() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div>
      {controlledSwiper && (
        <Swiper
          // pagination={pagination}
          modules={[Controller, Autoplay]}
          controller={{ control: controlledSwiper }}
          speed={700}
          loop={true}
          touchMove={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          className="myLaptopSwiper"
          breakpoints={{
            // when window width is >= 300px
            300: {
              slidesPerView: 1,
            },
            // when window width is >= 1100px
            1200: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            {" "}
            <img
              className="laptopDisplay"
              src={frugalLaptop}
              alt="logo"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="laptopDisplay"
              src={resellologyLaptop}
              alt="logo"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="laptopDisplay"
              src={freebieLaptop}
              alt="logo"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="laptopDisplay"
              src={unityLaptop}
              alt="logo"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="laptopDisplay"
              src={axelLaptop}
              alt="logo"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="laptopDisplay"
              src={fittedLaptop}
              alt="logo"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="laptopDisplay"
              src={rbLaptop}
              alt="logo"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      )}

      <Swiper
        // pagination={pagination}
        onSwiper={setControlledSwiper}
        className="myMobileSwiper"
        loop={true}
        breakpoints={{
          // when window width is >= 300px
          300: {
            slidesPerView: 1,
          },
          // when window width is >= 1100px
          1200: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          {" "}
          <img
            className="mobileDisplay"
            src={frugalMobile}
            alt="logo"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="mobileDisplay"
            src={resellologyMobile}
            alt="logo"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="mobileDisplay"
            src={freebieMobile}
            alt="logo"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="mobileDisplay"
            src={unityMobile}
            alt="logo"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="mobileDisplay"
            src={axelMobile}
            alt="logo"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="mobileDisplay"
            src={fittedMobile}
            alt="logo"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="mobileDisplay"
            src={rbMobile}
            alt="logo"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function Home() {
  return (
    <div style={{ position: "relative" }}>
      {/* <img className="bgLogo" src={logoOutline} alt="logoOutline" /> */}
      <h6
        style={{
          position: "fixed",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        PORTFOLIO
      </h6>
      <Landing />
      <Work />
      <Footer style={{ position: "relative" }} />
    </div>
  );
}

export default Home;
