import React from "react";
import hero_img from "../assets/hero-image2.png";

const Hero = () => {
  return (
    <div>
      <section className="hero-section py-5 text-center">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-md-6 text-start">
              <span className="txt1">TechXen Technology &amp; IT Solution</span>
              <h1 className="display-5 fw-bold mb-3">
                Transform Your <br />
                Business With <br />
                Next Generation
                <span className="text-primary">
                  <br />
                  IT Solutions
                </span>
              </h1>
              <p className="mb-4 text-muted">
                Welcome to TechXen where we specialise in delivering tailored
                technology and IT solutions designed to propel your business
                forward. From streamlining operations to and driving growth.
              </p>
              <div className="d-flex align-items-center mb-3">
                <a href="#" className="btn btn-primary me-3">
                  Get Started Now
                </a>
                <a
                  href="#"
                  className="text-primary text-decoration-none fw-bold"
                >
                  <i className="bi bi-play-circle" /> Watch Demo Video
                </a>
              </div>
            </div>
            {/* Image Content */}
            <div className="col-md-6">
              <div className>
                <img
                  src={hero_img}
                  className="img-fluid w-100"
                  alt="TechXen Team"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
