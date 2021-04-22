import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import About from "./components/about";
import Timeline from "./components/timeline";
import Projects from "./components/projects";
import Skills from "./components/skills";


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
          <Home></Home>
          <About></About>
          <Timeline></Timeline>
          <Projects></Projects>
          <Skills></Skills>
          </div>
        </div>
      </div>
    );
  }
}

export default App;