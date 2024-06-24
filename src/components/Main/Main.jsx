import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
            <p><span>Hello, Keshav.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>briefly summerize: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstorm team bulding activity</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>improve the readablity of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder="Enter a prompt here" />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
                Gemini Clone, created by Keshav. All rights reserved.
            </p>
        </div>
      </div>
    </div>
  );
};
export default Main;
