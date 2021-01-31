import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li
                style={{
                  backgroundImage: "url(images/people-2591874_1280.webp)",
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h2 style={{ fontSize: "35px" }}>
                            I want to make things that make a difference...
                          </h2>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://drive.google.com/file/d/1GlsODQd7fZI1Uvb6ckWmaELJJ-5UOu0s/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Resume
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                style={{
                  backgroundImage: "url(images/people-2591874_1280.webp)",
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h2 style={{ fontSize: "35px" }}>
                            Building new stuff and working with other people is
                            my PASSION!
                          </h2>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/Areenbadran"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects
                              <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
