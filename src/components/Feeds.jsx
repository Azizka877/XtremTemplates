import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./feeds.css";

export const Feeds = () => {
  return (
    <div className="container feed">
      <span className="fs-3 fw-bold">Feeds</span> <br />
      <p>Widgets you can use</p>
      <div className="row">
        <div className="col-sm-12 mb-4 col-md-12 col-12 d-flex justify-items-center justify-content-between">
          <div className="ms-2">
            <div className="m-b-0 icon1 fw-bold fs-5 text-start">
              <i className="bi bi-bell"></i>
            </div>
          </div>
          <div className="text mt-2">Lorem ipsum dolor sit amet </div>
          <div className="time m-2">6h dernier</div>
        </div>
        <div className="col-sm-12 mb-4 col-md-12 col-12 d-flex justify-items-center justify-content-between">
          <div className="ms-2">
            <div className="m-b-0 icon2 fw-bold fs-5 text-start">
              <i className="bi bi-bag-dash"></i>
            </div>
          </div>
          <div className="text mt-1 m-2">Lorem ipsum dolor sit amet </div>
          <div className="time">6h denire</div>
        </div>
        <div className="col-sm-12 mb-4 col-md-12 col-12 d-flex justify-items-center justify-content-between">
          <div className="ms-2">
            <div className="m-b-0 icon3 fw-bold fs-5 text-start">
              <i className="bi bi-bank"></i>
            </div>
          </div>
          <div className="text mt-1 m-2">Lorem ipsum dolor sit amet </div>
          <div className="time">6h denire</div>
        </div>
        <div className="col-sm-12 mb-4 col-md-12 col-12 d-flex justify-items-center justify-content-between">
          <div className="ms-2">
            <div className="m-b-0 icon4 fw-bold fs-5 text-start">
              <i className="bi bi-bookmarks"></i>
            </div>
          </div>
          <div className="text mt-1 m-2">Lorem ipsum dolor sit amet </div>
          <div className="time">6h denire</div>
        </div>
        <div className="col-sm-12 mb-4 col-md-12 col-12 d-flex justify-items-center justify-content-between">
          <div className="ms-2">
            <div className="m-b-0 icon5 fw-bold fs-5 text-start">
              <i className="bi bi-bell"></i>
            </div>
          </div>
          <div className="text mt-1 mt-2">Lorem ipsum dolor sit amet </div>
          <div className="time">6h denire</div>
        </div>
        <div className="col-sm-12 mb-4 col-md-12 col-12 d-flex justify-items-center justify-content-between">
          <div className="ms-2">
            <div className="m-b-0 icon6 fw-bold fs-5 text-start">
              <i className="bi bi-bell"></i>
            </div>
          </div>
          <div className="text mt-1 m-2">Lorem ipsum dolor sit amet </div>
          <div className="time">6h denire</div>
        </div>
      </div>
    </div>
  );
};
