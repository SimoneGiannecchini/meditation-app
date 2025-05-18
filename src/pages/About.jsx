import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.scss";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => {
      navigate("/meditation");
    }, 200);
  };

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

      <button className="zen-button" onClick={handleClick}>
        Start now
      </button>
    </div>
  );
};

export default About;
