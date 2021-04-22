import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my projects
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services">
                  <span className="icon">
                    <i className="fas fa-recycle"></i>
                  </span>
                  <div className="desc">
                    <h3>Dawerha Website and Mobile App</h3>
                    <h5>Full-stack developer and scrum master</h5>
                    {/* <a href="https://reactjs.org/docs/getting-started.html"><i class="fab fa-react"></i></a>
                    <a href="https://nodejs.org/en/docs/"><i class="fab fa-node"></i></a>
                    <a href="https://www.youtube.com/watch?v=3MHyTKKjSnk&feature=youtu.be"><i class="fab fa-node"></i></a>
                    <a href="https://www.youtube.com/watch?v=3MHyTKKjSnk&feature=youtu.be"><i class="fab fa-react"></i></a> */}
                    <p>
                      This website aims to help our community to reduce waste in
                      the first place, and to encourage all citizens to acquire
                      the recycling behavior.
                    </p>
                    <span>
                      <a
                        className="btn btn-primary btn-learn"
                        href="https://www.youtube.com/watch?v=3MHyTKKjSnk&feature=youtu.be"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon-video3" />
                      </a>
                    </span>{" "}
                    <span>
                      <a
                        className="btn btn-primary btn-learn"
                        href="https://github.com/thesis-project-AASSR"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon-briefcase3" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="fas fa-car"></i>
                  </span>
                  <div className="desc">
                    <h3>CarSooq Website</h3>
                    <h5>Full-stack developer</h5>
                    <p>
                      Sellers (individuals or companies) can advertise their
                      cars which they want to sell. Wide web and a great
                      connection between buyers and sellers.
                    </p>
                    <span>
                      <a
                        className="btn btn-light btn-learn"
                        style={{
                          backgroundColor: "rgb(241, 170, 37)",
                          color: "white",
                        }}
                        href="https://youtu.be/ZWP-0lfmxLw"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon-video3" />
                      </a>
                    </span>{" "}
                    <span>
                      <a
                        className="btn btn-light btn-learn"
                        style={{
                          backgroundColor: "rgb(241, 170, 37)",
                          color: "white",
                        }}
                        href="https://github.com/Legacy-Project-CarSooq/carSooq"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon-briefcase3" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="far fa-handshake"></i>
                  </span>
                  <div className="desc">
                    <h3>Newsy Website</h3>
                    <h5>Full-stack developer and product owner</h5>
                    <p>
                      Our website offer you a place to share your thoughts,
                      news, interests.
                    </p>
                    <span>
                      <a
                        className="btn btn-light btn-learn"
                        style={{
                          backgroundColor: "rgb(221, 67, 88)",
                          color: "white",
                        }}
                        href="https://youtu.be/0Q_rsHv7wn8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon-video3" />
                      </a>
                    </span>{" "}
                    <span>
                      <a
                        className="btn btn-light btn-learn"
                        style={{
                          backgroundColor: "rgb(221, 67, 88)",
                          color: "white",
                        }}
                        href="https://github.com/GreenFieldProject/NewsyProject-ALLin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon-briefcase3" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
