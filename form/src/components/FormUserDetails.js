import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
// import SchoolIcon from "@material-ui/icons/School";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefualt();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          {/* <SchoolIcon color="primary" /> */}
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            // onChange={handleChange("firstName")}
            onChange={this.props.handleChange}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            // onChange={handleChange("lastName")}
            onChange={this.props.handleChange}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            // onChange={handleChange("email")}
            onChange={this.props.handleChange}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            styles={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
