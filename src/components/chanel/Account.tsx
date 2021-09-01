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
import MbProgressBar from "./MbProgressBar";
function Account({
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
            <div className="col-12 my-2 d-block d-xl-none px-0">
              <MbProgressBar step={step} />
            </div>
            <div className="col-xl-8 shade-Channel bg-white br-8 mt-2">
              <button
                onClick={Previous}
                type="submit"
                className="bg-trans border-0 text-left lh-1"
              >
                <img src={back_icon} height="30" alt="previous_icon" />
                <div className="d-purple font-weight-bold small d-md-block d-none">
                  Previous step
                </div>
              </button>
              <div className="row mx-auto px-lg-5 px-md-3">
                <div className="text-center mx-auto col-10 mt-2">
                  <h5 className="font-weight-bold">
                    Do you have an eBay account?
                  </h5>
                </div>
                <div className="text-left col-12 col-md-10 mx-auto">
                  <h6 className="font-weight-bold">
                    No eBay account? We will happily show you How to get
                    started!
                  </h6>
                </div>
                <div className="text-left col-12 col-md-10 mx-auto">
                  <div className="">
                    Before you start selling, you’ll need an eBay account. If
                    you don’t already have one, you’ll need to register. You can
                    choose between a personal or business account.
                  </div>
                </div>
                <div className="text-left col-12 col-md-10 mx-auto my-2">
                  <div className="">
                    If you plan to sell casually, like selling items you no
                    longer need or want, a personal account is the best option.
                    Pick a business account if you want to sell large
                    quantities, or have items that you’ve made or bought to
                    resell.
                  </div>
                </div>
                <div className="text-left col-12 col-md-10 mx-auto">
                  <div className="">
                    To get started, we set up a dedicated page that will show
                    you all you need to Know in order to set up the Amazon
                    account and the business seller program.
                  </div>
                </div>
                <div className="text-left col-12 col-md-10 mx-auto">
                  <a>
                    <div className="d-flex align-items-center d-blue">
                      <span className="font-weight-bold">
                        How to become an eBay seller
                      </span>
                    </div>
                  </a>
                </div>
                <div className="border-bottom mt-2 mb-lg-5  col-11 col-md-9 mx-auto"></div>
                <div className="mx-md-auto ml-auto mt-5 pt-lg-5 mb-2 text-center">
                  <button
                    onClick={Continue}
                    type="submit"
                    className="border-0 d-blue bg-trans mx-auto"
                  >
                    <div className="d-flex align-items-center">
                      <span className="font-weight-bold">
                        Yes, I do have an eBay account
                      </span>
                      <i className="fas fa-long-arrow-alt-right ml-2 fa-lg pt-1"></i>
                    </div>
                  </button>
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

export default Account;
