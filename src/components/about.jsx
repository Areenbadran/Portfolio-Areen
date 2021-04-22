import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>

                      <p>
                        An extremely passionate Software Engineer with Civil
                        Engineering background, who likes working with others,
                        writing elegant code and building user-friendly website.
                      </p>
                      <p>
                        The main story behind this career change is a C++
                        programming language course that had been taken in my
                        second year at University Of Jordan, so I decided to
                        complete in Software Engineering after graduation. And
                        that is why I could not become a Software Engineer
                        without Civil Engineering!
                      </p>
                    </div>
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
