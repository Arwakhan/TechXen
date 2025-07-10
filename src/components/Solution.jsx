import React from "react";
import solution_img2 from "../assets/solution-img2.png";

const Solution = () => {
  return (
    <div>
      <section className="solution p-5" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div  className="row align-items-center"   >
            {/* Left Content */}
            <div className="col-lg-6 py-5">
              <p className="text-primary fw-semibold">Best IT Solution</p>
              <h1 className="fw-bold mb-4">
                Let's Elevate Your Business
                <br />
                With Strategic IT Solutions
              </h1>
              <p className="text-muted mb-4">
                At TechXen, we understand that every business is unique, which
                is why we offer a range of flexible IT solutions designed to
                address your specific challenges and goals.
              </p>
              {/* Services */}
              <div className="d-flex mb-4">
                <div className="icon-circle me-3">
                  <i className="fas fa-wifi fa-lg text-primary" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">
                    Network Infrastructure Solutions
                  </h5>
                  <p className="text-muted mb-0">
                    Build a reliable and secure network infrastructure that
                    supports your business operations enables seamless
                  </p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="icon-circle me-3">
                  <i className="fas fa-cogs fa-lg text-primary" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Managed IT Services</h5>
                  <p className="text-muted mb-0">
                    Focus on your core business activities while we take care of
                    your IT needs with our managed IT services.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="icon-circle me-3">
                  <i className="fas fa-database fa-lg text-primary" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">
                    Data Backup &amp; Disaster Recovery
                  </h5>
                  <p className="text-muted mb-0">
                    Protect your critical business data and ensure business
                    continuity with our data backup and disaster solution.
                  </p>
                </div>
              </div>
              <a href="#" className="btn btn-primary rounded-pill px-4">
                Discover More <i className="fas fa-arrow-right ms-2" />
              </a>
            </div>
            {/* Right Images */}
            <div className="col-lg-6 mt-5 mt-lg-0 py-5">
              <img
                src={solution_img2}
                className="img-fluid"
                alt="Image 1"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
