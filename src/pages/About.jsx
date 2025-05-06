import React from "react";
import { Link } from "react-router-dom";
import "../styles.scss";

const About = () => {
  return (
    <div className="page-about">
      <h1>Our Mission</h1>
      <p>
        To offer a digital space where everyone can rediscover calm, balance,
        and inner well-being through accessible meditation experiences.
      </p>
      <h2>Our Vision</h2>
      <p>
        We aim to promote a culture of awareness and serenity, where meditation
        becomes a daily tool for living better and with greater presence.
      </p>
      <Link to="/meditation"
       className="zen-button">
       Start Meditating
      </Link>
    </div>
  );
};

export default About;
