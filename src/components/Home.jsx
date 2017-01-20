import React from 'react';
import { Link } from 'react-router';


const Home = () => {
  return (
  <section className="home-main">
    <video id="bgVideo" autoPlay loop>
      <source src="./coutingmoney.mp4" type="video/mp4" />
    </video>
    <div className="home-box">
      <h1>Bred</h1>
      <h4>Where your finances come together</h4>
      <div className="home-buttons">
        <Link to="/signup"><button className="signup">Signup Today</button></Link>
        <Link to="/login"><button className="login">Login</button></Link>
      </div>
    </div>
  </section>
  );
};

export default Home;
