
import React from "react";
import "./banner.scss";
import "react-toastify/dist/ReactToastify.css";

const Banner = () => {
  return (
    <>
      <section className="main-banner" id="banner">
        <img src="\assets\shadows\banner-bg.png" alt="img" className="img-fluid banner-bg" />
          <div className="custom-container">
            <div className="main-content">
              <h6>Sed ut perspiciatis unde omnis</h6>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
              <div className="twice-btns">
              <a href="#" className="green-btn">Get Started</a>
              <a href="#" className="black-btn">Learn More</a>
            </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Banner;
