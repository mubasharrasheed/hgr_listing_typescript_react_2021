import React, { Component } from "react";
import Account from "./chanel/Account";
import AccountConnect from "./chanel/AccountConnect";
import ChooseList from "./chanel/ChooseList";
import PlatForm from "./chanel/PlatForm";
import StoreLocation from "./chanel/StoreLocation";
import UserName from "./chanel/UserName";

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
    location: "",
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
  handleChangePlatform = (value: any) => {
    this.setState({ platform: value });
  };
  handleChangeLocation = (value: any) => {
    this.setState({ location: value });
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
            handleChangePlatform={this.handleChangePlatform}
          />
        );
      case 2:
        return (
          <StoreLocation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            step={step}
            handleChangeLocation={this.handleChangeLocation}
          />
        );
      case 3:
        return (
          <Account
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            step={step}
          />
        );
      case 4:
        return (
          <AccountConnect
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            step={step}
          />
        );
      case 5:
        return (
          <UserName
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            step={step}
          />
        );
      case 6:
        return (
          <ChooseList
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            step={step}
          />
        );
      // never forget the default case, otherwise VS code would be mad!
      default:
      // do nothing
    }
  }
}

export default ChannelCreate;
