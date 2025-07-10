import React from "react";
import '../components/style.css'
import Blog1 from '../assets/blog-img1.png';
import Blog2 from '../assets/blog-img2.png';
import Blog3 from '../assets/blog-img3.png';
const Blogs = () => {
  return (
    <div>
      <section className="blogs py-5">
        <div className="container text-center">
          <p className="text-primary fw-semibold">Blog &amp; Latest News</p>
          <h2 className="fw-bold mb-5">Latest News &amp; Blog</h2>
          <div className="row g-0">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="blog-card h-100">
                <img src={Blog1} alt="lock" />
                <div className="p-3 text-start">
                  <div className="d-flex align-items-center blog-meta mb-2">
                    <span>
                      <i className="fas fa-user icon-spaced" /> John William
                    </span>
                    <span className="ms-3">
                      <i className="fas fa-calendar icon-spaced" /> Feb 25, 24
                    </span>
                  </div>
                  <p className="blog-title">
                    Demystifying Blockchain: How It's Revolutionising
                    Industries.
                  </p>
                  <a href="#" className="btn blog-btn mt-2">
                    Learn More <i className="fas fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="blog-card h-100">
                <img src={Blog2} alt="cyber" />
                <div className="p-3 text-start">
                  <div className="d-flex align-items-center blog-meta mb-2">
                    <span>
                      <i className="fas fa-user icon-spaced" /> John William
                    </span>
                    <span className="ms-3">
                      <i className="fas fa-calendar icon-spaced" /> Feb 25, 24
                    </span>
                  </div>
                  <p className="blog-title">
                    Cybersecurity Essentials: Protecting Your Business
                  </p>
                  <a href="#" className="btn blog-btn mt-2">
                    Learn More <i className="fas fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-6 col-lg-4 w-80">
              <div className="blog-card h-100">
                <img src={Blog3} alt="team" />
                <div className="p-3 text-start">
                  <div className="d-flex align-items-center blog-meta mb-2">
                    <span>
                      <i className="fas fa-user icon-spaced" /> John William
                    </span>
                    <span className="ms-3">
                      <i className="fas fa-calendar icon-spaced" /> Feb 25, 24
                    </span>
                  </div>
                  <p className="blog-title">
                    The Future of Work: Embracing Remote Collaboration Tools
                  </p>
                  <a href="#" className="btn blog-btn mt-2">
                    Learn More <i className="fas fa-arrow-right ms-1" />
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

export default Blogs;
