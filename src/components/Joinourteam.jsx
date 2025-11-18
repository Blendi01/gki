import React, { useState } from "react";
import "./Joinourteam.css";

import logo1 from "../images/Frame 427319590.svg";
import logo2 from "../images/Frame 427319590 (1).svg";
import logo3 from "../images/Frame 427319590 (2).svg";
import linkcard1 from "../images/Frame 427319687.png";
import linkcard2 from "../images/Frame 427319688.png";
import linkcard3 from "../images/Frame 427319689.png";
import linkcard4 from "../images/Frame 427319691.png";
import linkcard5 from "../images/Frame 427319690.png";
import linkcard6 from "../images/Frame 427319692.png";
import f1 from "../images/female-chef-preparing-food-in-frying-pan-in-the-ki-2024-12-13-18-21-55-utc 1.png";
import f2 from "../images/female-chef-preparing-food-in-frying-pan-in-the-ki-2024-12-13-18-21-55-utc 1 (1).png";
import f3 from "../images/female-chef-preparing-food-in-frying-pan-in-the-ki-2024-12-13-18-21-55-utc 1 (2).png";
import f4 from "../images/female-chef-preparing-food-in-frying-pan-in-the-ki-2024-12-13-18-21-55-utc 1 (3).png";

const Joinourteam = () => {
  const [openId, setOpenId] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Job Position 1",
      description:
        "As a [Position Title], you will be responsible for [key responsibility 1], [key responsibility 2], and [key responsibility 3]. The ideal candidate will have [specific skill] and a passion for [relevant industry/topic]",
      department: "Job X",
        location: "123 Place",
      available: "11/2/2024",
      img: f1,
    },
    {
      id: 2,
      title: "Job Position 2",
      description: "As a [Position Title], you will be responsible for [key responsibility 1], [key responsibility 2], and [key responsibility 3]. The ideal candidate will have [specific skill] and a passion for [relevant industry/topic]",
      department: "Job X",
      location: "123 Place",
      available: "11/2/2024",
      img: f2,
    },
    {
      id: 3,
      title: "Job Position 3",
      description: "As a [Position Title], you will be responsible for [key responsibility 1], [key responsibility 2], and [key responsibility 3]. The ideal candidate will have [specific skill] and a passion for [relevant industry/topic]",
      department: "Job x",
      location: "123 Place",
      available: "11/2/2024",
      img: f3,
    },
    {
      id: 4,
      title: "Job Position 4",
      description: "As a [Position Title], you will be responsible for [key responsibility 1], [key responsibility 2], and [key responsibility 3]. The ideal candidate will have [specific skill] and a passion for [relevant industry/topic]",
      department: "Job X",
      location: "123 Place",
      available: "11/2/2024",
      img: f4,
    },
  ];

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="joinourteam">
      <div className="hheader">
        <h1 className="h1">
          <span>JOIN</span> OUR TEAM
        </h1>
      </div>

      <div className="workwithus">
        <div className="work-text">
          <h1>Why Work With Us?</h1>
          <p>
            At GKI, we offer career growth, flexible hours, and the opportunity
            to collaborate with global brands in a fast-growing, innovative
            environment. Be part of a team shaping the future of the food
            industry.
          </p>
        </div>

        <div className="work-cards">
          <div className="work-card">
            <img src={logo1} className="logo1" />
            <h2>Collaborative & Supportive Environment</h2>
          </div>

          <div className="work-card">
            <img src={logo2} className="logo2" />
            <h2>Growth & Development</h2>
          </div>

          <div className="work-card">
            <img src={logo3} className="logo3" />
            <h2>Competitive Compensation & Benefits</h2>
          </div>
        </div>
      </div>

  <div className="jobs-section">

  <h2 className="jobs-title">Available Positions</h2>

  <div className="jobs-filters">
    <input
      type="text"
      placeholder="Search for job title, keywords, department"
      className="jobs-search"
    />

    <button className="filter-btn">All Positions</button>
    <button className="filter-btn">Department</button>
    <button className="filter-btn">Job Type</button>
  </div>
<p className="jobsp">We've found <span>4</span> job positions for you</p>
  <div className="jobs-list">
    {jobs.map((job) => (
      <div key={job.id} className="job-item">
        <div className="job-header" onClick={() => toggle(job.id)}>
          <h3>{job.title}</h3>

          <span className="see-more">
            {openId === job.id ? "Close" : "See more"}
          </span>
        </div>

        {openId === job.id && (
          <div className="job-content">
            <div className="job-text">
              <p>{job.description}</p>

              <ul>
                <li>💼 Department: {job.department}</li>
                <li>📍 Location: {job.location}</li>
                <li>🗓️ Available: {job.available}</li>
              </ul>

              <button className="apply-btn">Apply Now</button>
            </div>

            <img className="job-img" src={job.img} alt="job" />
          </div>
        )}
      </div>
    ))}
  </div>
</div>

      <div className="link-cards">
        <img src={linkcard1} className="cards" />
        <img src={linkcard2} className="cards" />
        <img src={linkcard3} className="cards" />
        <img src={linkcard4} className="cards" />
        <img src={linkcard5} className="cards" />
        <img src={linkcard6} className="cards" />
      </div>
    </div>
  );
};

export default Joinourteam;
