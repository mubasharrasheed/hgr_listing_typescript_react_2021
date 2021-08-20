import React, { Component } from "react";
import PlatForm from "./chanel/PlatForm";

class ChannelCreate extends Component {
  state = {
    step: 1,
    platform: "",
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { platform } = this.state;
    const values = { platform };

    switch (step) {
      case 1:
        return (
          <PlatForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      // case 2:
      //   return (
      //     <PersonalDetails />
      //   )
      // case 3:
      //   return (
      //     <Confirmation />
      //   )
      // case 4:
      //   return (
      //     <Success />
      // never forget the default case, otherwise VS code would be mad!
      // default:
      // do nothing
    }
  }
}

export default ChannelCreate;
