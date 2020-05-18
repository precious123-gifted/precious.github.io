import React, { Component } from "react";
import "./Ourservices.scss";
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import slide4 from "./slide4.jpg";
import slide5 from "./slide5.jpg";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <h2>Services</h2>
        <div className="slider-container">
          <div className="box">
            <div className="imgbox">
              <img src={slide3} />
            </div>
            <div className="details">
              <h2 className="grph2"> graphics design</h2>
            </div>
          </div>
          <div className="box">
            <div className="imgbox">
              <img src={slide2} />
            </div>
            <div className="details">
              <h2>responsive webdesign</h2>
            </div>
          </div>
          <div className="box">
            <div className="imgbox">
              <img src={slide1} />
            </div>
            <div className="details">
              <h2>frontend developement</h2>
            </div>
          </div>

          <div className="box">
            <div className="imgbox">
              <img src={slide4} />
            </div>
            <div className="details">
              <h2>socialmedia marketing</h2>
            </div>
          </div>
          <div className="box">
            <div className="imgbox">
              <img src={slide5} />
            </div>
            <div className="details">
              <h2>coperate branding</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
