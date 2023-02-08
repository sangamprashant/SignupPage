import React from "react";
import "./AccountType.css";

export default function AccountType() {
  return (
    <>
      <div class="tab-pane active" id="account">
        <h4 class="info-text"> What are you doing? (checkboxes) </h4>
        <div class="row" style={{ marginTop: "130px" }}>
          <section>
            <div class="tileAccount">
              <input type="checkbox" name="sports" id="sport1" />
              <label for="sport1">
                <i class="bi bi-r-square-fill"></i>
                <h6>Regular</h6>
              </label>
            </div>
            <div class="tileAccount">
              <input type="checkbox" name="sports" id="sport2" />
              <label for="sport2">
                <i class="bi bi-shop"></i>
                <h6>Sales</h6>
              </label>
            </div>
            <div class="tileAccount">
              <input type="checkbox" name="sports" id="sport3" />
              <label for="sport3">
                <i class="bi bi-prescription2"></i>
                <h6>Doctor</h6>
              </label>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
