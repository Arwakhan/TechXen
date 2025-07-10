import React from "react";

const Pricing = () => {
  return (
    <div>
      <section className="pricing-section py-5">
        <div className="container">
          <div className="row">
            <h6 className="text-primary">Our Pricing Plan</h6>
            <h2 className="fw-bold mb-5">Explore Our Flexible Pricing Plans</h2>
            <div className="row g-3 justify-content-center">
              {/* Basic Plan */}
              <div className="col-md-4">
                <div className="pricing-card d-flex flex-column h-100 text-start position-relative px-5">
                  <h4 className="fw-bold">Basic Plan</h4>
                  <div className="price">
                    $9.9 <small className="mute">/month</small>
                  </div>
                  <p>
                    Ideal for startups and small businesses looking get started
                    essential IT services.
                  </p>
                  <hr className="white" />
                  <ul className="feature-list ps-0 py-3">
                    <li>
                      <i className="fa-solid fa-check me-2 text-primary " />
                      Network Monitoring
                    </li>
                    <li>
                      <i className="fa-solid fa-check me-2 text-primary " />
                      Helpdesk Support (Limited Hours)
                    </li>
                    <li>
                      <i className="fa-solid fa-check me-2 text-primary " />
                      Basic Cybersecurity Protection
                    </li>
                  </ul>
                  <a href="#" className="btn mt-auto darkblue">
                    Buy Now →
                  </a>
                </div>
              </div>
              {/* Standard Plan (Most Popular) */}
              <div className="col-md-4">
                <div className="pricing-card d-flex flex-column most-popular h-100 text-start position-relative px-5">
                  <div className="tag">Most Popular</div>
                  <h4 className="fw-bold">Standard Plan</h4>
                  <div className="price">
                    $19.9 <small className="mute">/month</small>
                  </div>
                  <p>
                    Perfect for growing businesses that require additional
                    features and support.
                  </p>
                  <hr />
                  <ul className="feature-list ps-0 py-3">
                    <li>
                      <i className="fa-solid fa-check me-2 text-primary " />
                      24/7 Network Monitoring
                    </li>
                    <li>
                      <i className="fa-solid fa-check me-2 text-primary " />
                      Dedicated Helpdesk Support
                    </li>
                    <li>
                      <i className="fa-solid fa-check me-2 text-primary " />
                      Advance Cybersecurity Protection
                    </li>
                    <li>
                      <i className="fa-solid fa-check me-2 text-primary" />
                      Cloud Backup &amp; Recovery
                    </li>
                  </ul>
                  <a href="#" className="btn btn-light mt-auto white">
                    Buy Now →
                  </a>
                </div>
              </div>
              {/* Premium Plan */}
              <div className="col-md-4">
                <div className="pricing-card d-flex flex-column h-100 text-start position-relative px-5">
                  <h4 className="fw-bold">Premium Plan</h4>
                  <div className="price">
                    $9.9 <small className="mute">/month</small>
                  </div>
                  <p>
                    Tailored for larger enterprises with complex IT needs and
                    stringent security.
                  </p>
                  <hr className="white" />
                  <ul className="feature-list ps-0 py-3">
                    <li>
                      <i className="fa-solid fa-check me-2 text-primary " />
                      Customised Network Monitoring
                    </li>
                    <li>
                      <i className="fa-solid fa-check me-2 text-primary " />
                      Priority Helpdesk Support
                    </li>
                    <li>
                      <i className="fa-solid fa-check me-2 text-primary " />
                      Comprehensive Cybersecurity Suite
                    </li>
                    <li>
                      <i className="fa-solid fa-check me-2 text-primary " />
                      Disaster Recovery Planning &amp; Testing
                    </li>
                    <li>
                      <i className="fa-solid fa-check me-2 text-primary " />
                      Onsite Support (as needed)
                    </li>
                  </ul>
                  <a href="#" className="btn mt-auto  darkblue">
                    Buy Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
