import React from "react";
import "./Franchise.css";
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
import ghost from "../images/Group 1261153198.png";
import one from "../images/Group 1261153199.png";
import ikon from "../images/Frame 427319578.svg";
import step from "../images/Frame 427319614.png";

const Franchise = () => {
  return (
    <div className="franchise">
      <div className="headder">
        <h1 className="h1">
          <span>OWN</span> A FRANCHISE
        </h1>
      </div>
      <div className="ghostkitchen">
        <img src={ghost} className="ghosti"></img>
        <div className="textig">
          <h2>
            Franchise A <span class="ghost1">GHOST</span>
            <span class="kitchen1">kitchens</span>
          </h2>
          <p>
            Operate multiple brands in one location for both eat-in and take-out
            with less staff! Become part of the most innovative restaurant
            business plan today.
          </p>
          <h2>Become A Partner Today</h2>
        </div>
      </div>
      <div className="onekitchen">
        <div className="textio">
          <h2>
            Franchise A <span class="one">one</span>
            <span class="kitchen1">kitchen</span>
          </h2>
          <p>
            We operate both under the Ghost Kitchens and One Kitchen banner -
            allowing you to choose what is best for your market.
          </p>
          <h2>Become A Partner Today</h2>
        </div>

        <img src={one} className="onei"></img>
      </div>
      <div className="why-partner">
        <h1>Why Partner With GKI?</h1>
        <p>
          Franchising with Ghost Kitchens, One Kitchen, or Babaz Kitchens offers
          incredible benefits, including scalability to grow your business
          efficiently, low overhead costs for a more profitable venture, and a
          robust support system to ensure your success.With our proven model,
          you can tap into a thriving industry while receiving the guideance and
          resources needed to thrive.
        </p>
        <div className="lista">
          <li>Superior Restaurant Brands</li>
          <li>Extensive Franchising Portofolio</li>
          <li>One of the largest food service companies in Canada</li>
          <li>State of the Art IT systems and support</li>
          <li>National Partnerships</li>
          <li>National Marketing Support</li>
          <li>Construction Expertise</li>
          <li>Economics of Scale</li>
          <li>Culinary Expertise = Fresh Thinking</li>
          <li>Multi-Branded Franchise Opportunities</li>
          <li>Training Support</li>
          <li>Strategic Partnerships with Major landlords across Canada</li>
        </div>
        <div className="faqs">
          <h1>FAQs</h1>
          <div className="line">
            <h3>How Can I Schedule A Conusltation?</h3>
            <img src={ikon} className="ikon"></img>
          </div>
          <div className="line">
            <h3>How Do You Measure The Success Of Your Services?</h3>
            <img src={ikon} className="ikon"></img>
          </div>
          <div className="line">
            <h3>How Long Does It Take To See Results?</h3>
            <img src={ikon} className="ikon"></img>
          </div>
          <div className="line">
            <h3>Do You Work With Businesses in All Industries?</h3>
            <img src={ikon} className="ikon"></img>
          </div>
          <div className="line">
            <h3>What Is The Process For Starting A Project?</h3>
            <img src={ikon} className="ikon"></img>
          </div>
          <div className="line">
            <h3>How Do You Measyre The Success Of Your Services?</h3>
            <img src={ikon} className="ikon"></img>
          </div>
          <div className="line">
            <h3>How Much Do You Services Cost?</h3>
            <img src={ikon} className="ikon"></img>
          </div>
          <div className="line">
            <h3>Can You Help With Rebranding or Repositioning Our Business?</h3>
            <img src={ikon} className="ikon"></img>
          </div>
        </div>
      </div>
      <div className="getstarted">
        <div className="gleft">
          <h1>How to Get Started</h1>
          <div className="step1">
            <h2>
              <span>01.</span> Step 1: Explore Our Opportunity
            </h2>
            <p>
              Learn about our business model, benefits, and what makes us stand
              out in the industry.
            </p>
          </div>
          <div className="step1">
            <h2>
              <span>02.</span> Step 2: Apply Online
            </h2>
            <p>
              Fill out a simple online form to express your interest and get
              Started.
            </p>
          </div>
          <div className="step1">
            <h2>
              <span>03.</span> Step 3: Meet With Us
            </h2>
            <p>
              Our team will Schedule a meeting to discuss the details, support,
              and next steps.
            </p>
          </div>
          <div className="step4">
            <img src={step} className="step"></img>
          </div>
        </div>
        <div className="gright">
 <div className="partner-form">
      <h1>Become A Partner</h1>

      <div className="row">
        <div className="field">
          <label>First Name</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Last Name</label>
          <input type="text" />
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="field">
          <label>Phone</label>
          <input type="text" />
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label>Address</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>City</label>
          <input type="text" />
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label>State</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Zip</label>
          <input type="text" />
        </div>
      </div>

      <div className="field full">
        <label>Brand</label>
        <input type="text" />
      </div>

      <div className="field full">
        <label>Message</label>
        <input type="text" />
      </div>

      <div className="checkbox-row">
        <input type="checkbox" />
        <p>
          I consent to receive electronic communications related to potential
          franchise opportunities from Ghost Kitchens International. Consent may
          be withdrawn at any time.
        </p>
      </div>

      <button className="submit-btn">Submit Application</button>
    </div>
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
    </div>
  );
};

export default Franchise;
