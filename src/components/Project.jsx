import React from 'react'
import project1 from '../assets/project-img1.png';
import project2 from '../assets/project-img2.png';
import project3 from '../assets/project-img3.png';
const Project = () => {
  return (
    <div>
       <section className="project-section py-5 bg-light">
  <div className="container">
    <div className="text-center mb-4">
      <span className="text-primary fw-semibold small">Our Project</span>
      <h2 className="fw-bold display-6 mt-2">Driving Success Through Innovative IT Solution Project</h2>
    </div>
    <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row justify-content-center">
            <div className="col-md-3 col-8">
              <img src={project1} className="d-block w-100 rounded" alt="Project 1" />
            </div>
            <div className="col-md-3 d-none d-md-block">
              <img src="/src/project-img3.png" className="d-block w-100 rounded" alt="Project 2" />
            </div>
            <div className="col-md-3 d-none d-md-block">
              <div className="position-relative">
                <img src="/src/project-img3.png" className="d-block w-100 rounded" alt="Project 3" />
                <div className="position-absolute bottom-0 start-0 bg-white p-2 m-2 rounded shadow">
                  <h6 className="mb-1 fw-bold">Enterprise Resource Planning Implementation</h6>
                  <a href="#" className="small text-primary fw-semibold">Learn More <i className="bi bi-arrow-up-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="row justify-content-center">
            <div className="col-md-3 col-8">
              <img src={project1} className="d-block w-100 rounded" alt="Project 4" />
            </div>
            <div className="col-md-3 d-none d-md-block">
              <img src={project2} className="d-block w-100 rounded" alt="Project 5" />
            </div>
            <div className="col-md-3 d-none d-md-block">
              <img src={project3} className="d-block w-100 rounded" alt="Project 6" />
            </div>
          </div>
        </div>
      </div>
      {/* Controls */}
      {/* Left Arrow */}
      <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
        <span className="custom-arrow d-flex align-items-center justify-content-center">
          <i className="fa-solid fa-arrow-left" />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      {/* Right Arrow */}
      <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
        <span className="custom-arrow d-flex align-items-center justify-content-center">
          <i className="fa-solid fa-arrow-right" />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project