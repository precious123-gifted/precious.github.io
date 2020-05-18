import React, { Component } from "react";
import "./Whyus.scss";

class Whyus extends Component {
  render() {
    return (
      <div className="why">
        <div className="content">
          <h2>why choose us</h2>
          <div className="words">
            <ul>
              <li>
                <p>we create unique designs</p>
              </li>
              <li>
                <p>we create responsive web pages</p>
              </li>
              <li>
                <p>
                  we run ad-campaigns at a reasonable price you would not
                  believe.
                </p>
              </li>
              <li>
                <p>
                  our major consine is the well being of your business to see
                  your business up and running,be it a small or large business
                  we assure you a remarkable growth.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Whyus;
