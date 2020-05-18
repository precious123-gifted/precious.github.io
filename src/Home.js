import React, { Component } from "react";
import "./Home.scss";
import Slider from "./Slider.js";
import Services from "./Ourservices.js";
import Whyus from "./Whyus.js";
import Footer from "./Footer.js";
import Logo from "./luixieslogo.png";

class Home extends Component {
  render() {
    return (
      <div className="hme">
        <nav>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <ul>
            <li>
              <a href="#"> Home</a>
            </li>
            <li>
              {" "}
              <a href="#"> About</a>
            </li>
            <li>
              <a href="#">Services</a>
              <ul className="servicelist">
                <li>graphics design</li>
                <li>website creaction</li>
                <li>ecommerce</li>
                <li>webapp-developement</li>
              </ul>
            </li>
            <li>
              <a href="#"> contact Us</a>
            </li>
          </ul>
        </nav>
        <Slider />
        <Services />
        <Whyus />
        <Footer />
      </div>
    );
  }
}

export default Home;
