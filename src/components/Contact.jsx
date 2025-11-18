import React from "react";
import "./Contact.css";
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

const Contact = () => {
  return <div className="contact">
      <div className="heeader">
        <h1 className="h1">
        GET IN <span>TOUCH</span>
        </h1>
    </div>
    <div className="main">
      <div className="left">
<h1>The <span>Future</span> of Food Service is Here.</h1>
<p>Build Your Ghost Kitchen Empire! With rapid expansion across 
  multiple categories. Ghost Kitchens is seeking passionate 
  leaders ready to grow with us.
</p>
<br/>
<p><bold>Give us a call</bold></p>
<p>+1 (800) 123-4567</p>
<p>+1 (888) 987-6543</p>
      </div>
      <div className="right">
        <h3>Fill out from below to learn more about your
          future franchise opportunity.
        </h3>
        <input type="text" placeholder="Full Name" className="name"></input>
        <input type="email" placeholder="Email" className="email"></input>
        <input type="text" placeholder="Subject" className="subject"></input>
        <input type="text" placeholder="Message" className="message"></input>
        <button>Send</button>
      </div>
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
  </div>;
};

export default Contact;
