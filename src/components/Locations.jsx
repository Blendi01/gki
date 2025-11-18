import React, { useState } from "react";
import "./Locstions.css";
import all from "../images/all kitchen maps.png";
import gk from "../images/ghost maps.png";
import ok from "../images/one kitchen.png";
import bb from "../images/babaz.png";
import cm from "../images/crack me up.png";
import b1 from "../images/brand logo 09.svg";
import b2 from "../images/brand logo 08.svg";
import b3 from "../images/brand logo 07.svg";
import b4 from "../images/Capa_1.svg";
import b5 from "../images/brand logo 05.svg";
import b6 from "../images/brand logo 03.svg";
import b7 from "../images/brand logo 12.svg";
import b8 from "../images/brand logo 13.svg";
import linkcard1 from "../images/Frame 427319687.png";
import linkcard2 from "../images/Frame 427319688.png";
import linkcard3 from "../images/Frame 427319689.png";
import linkcard4 from "../images/Frame 427319691.png";
import linkcard5 from "../images/Frame 427319690.png";
import linkcard6 from "../images/Frame 427319692.png";

const Locations = () => {
  const [currentMap, setCurrentMap] = useState(all);

  return (
    <div className="locations">
      <div className="headerr">
        <h1 className="h1">
          Our <span>Locations</span>
        </h1>
      </div>

      <div className="location">
        <h1>Check For Current Locations</h1>
      </div>

      <div className="buttons-l">
        <button
          className={currentMap === all ? "active" : ""}
          onClick={() => setCurrentMap(all)}
        >
          All Locations
        </button>

        <button
          className={currentMap === gk ? "active" : ""}
          onClick={() => setCurrentMap(gk)}
        >
          Ghost Kitchens
        </button>

        <button
          className={currentMap === ok ? "active" : ""}
          onClick={() => setCurrentMap(ok)}
        >
          One Kitchen
        </button>

        <button
          className={currentMap === bb ? "active" : ""}
          onClick={() => setCurrentMap(bb)}
        >
          Babaz
        </button>

        <button
          className={currentMap === cm ? "active" : ""}
          onClick={() => setCurrentMap(cm)}
        >
          Crack Me Up
        </button>
      </div>

      <div className="maps">
        <img
          src={currentMap}
          alt="map"
          className="allmap"
          /*onError={(e) => {
            // fallback nëse imazhi nuk ngarkohet
            e.currentTarget.onerror = null;
            e.currentTarget.src = all;
          }}*/
        />
      </div>
      <div className="Brands-header">
              <h2>
                <strong>Some Of Our Brands</strong>
              </h2>
              <div className="brands-container">
                <img src={b1} className="brands-logo"></img>
                <img src={b2} className="brands-logo"></img>
                <img src={b3} className="brands-logo"></img>
                <img src={b4} className="brands-logo"></img>
                <img src={b5} className="brands-logo"></img>
                <img src={b6} className="brands-logo"></img>
                <img src={b7} className="brands-logo"></img>
                <img src={b8} className="brands-logo"></img>
              </div>
            </div>
            <div className="link-cards">
              <img src={linkcard1} className="cards"></img>
              <img src={linkcard2} className="cards"></img>
              <img src={linkcard3} className="cards"></img>
              <img src={linkcard4} className="cards"></img>
              <img src={linkcard5} className="cards"></img>
              <img src={linkcard6} className="cards"></img>
            </div>
          </div>
    
  );
};

export default Locations;
