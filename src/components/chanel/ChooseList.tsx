import React from "react";
import { Container } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import catalog_icon from "../../assets/channel/list/Group 2.png";
import manual_icon from "../../assets/channel/list/Group 147.png";
import bulk_icon from "../../assets/channel/list/Group 4.png";
import we_icon from "../../assets/channel/list/Group 148.png";
import back_icon from "../../assets/channel/flags/back.png";
import ProgressBar from "./ProgressBar";
function ChooseList({
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
                <div className="text-center mx-auto col-md-6 mt-2 px-0 px-md-2">
                  <h5 className="font-weight-bold mb-0">
                    Choose a way to list
                  </h5>
                </div>

                <div className="col-md-10 mx-auto mt-md-3 px-md-3 px-0">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                    />
                    <div className="panel panel-default card-input shade-card br-8">
                      <div className="d-flex justify-content-around align-items-center">
                        <div className="">
                          <img
                            src={catalog_icon}
                            alt="icon"
                            className="w-100"
                          />
                        </div>
                        <div className="px-md-2">
                          <h5 className="font-weight-bold d-blue">Catalog</h5>
                          <div className="lh-1">
                            Choose your favourite supplier and we recommend
                            products for you.
                          </div>
                        </div>
                        <div className="">
                          <i className="fas d-blue fa-long-arrow-alt-right ml-2 fa-lg pt-1"></i>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="col-md-10 mx-auto mt-md-3 px-md-3 px-0">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                    />
                    <div className="panel panel-default card-input shade-card br-8">
                      <div className="d-flex justify-content-around align-items-center">
                        <div className="">
                          <img src={manual_icon} alt="icon" className="w-100" />
                        </div>
                        <div className="px-md-2">
                          <h5 className="font-weight-bold d-blue">
                            Manual listing
                          </h5>
                          <div className="lh-1">
                            Use our browser extension to add listings directly
                            from the source.
                          </div>
                        </div>
                        <div className="">
                          <i className="fas d-blue fa-long-arrow-alt-right ml-2 fa-lg pt-1"></i>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="col-md-10 mx-auto mt-md-3 px-md-3 px-0">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                    />
                    <div className="panel panel-default card-input shade-card br-8">
                      <div className="d-flex justify-content-around align-items-center">
                        <div className="">
                          <img src={bulk_icon} alt="icon" className="w-100" />
                        </div>
                        <div className="px-md-2">
                          <h5 className="font-weight-bold d-blue">
                            Bulk listing
                          </h5>
                          <div className="lh-1">
                            List as many items as you want by adding urls from
                            different sources.
                          </div>
                        </div>
                        <div className="">
                          <i className="fas d-blue fa-long-arrow-alt-right ml-2 fa-lg pt-1"></i>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="col-md-10 mx-auto mt-md-3 px-md-3 px-0">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                    />
                    <div className="panel panel-default card-input shade-card br-8">
                      <div className="d-flex justify-content-around align-items-center">
                        <div className="">
                          <img src={we_icon} alt="icon" className="w-100" />
                        </div>
                        <div className="px-md-2">
                          <h5 className="font-weight-bold d-blue">
                            We list for you
                          </h5>
                          <div className="lh-1">
                            No idea what to list? We will pick the best selling
                            items for you!
                          </div>
                          <button className="bg-success border-0 text-white br-8 mt-2">
                            For only £9.99
                          </button>
                        </div>
                        <div className="">
                          <i className="fas d-blue fa-long-arrow-alt-right ml-2 fa-lg pt-1"></i>
                        </div>
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
                      Fininsh
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

export default ChooseList;
