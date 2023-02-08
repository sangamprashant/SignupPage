import React from "react";
import default_avatar from "./assets/img/default_avatar.png";

export default function Info() {
  return (
    <div className=" tab-content">
      <div className="row" >
        <h4 className="info-text">
          Let's start with the basic information (with validation)
        </h4>
        <div className="col-sm-4 col-sm-offset-1">
          <div className="picture-container">
            <div className="picture">
              <img
                src={default_avatar}
                alt=""
                className="picture-src"
                id="wizardPicturePreview"
                title=""
              />
              <input type="file" id="wizard-picture" />
            </div>
            <h6>Choose Picture</h6>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>
              First Name <small>(required)</small>
            </label>
            <input
              name="firstname"
              type="text"
              className="form-control"
              placeholder="Prashant..."
            />
          </div>
          <div className="form-group">
            <label>
              Last Name <small>(required)</small>
            </label>
            <input
              name="lastname"
              type="text"
              className="form-control"
              placeholder="Srivastav..."
            />
          </div>
          
        </div>

        <div
          className="col-sm-10 col-sm-offset-1"
          style={{ paddingLeft: "17px" }}
        >
          <div className="form-group">
            <label>
              Email <small>(required)</small>
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="prashant@gmail.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
