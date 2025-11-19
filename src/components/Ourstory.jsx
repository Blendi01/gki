import React from "react";
import "./Ourstory.css";
//import aboutImage from "../images/hero (1).png";
import foto1 from "../images/Rectangle 1.png";
import foto2 from "../images/Rectangle 1 (1).png";
import foto3 from "../images/Rectangle 1 (2).png";
import member1 from "../images/George-Kottas 1.png";
import member2 from "../images/marc_1 1.png";
import member3 from "../images/3bc02118-bf7f-4954-9c7c-2e4e01eafa6d_medium 1.png";
import member4 from "../images/Screenshot 2025-02-04 at 1.50.54 AM 1.png";
import member5 from "../images/1719518155470 1.png";
import member6 from "../images/18247b 1.png";
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

const Ourstory = () => {
  return (
    <div className="ourstory">
      <div className="headeer">
        <h1 className="h1">
          Our <span>Story</span>
        </h1>
      </div>
      <div className="story-sectionn">
        <div className="story-leftt" id="1">
          <h2>Who We Are</h2>
          <p>
            At Ghost Kitchens International, we redefine dining by offering a
            seamless way to enjoy diverse cuisines from one location. As a
            global leader in ghost kitchens, we unite top brands and local
            favorites for fresh, flavorful meals available for dine-in, takeout,
            or delivery.
          </p>
          <p>
            With a focus on innovation, quality, and efficiency, we let
            customers mix and match dishes from multiple restaurants in a single
            order.
          </p>
        </div>

        <div className="story-rightt">
          <img src={foto1} className=""></img>
        </div>
        <div className="story-leftt" id="2">
          <h2 className="h2">Our Vision</h2>
          <p>
            At Ghost Kitchens International, we aim to revolutionize dining with
            a seamless, innovative, and accessible culinary ecosystem. As a
            global leader in ghost kitchens, we empower food lovers with
            diverse, high-quality options while ensuring convenience.
          </p>
          <p>
            By partnering with top brands and leveraging technology, we set new
            standards in efficiency, sustainbility, and customer satisfacion.
            Through innovation and collaboration, we are redefining food
            delivery and the dinning experince for future generations.
          </p>
        </div>

        <div className="story-rightt">
          <img src={foto2} className=""></img>
        </div>
        <div className="story-leftt" id="3">
          <h2>Our Mission</h2>
          <p className="p3">
            At Ghost Kitchens International, our mission is to deliver
            fresh,high-quality meals from multiple beloved brands under one
            roof, providing unmatched convenience and choice to our costumers.
            We are dedicated to revolutioninzing the dining experience through
            innovation, efficiency, and a commitment to a excellence
          </p>
          <p className="p3">
            By combining diverse cuisines with seamless technology, we empower
            communities to enjoy their favorite flavors anytime,anywhere.
            Through strong partnerships, sustainable practices, and a focus on a
            costumer satisfacion, we strive to make great food accessible,
            affordable, and unforgettable
          </p>
        </div>

        <div className="story-rightt">
          <img src={foto3} className=""></img>
        </div>
      </div>

      <div className="team-header">
        <h2>Our Team</h2>
      </div>
      <div className="team-members">
        <div className="top">
          <div className="member">
            <img src={member1} className="Member 1" />
            <h2>George Kottas</h2>
            <h4>
              <strong>Founder/Ceo</strong>
            </h4>
            <p>
              A serial entrepreneur & seasoned franchiser with the vision
              driving Ghost Kitchen Brands explosive growth
            </p>
          </div>

          <div className="member">
            <img src={member2} className="Member 2" />
            <h2>Marc Choy</h2>
            <h4>
              <strong>President</strong>
            </h4>
            <p>
              A veteran in the food industry with significant leadership
              experience at national restaurant brands such as Quiznos.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="member">
            <img src={member3} className="Member 3" />
            <h2>
              <strong>Sean Graham</strong>
            </h2>
            <h4>Chief Technology Officer</h4>
            <p>
              Sean has more than 25 years of experience working in technology,
              and a proven track record of innovative thinking and creative
              problem solving.
            </p>
          </div>

          <div className="member">
            <img src={member4} className="Member 4" />
            <h2>Nada Selim</h2>
            <h4>
              <strong>Marketing Manager</strong>
            </h4>
            <p>
              Marketing professional with significant experience in design,
              strategic development and digital advertisments.
            </p>
          </div>
          <div className="member">
            <img src={member5} className="Member 5" />
            <h2>Quinn Baiano</h2>
            <h4>
              <strong>Coo</strong>
            </h4>
            <p>Business professional focusing on Operations.</p>
          </div>
          <div className="member">
            <img src={member6} className="Member 6" />
            <h2>David Sarner</h2>
            <h4>
              <strong>Business Development</strong>
            </h4>
            <p>
              David is a 30 Year veteran of F&B Hospitality industry expanding
              brands globally.
            </p>
          </div>
        </div>
      </div>

      {/*<div className="Brands-header">
            <h2><strong>Some Of Our Brands</strong></h2>
            <div className="brands-logo">
              <img src={b1} className="1"></img>
              <img src={b2} className="2"></img>
              <img src={b3} className="3"></img>
              <img src={b4} className="4"></img>
              <img src={b5} className="5"></img>
              <img src={b6} className="6"></img>
              <img src={b7} className="7"></img>
              <img src={b8} className="8"></img>
            </div>
          </div>*/}

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

export default Ourstory;
