import React from "react";
import progress_done from "../../assets/channel/progress.png";
import progress_remain from "../../assets/channel/progress_remain.png";
import progress_remain_dots from "../../assets/channel/progress_remain_dots.png";
import progress_done_dots from "../../assets/channel/progress_remain_done_dots.png";
function ProgressBar({ step }: any) {
  console.log(step, "this is step");
  return (
    <div className="row mx-auto tex-center">
      <div className="col-10 mx-auto">
        <div className="d-flex align-items-center">
          <img height="30" src={progress_done} alt="progress" />{" "}
          <div
            className={` ${
              step > 1 ? "text-success" : ""
            } font-weight-bold m-auto`}
          >
            Select where you’re selling from
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto text-center my-2">
        <img src={progress_remain_dots} alt="" />
      </div>
      <div className="col-10 mx-auto text-left">
        <div className="d-flex align-items-center">
          <img height="30" src={progress_remain} alt="progress" />{" "}
          <div className="font-weight-bold mx-auto">
            Where is your store based
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto text-center my-2">
        <img src={progress_remain_dots} alt="" />
      </div>
      <div className="col-10 mx-auto text-left">
        <div className="d-flex align-items-center">
          <img height="30" src={progress_remain} alt="progress" />{" "}
          <div className="font-weight-bold mx-auto">
            Where is your store based
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto text-center my-2">
        <img src={progress_remain_dots} alt="" />
      </div>
      <div className="col-10 mx-auto text-left">
        <div className="d-flex align-items-center">
          <img height="30" src={progress_remain} alt="progress" />{" "}
          <div className="font-weight-bold mx-auto">
            Where is your store based
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto text-center my-2">
        <img src={progress_remain_dots} alt="" />
      </div>
      <div className="col-10 mx-auto text-left">
        <div className="d-flex align-items-center">
          <img height="30" src={progress_remain} alt="progress" />{" "}
          <div className="font-weight-bold mx-auto">
            Where is your store based
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto text-center my-2">
        <img src={progress_remain_dots} alt="" />
      </div>
      <div className="col-10 mx-auto text-left">
        <div className="d-flex align-items-center">
          <img height="30" src={progress_remain} alt="progress" />{" "}
          <div className="font-weight-bold mx-auto">
            Where is your store based
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
