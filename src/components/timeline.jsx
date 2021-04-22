import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          RBK Jordan's Full Stack Software Engineering program{" "}
                          <span>2020-2021</span>
                        </h2>
                        <p>
                          It is about 20 weeks dilevered in 2 phases. Phase 1 is
                          6 weeks, it is an introduction to computer programming
                          and Javascript. Phase 2 is Hack Reactor's 13-week full
                          stack program. It is an immersive program, delivering
                          high-value skills (technical, non-technical) and
                          autonomous learning ability.
                        </p>
                        <p>
                          3 full stack projects had been done through the second
                          phase, all of them were with great teams. Learning new
                          technologies and implementing them in projects is a
                          perfect way to be a successful software engineer!
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Structural Design Engineer <span>2019-2020</span>
                        </h2>
                        <p>
                          Trainee at Dar Al Omran Planning Architecture
                          Engineering company. The main goal was applying
                          theoretical knowledge that had been taken in the
                          university into practical work. Since the training was
                          at office, the design engineer must take place using
                          software programs like Proton, Etabs, Safe and
                          AutoCAD. Having a creative skills in using the
                          engineering software programs and learning design
                          technologies following criteria due to the Jordanian
                          code.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Math and Physics Tutor <span>2015-2020</span>
                        </h2>
                        <p>
                          Working as private teacher, teaching Math and Physics
                          for national and international educational systems,
                          Preparing primary and secondary students individually
                          for tests and improving their educational skills.
                          Also, Solving complex problems of the fundamental Math
                          and Physics which helped me to improve my
                          understanding of any problem and improving my
                          mathematical skills.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Civil Engineering at University Of Jordan{" "}
                          <span>2015-2020</span>
                        </h2>
                        <p>
                          Pursuing my under-graduation studies with major in
                          Civil Engineering. Taking courses such as C++, Revit,
                          Safe, Etabs and other engineering softwares over the
                          years. Also, attending conferences like Solid Waste
                          Management in Jordan University of Science and
                          Technology. Graduated with Very Good GPA (3.26/4.00).
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
