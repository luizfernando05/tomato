import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sing Up");

  return (
    <div className="login-pop-up">
      <form className="login-popup-container">
        <div className="login-popuup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sing Up" ? "Create Account" : "Login"}</button>
      </form>
    </div>
  );
};

export default LoginPopUp;
