import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Home from "./components/home";



class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
          <Home></Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;