import React from "react";
import { Container, Input, Radio } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import back_icon from "../../assets/channel/flags/back.png";
import ProgressBar from "./ProgressBar";
import MbProgressBar from "./MbProgressBar";
function AccountConnect({
  nextStep,
  handleChangeApi,
  values,
  step,
  prevStep,
}: any) {
  const Continue = (e: any) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e: any) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <Container component="main" maxWidth="lg">
      <div>
        <form>
          <div className="row mx-auto">
            <div className="col-12 my-2 d-block d-xl-none px-0">
              <MbProgressBar step={step} />
            </div>
            <div className="col-xl-8 shade-Channel bg-white br-8 mt-3">
              <button
                onClick={Previous}
                type="submit"
                className="bg-trans border-0 text-left lh-1"
              >
                <img src={back_icon} height="30" alt="previous_icon" />
                <div className="d-purple font-weight-bold small">
                  Previous step
                </div>
              </button>
              <div className="row mx-auto px-lg-5 px-md-3">
                <div className="text-center mx-auto col-md-12 px-0 px-md-2">
                  <h5 className="font-weight-bold mb-0">
                    How do you want HGR to connect to Your eBay account?
                  </h5>
                </div>
                <div className="text-center col-12 col-md-10 mx-auto">
                  <i className="font-weight-bold">
                    *You can change this setting later on
                  </i>
                </div>

                <div className="col-md-10 mx-auto px-md-3 px-0">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                      value={"api"}
                      onChange={(e) => handleChangeApi("easy")}
                    />
                    <div className="panel panel-default card-input shade-card br-8 my-1">
                      <div className="d-flex justify-content-between">
                        <div className=" font-weight-bold text-dark">
                          With API
                        </div>
                        <div className="text-success">Easy</div>
                      </div>
                      <div className="panel-body">
                        <div className="">
                          We automatically connect to eBay using their official
                          API.
                        </div>
                        <div>- Easier to get started</div>
                        <div>- Fully automated</div>
                        <div>- Officially supported by eBay</div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="col-md-10 mx-auto px-md-3 px-0">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                      value={"api"}
                      onChange={(e) => handleChangeApi("advance")}
                    />
                    <div className="panel panel-default card-input shade-card br-8 my-1">
                      <div className="d-flex justify-content-between">
                        <div className="font-weight-bold text-dark">
                          With API
                        </div>
                        <div className="d-blue">
                          <i>Advance</i>
                        </div>
                      </div>
                      <div className="panel-body">
                        <div className="mb-md-1">
                          We update your store simulating manual interaction. We
                          don’t connect to eBay’s API.
                        </div>
                        <div className="d-flex align-items-center">
                          <input
                            value="end"
                            type="radio"
                            name="extension"
                            className="w-fit mr-2"
                          />
                          <span className="d-purple">
                            You will run the extension on your own computer
                          </span>
                        </div>
                        <div className="m-1 lh-1">
                          <i>
                            *You need to keep your computer on at all times,
                            with our non api extension connected to your eBay
                            account.
                          </i>
                        </div>
                        <div className="d-flex align-items-center">
                          <input
                            value="end"
                            type="radio"
                            name="extension"
                            className="w-fit mr-2"
                          />
                          <span className="d-purple">
                            We will run the extension on our servers
                            (+£9/month).
                          </span>
                        </div>
                        <div className="m-1 lh-1">
                          <i>
                            *you don’t need to worry about keeping your computer
                            on.
                          </i>
                        </div>
                        <div className="font-weight-bold">
                          Why do we use this extension?
                        </div>
                        <div className="m-1">
                          eBay is becoming very strict with seller accounts. Our
                          No API extension Prevents them from detecting the
                          connection of an automated system. See our tutorial
                          here.
                          <i className="purple ml-1">See our tutorial here</i>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="mx-auto text-xl-center text-right col-12">
                  <button
                    onClick={Continue}
                    type="submit"
                    disabled={values.api == ""}
                    className={`border-0 bg-trans mx-auto ${
                      values.api == "" ? "btn-disbaled text-grey" : "d-blue"
                    } `}
                  >
                    <div className="d-flex align-items-center">
                      <span className="font-weight-bold">Next</span>
                      <i className="fas fa-long-arrow-alt-right ml-2 fa-lg pt-1"></i>
                    </div>
                  </button>
                </div>
                <div
                  className={`small w-100 mx-auto text-center font-weight-bold mb-1 text-danger lh-1 ${
                    values.api == "" ? "" : "d-none"
                  } `}
                >
                  <i>*Please select a way to connect</i>
                </div>
              </div>
            </div>
            <div className="col-xl-4 d-md-block d-none m-auto">
              <ProgressBar step={step} />
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default AccountConnect;
