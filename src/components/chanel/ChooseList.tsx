import React from "react";
import { Container } from "@material-ui/core";
import catalog_icon from "../../assets/channel/list/Group 2.png";
import manual_icon from "../../assets/channel/list/Group 147.png";
import bulk_icon from "../../assets/channel/list/Group 4.png";
import we_icon from "../../assets/channel/list/Group 148.png";
import back_icon from "../../assets/channel/flags/back.png";
import ProgressBar from "./ProgressBar";
import { useHistory } from "react-router-dom";
function ChooseList({
  nextStep,
  handleChangeList,
  values,
  step,
  prevStep,
}: any) {
  const history = useHistory();

  const handleRoute = () => {
    history.push("/home");
  };

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
            <div className="col-lg-8 shade-Channel bg-white br-8 mt-3">
              <button
                onClick={Previous}
                type="submit"
                className="bg-trans border-0 text-left lh-1"
              >
                <img src={back_icon} height="30" alt="previous_icon" />
                <div className="d-purple font-weight-bold small d-none d-md-block">
                  Previous step
                </div>
              </button>
              <div className="row mx-auto px-lg-5 px-md-3">
                <div className="text-center mx-auto col-md-6 px-0 px-md-2">
                  <h5 className="font-weight-bold">Choose a way to list</h5>
                </div>

                <div className="col-md-10 mx-auto col-6 px-md-3 px-0">
                  <label className="mb-0">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                      value={"catalog"}
                      onChange={(e) => handleChangeList("catalog")}
                    />
                    <div className="panel panel-default card-input shade-card br-8 my-1 py-2">
                      <div className="d-md-flex d-block justify-content-around align-items-center text-center text-md-left">
                        <div className="">
                          <img
                            src={catalog_icon}
                            alt="icon"
                            className="w-md-100"
                          />
                        </div>
                        <div className="px-md-2">
                          <h5 className="font-weight-bold d-blue">Catalog</h5>
                          <div className="lh-1 d-md-block d-none">
                            Choose your favourite supplier and we recommend
                            products for you.
                          </div>
                        </div>
                        <div className="text-right d-md-block d-none">
                          <i className="fas d-blue fa-long-arrow-alt-right ml-2 fa-lg pt-1"></i>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="col-md-10 mx-auto col-6  px-md-3 px-0">
                  <label className="mb-0">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                      value={"Manual"}
                      onChange={(e) => handleChangeList("Manual")}
                    />
                    <div className="panel panel-default card-input shade-card br-8 my-1 py-2">
                      <div className="d-md-flex d-block justify-content-around align-items-center text-center text-md-left">
                        <div className="">
                          <img
                            src={manual_icon}
                            alt="icon"
                            className="w-md-100"
                          />
                        </div>
                        <div className="px-md-2">
                          <h5 className="font-weight-bold d-blue">
                            Manual listing
                          </h5>
                          <div className="lh-1 d-md-block d-none">
                            Use our browser extension to add listings directly
                            from the source.
                          </div>
                        </div>
                        <div className="text-right d-md-block d-none">
                          <i className="fas d-blue fa-long-arrow-alt-right ml-2 fa-lg pt-1"></i>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="col-md-10 mx-auto col-6 px-md-3 px-0">
                  <label className="mb-0">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                      value={"bulk"}
                      onChange={(e) => handleChangeList("bulk")}
                    />
                    <div className="panel panel-default card-input shade-card br-8 my-1 py-2">
                      <div className="d-md-flex d-block justify-content-around align-items-center text-center text-md-left">
                        <div className="">
                          <img
                            src={bulk_icon}
                            alt="icon"
                            className="w-md-100"
                          />
                        </div>
                        <div className="px-md-2">
                          <h5 className="font-weight-bold d-blue">
                            Bulk listing
                          </h5>
                          <div className="lh-1 d-md-block d-none">
                            List as many items as you want by adding urls from
                            different sources.
                          </div>
                        </div>
                        <div className="text-right d-md-block d-none">
                          <i className="fas d-blue fa-long-arrow-alt-right ml-2 fa-lg pt-1"></i>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="col-md-10 mx-auto col-6 px-md-3 px-0">
                  <label className="mb-0">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                      value={"we"}
                      onChange={(e) => handleChangeList("we")}
                    />
                    <div className="panel panel-default card-input shade-card br-8 my-1 py-2 px-0 px-md-2">
                      <div className="d-md-flex d-block justify-content-around align-items-center text-center text-md-left">
                        <div className="">
                          <img src={we_icon} alt="icon" className="w-md-100" />
                        </div>
                        <div className="px-md-2">
                          <h5 className="font-weight-bold d-blue">
                            We list for you
                          </h5>
                          <div className="lh-1 d-md-block d-none">
                            No idea what to list? We will pick the best selling
                            items for you!
                          </div>
                          <button className="bg-success border-0 text-white br-8 mt-2 sale-tag">
                            For only £9.99
                          </button>
                        </div>
                        <div className="text-right d-md-block d-none">
                          <i className="fas d-blue fa-long-arrow-alt-right ml-2 fa-lg pt-1"></i>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="mx-auto text-md-center text-right col-12 mt-2">
                  <div className="d-block d-md-none">
                    <div
                      className={`text-danger w-100 my-5 py-5 text-center font-weight-bold ${
                        values.list == "" ? "" : "d-none"
                      } `}
                    >
                      *Please choose a way to list.
                    </div>
                  </div>
                  <div className="d-block d-md-none">
                    <div
                      className={`w-100 text-center my-4 py-5 font-weight-bold ${
                        values.list == "" ? "d-none" : ""
                      } `}
                    >
                      <h5 className="font-weight-bold d-blue mb-0">Catalog</h5>
                      <div>
                        Choose your favourite supplier and we recommend products
                        for you.
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleRoute}
                    type="submit"
                    disabled={values.list == ""}
                    className={`border-0 bg-trans mx-auto ${
                      values.list == "" ? "btn-disbaled text-grey" : "d-blue"
                    } `}
                  >
                    <div className="d-flex align-items-center">
                      <span className="font-weight-bold">Fininsh</span>
                      <i className="fas fa-long-arrow-alt-right ml-2 fa-lg pt-1"></i>
                    </div>
                  </button>
                </div>
                <div className="d-md-block d-none">
                  <div
                    className={` text-danger w-100 text-center mb-2 font-weight-bold ${
                      values.list == "" ? "" : "d-none"
                    } `}
                  >
                    *Please choose a way to list.
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
