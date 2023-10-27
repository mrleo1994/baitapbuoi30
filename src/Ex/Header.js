import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="bg-dark">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">
              Start Bootstrap
            </a>
            <div className="navbar-nav ml-auto">
              <a className="nav-link text-white" href="/">
                Home
              </a>
              <a className="nav-link" href="/about">
                About
              </a>
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
