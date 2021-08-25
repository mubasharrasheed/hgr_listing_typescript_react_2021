import React from "react";
import { Container } from "@material-ui/core";

import ebay_logo from "../../assets/channel/ebay.png";
import shopify_logo from "../../assets/channel/shopify-2.png";
import amazon_logo from "../../assets/channel/amazon-2.png";
import ProgressBar from "./ProgressBar";
import MbProgressBar from "./MbProgressBar";
function PlatForm({ nextStep, handleChange, values, step }: any) {
  const Continue = (e: any) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Container component="main" maxWidth="lg">
      <div>
        <form>
          <div className="row mx-auto">
            <div className="col-12 my-2 d-block d-xl-none px-0">
              <MbProgressBar step={step} />
            </div>
            <div className="col-xl-8 shade-Channel bg-white br-8">
              <div className="row mx-auto px-lg-4 px-md-3">
                <div className="text-center col-12">
                  <h5 className="font-weight-bold my-3 my-lg-4">
                    Where would you like to sell
                  </h5>
                </div>
                <div className="col-md-6 mb-2 mt-lg-5 mt-md-3 mt-2">
                  <label className="h-100">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                    />
                    <div className="panel panel-default card-input shade-card br-8 h-100">
                      <div className="mt-2 mb-md-5 mb-2">
                        <img src={ebay_logo} alt="ebay logo" />
                      </div>
                      <div className=" font-weight-bold">Marketplace</div>
                      <div className="panel-body">
                        It lets you sell products from any category. Update your
                        listing information and sell anything you wish.
                      </div>
                    </div>
                  </label>
                </div>
                <div className="col-md-6 mb-2 mt-lg-5 mt-md-3 mt-2">
                  <label className="h-100">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                    />
                    <div className="panel panel-default card-input shade-card br-8 h-100">
                      <div className="mt-2 mb-md-5 mb-2">
                        <img src={shopify_logo} alt="ebay logo" />
                      </div>
                      <div className=" font-weight-bold">Your own store</div>
                      <div className="panel-body">
                        It provides a range of e-commerce tools to help you
                        build and promote your store.
                      </div>
                    </div>
                  </label>
                </div>
                <div className="col-md-12 mt-md-3">
                  <label className="">
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                    />
                    <div className="panel panel-default card-input shade-card br-8">
                      <div className="mt-2 mb-md-4 mb-5">
                        <img src={amazon_logo} alt="ebay logo" />
                      </div>
                      <div className=" font-weight-bold">Marketplace</div>
                      <div className="panel-body">
                        It gives your products great exposure due to the high
                        number of visitors. Optimise your titles and item
                        information to increase sells.
                        <div>
                          <i className="font-weight-bold">
                            *you need to be self-employed to sell on Amazon.
                          </i>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="mx-auto mt-md-4 mb-2 text-center">
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
            <div className="col-lg-4 d-xl-block d-none m-auto">
              <ProgressBar step={step} />
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default PlatForm;
