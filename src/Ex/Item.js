import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="container px-5">
        <div className="row gx-5">
          <div className="col-4 mb-5">
            <div className="bg-light text-center p-4">
              <h3>Fresh new layout</h3>
              <p>
                With Bootstrap 5, we've created a fresh new layout for this
                template!
              </p>
            </div>
          </div>
          <div className="col-4 mb-5">
            <div className="bg-light text-center p-4">
              <h3>Free to download</h3>
              <p>
                As always, Start Bootstrap has a powerful collectin of free
                templates.
              </p>
            </div>
          </div>
          <div className="col-4 mb-5">
            <div className="bg-light text-center p-4">
              <h3>Jumbotron hero header</h3>
              <p>
                The heroic part of this template is the jumbotron hero header!
              </p>
            </div>
          </div>
          <div className="col-4 mb-5">
            <div className="bg-light text-center p-4">
              <h3>Feature boxes</h3>
              <p>
                We've created some custom feature boxes using Bootstrap icons!
              </p>
            </div>
          </div>
          <div className="col-4 mb-5">
            <div className="bg-light text-center p-4">
              <h3>Simple clean code</h3>
              <p>
                We keep our dependencies up to date and squash bugs as they
                come!
              </p>
            </div>
          </div>
          <div className="col-4 mb-5">
            <div className="bg-light text-center p-4">
              <h3>A name you trust</h3>
              <p>
                Start Bootstrap has been the leader in free Bootstrap templates
                since 2013!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
