import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside
            id="colorlib-aside"
            className="border js-fullheight"
            style={{ backgroundColor: "#FFFAFA" }}
          >
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/A86P00055.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Areen Badran</a>
              </h1>
              <h5 style={{ fontFamily: "unset" }}>
                Full-Stack Software Engineer
              </h5>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                  <li>
                    <a href="#projects" data-nav-section="projects">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#skills" data-nav-section="skills">
                      Technical skills
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="mailto:areenbadran9@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-mail" size="10px"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/areenbadran/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Areenbadran"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCd78ue-lL8_kj3oWiud4IsA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-youtube" />
                  </a>
                </li>
                {/* <li><a href="https://www.facebook.com/areenbadran" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li> */}
                {/* <li><a href="https://www.instagram.com/areenbadran/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li> */}
                <li>
                  <a
                    href="https://medium.com/@areenbadran9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-blogger2"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  {" "}
                  "I could not become a software engineer without civil
                  engineering"{" "}
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
