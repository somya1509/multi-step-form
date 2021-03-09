import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    //Process form // Do all the backend stuffs here //

    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Successfully Submitted Form" />
          <h1>you will get a mail regarding the form submission.</h1>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
