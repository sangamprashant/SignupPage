import React from "react";

export default function Button() {
  return (
    <div>
      <div className="wizard-footer height-wizard">
        <div className="pull-right">
          <input
            type="button"
            className="btn btn-next btn-fill btn-warning btn-wd btn-sm"
            name="next"
            value="Next"
            
          />
          <input
            type="button"
            className="btn btn-finish btn-fill btn-warning btn-wd btn-sm"
            name="finish"
            value="Finish"
          />
        </div>

        <div className="pull-left">
          <input
            type="button"
            className="btn btn-previous btn-fill btn-default btn-wd btn-sm"
            name="previous"
            value="Previous"
          />
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
