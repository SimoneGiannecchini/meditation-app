import React from "react";
import { Link } from "react-router-dom";
import "../styles.scss"; 

const Home = () => {
  return (
    <div className="page-home">
      <h1>Every journey begins within.</h1>
      <p>Give yourself a moment of stillness. Everything else can wait.</p>
      <Link to="/meditation">
        <button className="zen-button">Start now</button>
      </Link>
    </div>
  );
};

export default Home;

