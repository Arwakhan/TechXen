import React from "react";
import test_big from "../assets/tes1-big-img.png";
import test_small from "../assets/tes1-smoll-img.png";

const Testimonals = () => {
  return (
    <div>
      <section className="testimonial-section px-5">
        <div className="container">
          <p className="text-primary fw-semibold mb-1">Testimonials</p>
          <h2 className="fw-semibold mb-5 fs-1">
            Discover What Our Clients Have
            <br />
            To Say About Us
          </h2>
          <div
            className="row rounded-3"
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <div className="col-md-8 p-5">
              <h4 className="fs-2 fw-semibold text-start">
                What Our Clients Are Saying
              </h4>
              <p className="text-muted fst-normal fs-4 text-start my-4">
                "The team at TechXen went above and beyond to understand our
                business needs and deliver a tailored IT solution that exceeded
                our expectations. Their expertise and dedication, and we
                couldn't be happier with the results."
              </p>
              <div className="d-flex align-items-center mt-4">
                <img
                  src={test_small}
                  alt="client"
                  className="client-img img-fluid"
                />
                <div className="p-2 lh-1 mt-3">
                  <p className="fw-semibold fs-5 text-start">
                    Kelly Williamson
                  </p>
                  <p className="text-muted small text-start">Client</p>
                </div>
              </div>
              <div className="justify-content-end d-flex">
                <button className="arrow-btn">
                  <i className="fas fa-arrow-left" />
                </button>
                <button className="arrow-btn">
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
            <div className="col-md-4 p-5">
              <img src={test_big} alt className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonals;
