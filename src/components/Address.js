import React from 'react'

export default function Details() {
  return (
    <div className=" tab-content">

                        <div className="row">
                          <div className="col-sm-12">
                            <h4 className="info-text">
                              {" "}
                              Are you living in a nice area?{" "}
                            </h4>
                          </div>
                          <div className="col-sm-7 col-sm-offset-1">
                            <div className="form-group">
                              <label>Street Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="highcourt"
                              />
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-group">
                              <label>Street Number</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="09"
                              />
                            </div>
                          </div>
                          <div className="col-sm-5 col-sm-offset-1">
                            <div className="form-group">
                              <label>City</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Luckhnow..."
                              />
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="form-group">
                              <label>Country</label>
                              <br />
                              <select name="country" className="form-control">
                                <option value="Afghanistan">
                                  {" "}
                                  Afghanistan{" "}
                                </option>
                                <option value="Albania"> Albania </option>
                                <option value="Algeria"> Algeria </option>
                                <option value="American Samoa">
                                  {" "}
                                  American Samoa{" "}
                                </option>
                                <option value="Andorra"> Andorra </option>
                                <option value="Angola"> Angola </option>
                                <option value="Anguilla"> Anguilla </option>
                                <option value="Antarctica"> Antarctica </option>
                                <option value="...">...</option>
                              </select>
                            </div>
                          </div>
                        </div>
                     
    </div>
  )
}
