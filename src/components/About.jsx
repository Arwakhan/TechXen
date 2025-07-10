import React from "react";
import about_img from "../assets/about1-img2.png";

const About = () => {
  return (
    <div>
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="main-img">
                <img
                  src={about_img}
                  className="img-fluid w-70"
                  alt="Main Image"
                />
              </div>
            </div>
            <div className="col-md-6">
              <p className="text-primary fw-semibold">About Our Company</p>
              <h2 className="mb-3">
                Discover Our Story Empowering Business Through Innovation
              </h2>
              <p className="text-muted">
                TechXen pioneering force in the realm of technology and IT
                solutions, dedicated to revolutionising the way businesses
                thrive in the digital age. Our approach is rooted in
                collaboration, transparency, and a relentless pursuit of
                excellence.
              </p>
              <p className="text-muted">
                We believe that by staying ahead of the curve and embracing
                change, we can help our clients stay ahead of competition.
              </p>
              <ul className="list-unstyled check-list mt-4">
                <li className="mb-2">
                  <i className="fa fa-check-circle" />
                  <strong>Dramatically re-engineer</strong> value added IT
                  system.
                </li>
                <li className="mb-2">
                  <i className="fa fa-check-circle" />
                  <strong>Highlight</strong> any unique selling points or
                  differentiators.
                </li>
                <li className="mb-2">
                  <i className="fa fa-check-circle" />
                  <strong>Incorporate visuals</strong> such as team photos
                  shots.
                </li>
              </ul>
              <a href="#" className="btn btn-primary mt-3">
                Discover More <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
