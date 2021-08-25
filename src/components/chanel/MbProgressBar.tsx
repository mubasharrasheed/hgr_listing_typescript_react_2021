import React from "react";
import progress_done from "../../assets/channel/greenbar.png";
import progress_remain from "../../assets/channel/greybar.png";

function MbProgressBar({ step }: any) {
  console.log(step, "this is step");
  return (
    <div className="row mx-auto tex-center m-auto">
      <div className="col px-1">
        <img className="w-100" src={progress_done} alt="bar-icon" />
      </div>
      <div className="col px-1">
        <img className="w-100" src={progress_remain} alt="bar-icon" />
      </div>
      <div className="col px-1">
        <img className="w-100" src={progress_remain} alt="bar-icon" />
      </div>
      <div className="col px-1">
        <img className="w-100" src={progress_remain} alt="bar-icon" />
      </div>
      <div className="col px-1">
        <img className="w-100" src={progress_remain} alt="bar-icon" />
      </div>
      <div className="col px-1">
        <img className="w-100" src={progress_remain} alt="bar-icon" />
      </div>
    </div>
  );
}

export default MbProgressBar;
