import React from "react";
import { Container } from "@material-ui/core";

import aus_flag from "../../assets/channel/flags/AU.png";
import ger_flag from "../../assets/channel/flags/DE.png";
import sp_flag from "../../assets/channel/flags/ES.png";
import fr_flag from "../../assets/channel/flags/FR.png";
import it_flag from "../../assets/channel/flags/IT.png";
import uk_flag from "../../assets/channel/flags/UK.png";
import us_flag from "../../assets/channel/flags/US.png";
import back_icon from "../../assets/channel/flags/back.png";
import ProgressBar from "./ProgressBar";
function AccountConnect({
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
              <div className="row mx-auto px-lg-5 px-md-3">
                <div className="text-center mx-auto col-md-6 mt-2">
                  <h5 className="font-weight-bold mb-0">
                    How do you want HGR to connect to Your eBay account?
                  </h5>
                </div>
                <div className="text-center col-12 col-md-10 mx-auto">
                  <i className="font-weight-bold">
                    *You can change this setting later on
                  </i>
                </div>

                <div className="col-md-10 mx-auto mt-md-3">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                    />
                    <div className="panel panel-default card-input shade-card br-8">
                      <div className="d-flex justify-content-between">
                        <div className=" font-weight-bold text-dark">
                          With API
                        </div>
                        <div className="text-success">Easy</div>
                      </div>
                      <div className="panel-body">
                        <div className="mb-md-3 mb-2">
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
                <div className="col-md-10 mx-auto mt-md-3">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                    />
                    <div className="panel panel-default card-input shade-card br-8">
                      <div className="d-flex justify-content-between">
                        <div className=" font-weight-bold text-dark">
                          With API
                        </div>
                        <div className="d-blue">
                          <i>Advance</i>
                        </div>
                      </div>
                      <div className="panel-body">
                        <div className="mb-md-3 mb-2">
                          We update your store simulating manual interaction. We
                          don’t connect to eBay’s API.
                        </div>
                        <div>- Easier to get started</div>
                        <div>- Fully automated</div>
                        <div>- Officially supported by eBay</div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="mx-auto mt-md-5 pt-lg-5 mb-2 text-center col-12">
                  <button
                    onClick={Continue}
                    type="submit"
                    className="border-0 text-grey bg-trans mx-auto btn-disbaled"
                  >
                    <div className="d-flex align-items-center">
                      Yes, I do have an eBay account
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

export default AccountConnect;
