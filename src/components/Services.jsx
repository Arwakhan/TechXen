import React from "react";
const Services = () => {
  return (
    <div>
      <section className="services-section py-5">
        <div className="container text-center">
          <p className="text-primary fw-semibold">Our Services</p>
          <h2 className="fw-bold mb-5">
            Empower Your Business With Our <br />
            Comprehensive Technology &amp; IT Solutions
          </h2>
          <div className="row d-flex justify-content-center g-2">
            <div className="col-md-6">
              <div className="service-card p-4 m-2 h-100 bg-white shadow-sm rounded">
                <div className="icon mb-3">
                  <i className="fa-solid fa-cloud fa-2x text-primary" />
                </div>
                <h6 className="fw-bold">Cloud Computing Solutions</h6>
                <p className="text-muted small">
                  Harness the power of the cloud with our robust cloud computing
                  solutions. Whether you're looking to migrate to the cloud,
                  optimize your existing infrastructure, or build scalable
                  cloud-native.
                </p>
                <a href="#" className="text-primary fw-semibold small">
                  Learn More
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-card p-4 m-2 h-100 bg-white shadow-sm rounded">
                <div className="icon mb-3">
                  <i className="fa-solid fa-database fa-2x text-primary" />
                </div>
                <h6 className="fw-bold">
                  CData Analytics &amp; Business Intelligence
                </h6>
                <p className="text-muted small">
                  Unlock actionable insights and drive informed decision-making
                  with our advanced data analytics and business intelligence
                  services. Our data-driven approach empowers you to harness the
                  full potential.
                </p>
                <a href="#" className="text-primary fw-semibold small">
                  Learn More
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-5 m-1">
            <div className="col-md-4">
              <div className="service-card p-4 m-2 h-100 bg-white shadow-sm rounded">
                <div className="icon mb-3">
                  <i className="fa-solid fa-shield-halved fa-2x text-primary" />
                </div>
                <h6 className="fw-bold">Cybersecurity &amp; Compliance</h6>
                <p className="text-muted small">
                  Protect your business from evolving cyber threats and ensure
                  compliance with industry regulations with comprehensive.
                </p>
                <a href="#" className="text-primary fw-semibold small">
                  Learn More
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card p-4 m-2 h-100 bg-white shadow-sm rounded">
                <div className="icon mb-3">
                  <i className="fa-solid fa-code fa-2x text-primary" />
                </div>
                <h6 className="fw-bold">Software Development</h6>
                <p className="text-muted small">
                  Transform your ideas into reality with our custom software
                  development and integration services whether you need.
                </p>
                <a href="#" className="text-primary fw-semibold small">
                  Learn More
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card p-4 m-2 h-100 bg-white shadow-sm rounded">
                <div className="icon mb-3">
                  <i className="fa-solid fa-headset fa-2x text-primary" />
                </div>
                <h6 className="fw-bold">IT Consulting &amp; Support</h6>
                <p className="text-muted small">
                  Navigate the complexities of the digital landscape with
                  confidence with our IT consulting and support services.
                </p>
                <a href="#" className="text-primary fw-semibold small">
                  Learn More
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
