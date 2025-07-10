import React from "react";
import logo from '../assets/header-logo1.png';

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-white pt-5 pb-3 mt-5">
        <div className="container ">
          <div className="row gy-4 justify-content-around">
            {/* Company Info */}
            <div className="col-md-6 col-lg-4 m-1">
              <img
                src={logo}
                alt="TechXen Logo"
                className="mb-3"
                style={{ width: 160 }}
              />
              <p className="text-muted lh-lg fw-semibold">
                At TechXen IT Solutions, we're dedicated to delivering
                innovative technology solutions tailored to meet the unique
                needs of businesses like yours.
              </p>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-dark fs-5 socials">
                  <i className="fab fa-linkedin-in " />
                </a>
                <a href="#" className="text-dark fs-5 socials">
                  <i className="fab fa-x-twitter " />
                </a>
                <a href="#" className="text-dark fs-5 socials">
                  <i className="fab fa-youtube " />
                </a>
                <a href="#" className="text-dark fs-5 socials">
                  <i className="fab fa-instagram " />
                </a>
              </div>
            </div>
            {/* Services */}
            <div className="col-md-6 col-lg-3">
              <h5 className="fw-bold mb-3">Service We Offer</h5>
              <ul className="list-unstyled text-muted">
                <li className="fw-semibold lh-lg f-li">
                  Cloud Computing Solution
                </li>
                <li className="fw-semibold lh-lg f-li">
                  Cybersecurity &amp; Compliance
                </li>
                <li className="fw-semibold lh-lg f-li">Software Development</li>
                <li className="fw-semibold lh-lg f-li">
                  IT Consulting &amp; Support
                </li>
              </ul>
            </div>
            {/* Useful Links */}
            <div className="col-md-6 col-lg-2">
              <h5 className="fw-bold mb-3">Useful Links</h5>
              <ul className="list-unstyled text-muted">
                <li className="fw-semibold lh-lg f-li">About Us</li>
                <li className="fw-semibold lh-lg f-li">Our Services</li>
                <li className="fw-semibold lh-lg f-li">Blog &amp; News</li>
                <li className="fw-semibold lh-lg f-li">Brand assets</li>
                <li className="fw-semibold lh-lg f-li">Contact Us</li>
              </ul>
            </div>
            {/* Contact Info */}
            <div className="col-md-6 col-lg-2">
              <h5 className="fw-bold mb-3">Contact Us</h5>
              <ul className="list-unstyled text-muted">
                <li className="fw-semibold lh-lg f-li">
                  <i className="fas fa-phone me-2" /> 0500 222 333
                </li>
                <li className="fw-semibold lh-lg f-li">
                  <i className="fas fa-phone-alt me-2" /> 03 5658 8547
                </li>
                <li className="fw-semibold lh-lg f-li">
                  <i className="fas fa-envelope me-2" /> admin@techxen.org
                </li>
                <li className="fw-semibold lh-lg f-li">
                  <i className="fas fa-globe me-2" /> www.techxen.org
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="row border-top mt-4 pt-3">
            <div className="col-md-6 text-muted">
              Copyright ©2024 TechXen. All Rights Reserved
            </div>
            <div className="col-md-6 text-md-end mt-2 mt-md-0">
              <a href="#" className="text-muted me-3">
                Terms &amp; Conditions
              </a>
              <a href="#" className="text-muted">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
