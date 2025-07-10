import React from "react";

const Stats = () => {
  return (
    <div>
      <section className="stats">
        <div className="container">
          <div className="row d-flex text-center parent">
            <div className="col-md-3">
              <div className="stat-box">
                <i className="bi bi-award text-primary fs-2" />
                <h5 className="fw-bold mt-2">4x Award Winning</h5>
                <p className="text-muted small mb-0">Always ready to support</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-box">
                <i className="bi bi-briefcase text-primary fs-2" />
                <h5 className="fw-bold mt-2">2.5k Case Solved</h5>
                <p className="text-muted small mb-0">IT Solution case solved</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-box">
                <i className="bi bi-bar-chart text-primary fs-2" />
                <h5 className="fw-bold mt-2">150k Optimisation</h5>
                <p className="text-muted small mb-0">Keywords into online</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-box">
                <i className="bi bi-award text-primary fs-2" />
                <h5 className="fw-bold mt-2">4x Award Winning</h5>
                <p className="text-muted small mb-0">Always ready to support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
