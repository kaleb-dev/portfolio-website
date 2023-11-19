import React from "react";
import ModalPopup from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { SlGlobe } from "react-icons/sl";

import "./Modal.scss";
const Modal = ({ open, onClose, name, image, webLink, website, technologies = [] }) => {
  
  return (
    <>
      {open && (
        <ModalPopup
          open={open}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          
          <div class="modalStyle">
            <div
              className="modalHeader"
              style={{
                position: "relative",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <button onClick={onClose} className="closeButton">
                x
              </button>
            </div>
            <Box className="sitePopup">
              <h5 className="bgText">{name}</h5>
              <div className="modalContent">
                <div
                  className="modalLeft"
                  style={{ backgroundImage: "url(" + image + ")" }}
                />
                <div className="modalRight">
                  <h2 className="modalHeading">{name}</h2>
                  <div class="rightContent">
                    <div class="about">
                      <h3 className="modalHeading">About</h3>
                      <p className="siteDesc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Turpis massa sed elementum tempus egestas
                        sed sed risus pretium. Lobortis elementum nibh tellus
                        molestie nunc non blandit massa enim.
                      </p>
                    </div>
                    <div className="resources">
                      <h3 className="modalHeading">Resources</h3>
                      <div className="resourceItems">
                      {technologies.map((item) => <div className="tech">{item}</div>)}
                      </div>
                    </div>
                    <div class="web">
                      <h3 className="modalHeading">Website</h3>
                      <div className="website">
                        <SlGlobe size={20} color="black" />
                        <a
                          className="webLink underline"
                          href={webLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </ModalPopup>
      )}
    </>
  );
};

export default Modal;
