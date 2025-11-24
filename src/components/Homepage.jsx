import React, { useState } from "react";
import "./Homepage.css";
import img1 from "../images/Property 1=Frame 54.svg";
import img2 from "../images/Property 1=Frame 55.svg";
import img3 from "../images/Property 1=Frame 56.svg";
import img4 from "../images/Property 1=Frame 57.svg";
import foto41 from "../images/card 4.png";
import foto42 from "../images/card 5.png";
import foto43 from "../images/card 8.png";
import foto44 from "../images/card 9.png";
import frame427319600 from "../images/Frame 427319600.png";
import b1 from "../images/brand logo 09.svg";
import b2 from "../images/brand logo 08.svg";
import b3 from "../images/brand logo 07.svg";
import b4 from "../images/Capa_1.svg";
import b5 from "../images/brand logo 05.svg";
import b6 from "../images/brand logo 03.svg";
import b7 from "../images/brand logo 12.svg";
import b8 from "../images/brand logo 13.svg";
import { Link } from "react-router-dom";

const Homepage = () => {
  const images = [
    { src: img1, title: "Babaz Kitchens" },
    { src: img2, title: "One Kitchen" },
    { src: img3, title: "Ghost Kitchens" },
    { src: img4, title: "Crack Me Up" },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <div className="homepage">
      <div className="header">
        <h1 className="h1">
          Home of <span>Iconic</span> flavors
        </h1>
      </div>

      <div className="story-section">
        <div className="titull">
          <h1>
            One Kitchen.<span>Many Eats.</span>
          </h1>
        </div>

        <div className="image-hover-container">
          <div
            className="background"
            style={{
              backgroundImage: `url(${
                hovered !== null ? images[hovered].src : images[0].src
              })`,
            }}
          ></div>

          <div className="hover-buttons">
            {images.map((img, i) => (
              <div
                key={i}
                className={`hover-btn ${hovered === i ? "active" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span>{img.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="under-photo">
          <p>
            Serve up success with a flexible kitchen model! Wheather launching a
            standalone brick-and-mortar or opening inside Walmart, you can build
            a thriving food business.Maximize revenue with a high-reward
            delivery operation and bring your culinary vision to life!
          </p>
          <h1>Partner Opportunies</h1>
        </div>
      </div>
      <div className="numbers">
        <div className="numbers-header">
          <h2>
            <span>By the numbers</span>
          </h2>
        </div>
        <div className="info">
          <div className="1">
            <h1>30+</h1>
            <hr />
            <h3>Locations Across North America</h3>
            <hr />
            <p>Rapid expansion with a strong market presence</p>
          </div>
          <div className="2">
            <h1>$2B</h1>
            <hr />
            <h3>$2 Billion Market Oppurtunity</h3>
            <hr />
            <p>Positioned in the booming ghost kitchen industry</p>
          </div>
          <div className="3">
            <h1>3,500+</h1>
            <hr />
            <h3>Total Delivery Orders</h3>
            <hr />
            <p>Proven efficiency in food fulfillment.</p>
          </div>
          <div className="4">
            <h1>15+</h1>
            <hr />
            <h3>World Known Brands</h3>
            <hr />
            <p>
              Easy to order multi-brand items in one location, in one kitchen.
            </p>
          </div>
        </div>
        <div className="4foto">
          <img src={foto41} className="foto1"></img>
          <img src={foto42} className="foto1"></img>
          <Link to="/locations">
            <img src={foto43} className="foto1" />
          </Link>
          <Link to="/join-our-team">
            <img src={foto44} className="foto1" />
          </Link>
        </div>
      </div>
      <div className="frame600">
        <img src={frame427319600} className="frame"></img>
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
    </div>
  );
};

export default Homepage;
