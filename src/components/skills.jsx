import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Skills</span>
                <h2 className="colorlib-heading">Technical Skills</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 text-center">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                  style={{ color: "#FF4500" }}
                >
                  HTML5
                </a>
              </div>

              <div className="col-md-4 text-center">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  style={{ color: "rgb(221, 67, 88)" }}
                >
                  CSS
                </a>
              </div>

              <div className="col-md-4 text-center ">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  style={{ color: "green" }}
                >
                  JavaScript
                </a>
              </div>
            </div>
            <br />
            <br />

            <div className="row">
              <div className="col-md-4 text-center">
                <a
                  href="https://reactjs.org/docs/getting-started.html"
                  style={{ color: "#00cccc" }}
                >
                  React
                </a>
              </div>

              <div className="col-md-4 text-center">
                <a
                  href="https://getbootstrap.com/docs/4.1/getting-started/introduction/"
                  style={{ color: "#330066" }}
                >
                  Bootstrap
                </a>
              </div>

              <div className="col-md-4 text-center ">
                <a href="https://docs.mongodb.com/" style={{ color: "black" }}>
                  MongoDB
                </a>
              </div>
            </div>
            <br />
            <br />

            <div className="row">
              <div className="col-md-4 text-center">
                <a href="https://dev.mysql.com/doc/" style={{ color: "black" }}>
                  MySQL
                </a>
              </div>

              <div className="col-md-4 text-center">
                <a href="https://nodejs.org/en/docs/" style={{ color: "red" }}>
                  Node.js
                </a>
              </div>

              <div className="col-md-4 text-center">
                <a href="https://expressjs.com/" style={{ color: "blue" }}>
                  Express
                </a>
              </div>
            </div>
            <br />
            <br />

            <div className="row">
              <div className="col-md-4 text-center">
                <a href="https://jquery.com/" style={{ color: "green" }}>
                  jQuery
                </a>
              </div>

              <div className="col-md-4 text-center">
                <a
                  href="https://reactnative.dev/docs/getting-started"
                  style={{ color: "blue" }}
                >
                  React Native
                </a>
              </div>

              <div className="col-md-4 text-center ">
                <a href="https://angular.io/docs" style={{ color: "red" }}>
                  Angular
                </a>
              </div>
            </div>
            <br />
          </div>
        </section>
      </div>
    );
  }
}
