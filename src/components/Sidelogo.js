import React from 'react';
import new_logo from "./assets/img/new_logo.png";

export default function Sidelogo() {
  return (
    <div>
      <a href="/">
          <div className="logo-container">
            <div className="logo">
              <img src={new_logo} alt="" />
            </div>
            <div className="brand">Prashant srivastav</div>
          </div>
        </a>

        <a
          href="/"
          class="made-with-mk"
        >
          <div class="brand">PS</div>
          <div class="made-with">
            Made with <strong>REACT</strong>
          </div>
        </a>

    </div>
  )
}
