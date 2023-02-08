import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "./Button";


import Footer from "./Footer";
import "./Log.css";
export default function Log() {
  return (
    <>
      <div className="image-container set-full-height">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-sm-offset-2">
              <div className="wizard-container">
                <div className="card wizard-card" id="wizardProfile">
                  <form action="" method="">
                    <div className="wizard-header">
                      <h3>
                        <b>BUILD</b> YOUR PROFILE <br />
                        <small style={{ fontSize: "20px" }}>
                          This information will let us know more about you.
                        </small>
                      </h3>
                    </div>
                    <nav class="nav nav-pills wizard-navigation nav-justified">
                      <ul
                        class="nav-link "
                        aria-current="page"
                        style={{
                          display: "flex",
                          justifyContent: "space-between ",
                          textDecoration: "none",
                          alignItems: "baseline",
                          alignContent: "baseline",
                        }}
                      >
                        <li >
                          <Link className="un-line" to="/">Home</Link>
                        </li>
                        <li>
                          <Link className="un-line" to="acctounttype">Account</Link>
                        </li>
                        <li>
                          <Link className="un-line" to="address">Address</Link>
                        </li>
                      </ul>
                    </nav>
                    <Outlet />
<Button/>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
