import React from "react";
import { Container } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import back_icon from "../../assets/channel/flags/back.png";
import ProgressBar from "./ProgressBar";
function UserName({
  nextStep,
  handleChange,
  values,
  step,
  flag,
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
            <div className="col-lg-8 shade-Channel bg-white br-8">
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
              <div className="row mx-auto px-lg-5 px-md-3 h-100">
                <div className="text-center mx-auto col-md-6 mt-2 px-0 px-md-2">
                  <h5 className="font-weight-bold mb-0">
                    What is your eBay username?
                  </h5>
                  div
                </div>
                <div className="text-center col-12 col-md-8 mx-auto">
                  <div>
                    Please make sure that you enter your eBay{" "}
                    <span className="font-weight-bold">UserName</span> and not
                    your email address or store name.
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control bg-input-light mt-2"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="eBay username"
                    ></input>
                  </div>
                </div>

                <div className="mx-auto mt-md-5 pt-lg-5 mb-2 text-center col-12">
                  <button
                    onClick={Continue}
                    type="submit"
                    className="border-0 text-grey bg-trans mx-auto btn-disbaled"
                  >
                    <div className="d-flex align-items-center">
                      Next
                      <i className="fas fa-long-arrow-alt-right ml-2 fa-lg pt-1"></i>
                    </div>
                  </button>
                  <div className="text-danger small">
                    *Please select a platform on which you’d like to sell in
                    order to proceed.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-md-block d-none m-auto">
              <ProgressBar step={step} />
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default UserName;
