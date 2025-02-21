"use client";
import React from "react";

export default function Analytics() {
  return (
    <section className="stata_main">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center text-center">
          <div className="col-lg-3 col-md-3 col-6 animate__animated animate__bounceInLeft">
            <h5 className="gradient-text">1341</h5>
            <p>Total Matches</p>
          </div>
          <div className="col-lg-3 col-md-3 col-6 animate__animated animate__bounceInUp">
            <h5 className="gradient-text">3051</h5>
            <p>Total Players</p>
          </div>
          <div className="col-lg-3 col-md-3 col-6 animate__animated animate__bounceInDown">
            <h5 className="gradient-text">2045</h5>
            <p>Active Players</p>
          </div>
          <div className="col-lg-3 col-md-3 col-6 animate__animated animate__bounceInRight">
            <h5 className="gradient-text">2451</h5>
            <p>Cups of Coffee</p>
          </div>
        </div>
      </div>
    </section>
  );
}
