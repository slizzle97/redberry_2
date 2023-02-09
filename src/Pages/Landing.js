import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/redberry_logo.png";
import logo_2 from "../images/logo_2.png";
import LandingCss from "../styles/Landing.module.css";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className={LandingCss.landing}>
      <div className={LandingCss.underline}>
        <img src={logo} className={LandingCss.logo} alt="logo" />
      </div>
      <button
        className={LandingCss.button}
        onClick={() => {
          // setRemoveStorage(true);
          navigate("/personalinfo");
          sessionStorage.clear();
          // Object.assign(form)
        }}
      >
        რეზიუმეს დამატება
      </button>
      <img src={logo_2} className={LandingCss.logo_2} alt="logo2" />
    </div>
  );
}
