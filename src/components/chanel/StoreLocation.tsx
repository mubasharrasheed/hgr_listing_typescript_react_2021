import React, { Props } from "react";
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
function StoreLocation({
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
  console.log(step, "storage");
  return (
    <Container component="main" maxWidth="lg">
      <div>
        <form>
          <div className="row mx-auto">
            <div className="col-12 my-2 d-block d-xl-none px-0">
              <MbProgressBar step={step} />
            </div>
            <div className="col-xl-8 shade-Channel bg-white br-8">
              <button
                onClick={Previous}
                type="submit"
                className="bg-trans border-0 text-left lh-1"
              >
                <img src={back_icon} height="30" alt="previous_icon" />
                <div className="d-purple font-weight-bold small d-xl-block d-none">
                  Previous step
                </div>
              </button>
              <div className="row mx-auto px-lg-5 px-md-3">
                <div className="text-center col-10 mt-2 mx-auto">
                  <h5 className="font-weight-bold">
                    Where is your store based?
                  </h5>
                </div>
                <div className="text-center col-12 col-md-10 mx-auto">
                  <h6 className="">
                    No worries! With the Ebay Global shipping program you will
                    be able to sell everywhere, we need to know the country your
                    eBay account is registered in.
                  </h6>
                </div>
                <div className="col-4 mb-2">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-flag d-none"
                    />
                    <div className="panel panel-default mx-auto w-fit m-0 p-0 card-input rounded-circle">
                      <img
                        src={aus_flag}
                        height="80"
                        width="80"
                        className=""
                        alt="flag"
                      />
                    </div>
                    <div className="panel-body text-center">Australia</div>
                  </label>
                </div>
                <div className="col-4 mb-2">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-flag d-none"
                    />
                    <div className="panel panel-default mx-auto w-fit m-0 p-0 card-input rounded-circle">
                      <img
                        src={ger_flag}
                        height="80"
                        width="80"
                        className=""
                        alt="flag"
                      />
                    </div>
                    <div className="panel-body text-center">Germany</div>
                  </label>
                </div>
                <div className="col-4 mb-2">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-flag d-none"
                    />
                    <div className="panel panel-default mx-auto w-fit m-0 p-0 card-input rounded-circle">
                      <img
                        src={sp_flag}
                        height="80"
                        width="80"
                        className=""
                        alt="flag"
                      />
                    </div>
                    <div className="panel-body text-center">Spain</div>
                  </label>
                </div>
                <div className="col-4 mb-2">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-flag d-none"
                    />
                    <div className="panel panel-default mx-auto w-fit m-0 p-0 card-input rounded-circle">
                      <img
                        src={fr_flag}
                        height="80"
                        width="80"
                        className=""
                        alt="flag"
                      />
                    </div>
                    <div className="panel-body text-center">France</div>
                  </label>
                </div>
                <div className="col-4 mb-2">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-flag d-none"
                    />
                    <div className="panel panel-default mx-auto w-fit m-0 p-0 card-input rounded-circle">
                      <img
                        src={it_flag}
                        height="80"
                        width="80"
                        className=""
                        alt="flag"
                      />
                    </div>
                    <div className="panel-body text-center">Italy</div>
                  </label>
                </div>
                <div className="col-4 mb-2">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-flag d-none"
                    />
                    <div className="panel panel-default mx-auto w-fit m-0 p-0 card-input rounded-circle">
                      <img
                        src={uk_flag}
                        height="80"
                        width="80"
                        className=""
                        alt="flag"
                      />
                    </div>
                    <div className="panel-body text-center">United Kingdom</div>
                  </label>
                </div>
                <div className="col-4 mb-2">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-flag d-none"
                    />
                    <div className="panel panel-default mx-auto w-fit m-0 p-0 card-input rounded-circle">
                      <img
                        src={us_flag}
                        height="80"
                        width="80"
                        className=""
                        alt="flag"
                      />
                    </div>
                    <div className="panel-body text-center">
                      United States of America
                    </div>
                  </label>
                </div>
                <div className="mx-auto mt-md-4 mb-2 text-center col-12">
                  <button
                    onClick={Continue}
                    type="submit"
                    className="border-0 text-grey bg-trans mx-auto btn-disbaled"
                  >
                    <div className="d-flex align-items-center">
                      Next{" "}
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
            <div className="col-xl-4 d-md-block d-none m-auto">
              <ProgressBar step={step} />
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default StoreLocation;
