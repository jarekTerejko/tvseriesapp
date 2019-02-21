import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="main-content">
          <Main />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
