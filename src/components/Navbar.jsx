import React from "react";
import "../components/style.css";
import logo from "../assets/header-logo1.png";

const Navbar = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-primary text-white py-1 text-center small">
        A Professional Technology &amp; IT Solution Company Based On World
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <img src={logo} alt="TechXen" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              {/* home dropdown*/}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              {/* about dropdown */}
              <li className="nav-item dropdown position-relative">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="projectDropdown"
                  role="button"
                >
                  About
                </a>
                <ul
                  className="dropdown-menu custom-dropdown shadow"
                  aria-labelledby="projectDropdown"
                >
                  <li className="dropdown-item d-flex justify-content-between align-items-center">
                    About - Light
                    <i className="text-muted" />
                  </li>
                  <li className="dropdown-item d-flex justify-content-between align-items-center">
                    About - Dark
                    <i className="text-muted" />
                  </li>
                </ul>
              </li>
              {/* services dropdown */}
              <li className="nav-item dropdown position-relative">
                <a className="nav-link dropdown-toggle" href="#">
                  Service
                </a>
                {/* First Level Dropdown */}
                <ul className="dropdown-menu custom-dropdown shadow">
                  {/* First Submenu: Project */}
                  <li className="dropdown-submenu position-relative">
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Project <i className="fas fa-chevron-right text-muted" />
                    </a>
                    {/* Second Level */}
                    <ul className="dropdown-menu custom-submenu">
                      <li className="dropdown-submenu position-relative">
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Light{" "}
                          <i className="fas fa-chevron-right text-muted" />
                        </a>
                        {/* Third Level */}
                        <ul className="dropdown-menu custom-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Services - Light
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu position-relative">
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Dark <i className="fas fa-chevron-right text-muted" />
                        </a>
                        {/* Third Level */}
                        <ul className="dropdown-menu custom-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Services - Dark
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* Second Submenu: Single Project */}
                  <li className="dropdown-submenu position-relative">
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Single Services{" "}
                      <i className="fas fa-chevron-right text-muted" />
                    </a>
                    {/* Second Level */}
                    <ul className="dropdown-menu custom-submenu">
                      <li className="dropdown-submenu position-relative">
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Light{" "}
                          <i className="fas fa-chevron-right text-muted" />
                        </a>
                        {/* Third Level */}
                        <ul className="dropdown-menu custom-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Services Left - Light
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Services Right - Light
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Services Details - Light
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu position-relative">
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Dark <i className="fas fa-chevron-right text-muted" />
                        </a>
                        {/* Third Level */}
                        <ul className="dropdown-menu custom-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Services Left - Dark
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Services Right - Dark
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Services Details - Dark
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* pages dropdown */}
              <li className="nav-item dropdown position-relative mega-menu-parent">
                <a className="nav-link dropdown-toggle" href="#">
                  Pages
                </a>
                <div className="mega-menu shadow">
                  <div className="row p-4">
                    <div className="col-md-3">
                      <h6 className="mega-title">Our Services</h6>
                      <a className="dropdown-item" href="#">
                        Service
                      </a>
                      <a className="dropdown-item" href="#">
                        Details Left
                      </a>
                      <a className="dropdown-item" href="#">
                        Details Right
                      </a>
                      <a className="dropdown-item" href="#">
                        Single Details
                      </a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="mega-title">News Letter</h6>
                      <a className="dropdown-item" href="#">
                        Blog
                      </a>
                      <a className="dropdown-item" href="#">
                        Blog Sidebar
                      </a>
                      <a className="dropdown-item" href="#">
                        Details Left
                      </a>
                      <a className="dropdown-item" href="#">
                        Details Right
                      </a>
                      <a className="dropdown-item" href="#">
                        Single Details
                      </a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="mega-title">Page's</h6>
                      <a className="dropdown-item" href="#">
                        About Us
                      </a>
                      <a className="dropdown-item" href="#">
                        Contact Us
                      </a>
                      <a className="dropdown-item" href="#">
                        Our Team
                      </a>
                      <a className="dropdown-item" href="#">
                        Testimonial
                      </a>
                      <a className="dropdown-item" href="#">
                        ERROR 404
                      </a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="mega-title">Our Project's</h6>
                      <a className="dropdown-item" href="#">
                        Project
                      </a>
                      <a className="dropdown-item" href="#">
                        Details Left
                      </a>
                      <a className="dropdown-item" href="#">
                        Details Right
                      </a>
                      <a className="dropdown-item" href="#">
                        Single Details
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              {/* blog dropdown */}
              <li className="nav-item dropdown position-relative">
                <a className="nav-link dropdown-toggle" href="#">
                  Blog
                </a>
                {/* First Level Dropdown */}
                <ul className="dropdown-menu custom-dropdown shadow">
                  {/* First Submenu: Project */}
                  <li className="dropdown-submenu position-relative">
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Blog <i className="fas fa-chevron-right text-muted" />
                    </a>
                    {/* Second Level */}
                    <ul className="dropdown-menu custom-submenu">
                      <li className="dropdown-submenu position-relative">
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Light{" "}
                          <i className="fas fa-chevron-right text-muted" />
                        </a>
                        {/* Third Level */}
                        <ul className="dropdown-menu custom-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Blog - Light
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Blog Sidebar - Light
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu position-relative">
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Dark <i className="fas fa-chevron-right text-muted" />
                        </a>
                        {/* Third Level */}
                        <ul className="dropdown-menu custom-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Blog - Dark
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* Second Submenu: Single Project */}
                  <li className="dropdown-submenu position-relative">
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Single Blog{" "}
                      <i className="fas fa-chevron-right text-muted" />
                    </a>
                    {/* Second Level */}
                    <ul className="dropdown-menu custom-submenu">
                      <li className="dropdown-submenu position-relative">
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Light{" "}
                          <i className="fas fa-chevron-right text-muted" />
                        </a>
                        {/* Third Level */}
                        <ul className="dropdown-menu custom-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Details Left - Light
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Details Right - Light
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Blog Details - Light
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu position-relative">
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Dark <i className="fas fa-chevron-right text-muted" />
                        </a>
                        {/* Third Level */}
                        <ul className="dropdown-menu custom-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Details Left - Dark
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Details Right - Dark
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Blog Details - Dark
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* project dropdown */}
              <li className="nav-item dropdown position-relative">
                <a className="nav-link dropdown-toggle" href="#">
                  Project
                </a>
                {/* First Level Dropdown */}
                <ul className="dropdown-menu custom-dropdown shadow">
                  {/* First Submenu: Project */}
                  <li className="dropdown-submenu position-relative">
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Project <i className="fas fa-chevron-right text-muted" />
                    </a>
                    {/* Second Level */}
                    <ul className="dropdown-menu custom-submenu">
                      <li className="dropdown-submenu position-relative">
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Light{" "}
                          <i className="fas fa-chevron-right text-muted" />
                        </a>
                        {/* Third Level */}
                        <ul className="dropdown-menu custom-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Project - Light
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu position-relative">
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Dark <i className="fas fa-chevron-right text-muted" />
                        </a>
                        {/* Third Level */}
                        <ul className="dropdown-menu custom-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Project - Dark
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* Second Submenu: Single Project */}
                  <li className="dropdown-submenu position-relative">
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Single Project{" "}
                      <i className="fas fa-chevron-right text-muted" />
                    </a>
                    {/* Second Level */}
                    <ul className="dropdown-menu custom-submenu">
                      <li className="dropdown-submenu position-relative">
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Light{" "}
                          <i className="fas fa-chevron-right text-muted" />
                        </a>
                        {/* Third Level */}
                        <ul className="dropdown-menu custom-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Project Left - Light
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Project Right - Light
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Project Details - Light
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu position-relative">
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          Dark <i className="fas fa-chevron-right text-muted" />
                        </a>
                        {/* Third Level */}
                        <ul className="dropdown-menu custom-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Project Left - Dark
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Project Right - Dark
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Project Details - Dark
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex align-items-center ms-lg-3">
              <span className="me-3 text-primary fw-bold">
                <i className="bi bi-telephone" /> 124 (555) 5565
              </span>
              <a href="#" className="btn btn-primary">
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
