import React from "react";
import { useEffect } from "react";
import WOW from "wowjs";
const Project = () => {
  useEffect(() => {
    new WOW.WOW().init();
  });

  return (
    <div className="container-fluid">
      <br />
      <br />
      <br />
      <h6>Selected projects</h6>
      <div className="vertical" />
      <br />
      <div className="whitespace" />
      <div className="whitespace" />
      <div className="row">
        <div className="col-lg-8" />
        <div
          className="col-lg-4 project project1 wow fadeInUp"
          onclick="location.href='project.html'"></div>
      </div>
      <div className="whitespace" />
      <div className="row">
        <div
          className="col-lg-6 project project2 wow fadeInUp"
          onclick="location.href='project.html'"></div>
        <div className="col-lg-6" />
      </div>
      <div className="whitespace" />
      <div className="row">
        <div className="col-lg-7" />
        <div
          className="col-lg-4 project project3 wow fadeInUp"
          onclick="location.href='project.html'"></div>
        <div className="col-lg-1" />
      </div>
      <div className="whitespace" />
      <div className="row">
        <div className="col-lg-1" />
        <div
          className="col-lg-5 project project4 wow fadeInUp"
          onclick="location.href='project.html'"></div>
        <div className="col-lg-6" />
      </div>
      <div className="whitespace" />
    </div>
  );
};

export default Project;
