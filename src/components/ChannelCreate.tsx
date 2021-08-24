import React, { Component } from "react";
import Account from "./chanel/Account";
import AccountConnect from "./chanel/AccountConnect";
import PlatForm from "./chanel/PlatForm";
import StoreLocation from "./chanel/StoreLocation";

class ChannelCreate extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {};
  // }

  state = {
    step: 1,
    platform: "",
    storeLocation: "",
    flag: "",
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  handleChange = (input: any) => (e: any) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step, platform, storeLocation } = this.state;
    const values = { platform, storeLocation };

    switch (step) {
      case 1:
        return (
          <PlatForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            step={step}
          />
        );
      case 2:
        return (
          <StoreLocation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Account
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <AccountConnect
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      // never forget the default case, otherwise VS code would be mad!
      default:
      // do nothing
    }
  }
}

export default ChannelCreate;
