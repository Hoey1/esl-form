import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
// import SchoolIcon from "@material-ui/icons/School";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Additional Details" />
          {/* <SchoolIcon color="primary" /> */}
          <TextField
            hintText="Enter Your Home Country"
            floatingLabelText="Country"
            onChange={handleChange("country")}
            // onChange={this.props.handleChange}
            defaultValue={values.country}
          />
          <br />
          <TextField
            hintText="How Many Languages Do You Speak"
            floatingLabelText="Languages"
            onChange={handleChange("languages")}
            // onChange={this.props.handleChange}
            defaultValue={values.languages}
          />
          <br />
          <TextField
            hintText="How Long Have You Been In The USA?"
            floatingLabelText="Time In United States"
            onChange={handleChange("howLong")}
            // onChange={this.props.handleChange}
            defaultValue={values.howLong}
          />
          <br />
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            // onChange={this.props.handleChange}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Are You A Returning Student?"
            floatingLabelText="Returning Student"
            onChange={handleChange("returnStudent")}
            // onChange={this.props.handleChange}
            defaultValue={values.returnStudent}
          />
          <br />
          <TextField
            hintText="Highest Grade Completed"
            floatingLabelText="Educational Level"
            onChange={handleChange("eduLevel")}
            // onChange={this.props.handleChange}
            defaultValue={values.eduLevel}
          />
          <br />
          <TextField
            hintText="Will You Need Childcare?"
            floatingLabelText="Childcare Needed"
            onChange={handleChange("childCare")}
            // onChange={this.props.handleChange}
            defaultValue={values.childCare}
          />
          <br />
          <TextField
            hintText="If Yes, How Many Children?"
            floatingLabelText="Number of Kids"
            onChange={handleChange("childCare")}
            // onChange={this.props.handleChange}
            defaultValue={values.childCare}
          />
          <br />
          <TextField
            hintText="How Did You Hear About Our Program?"
            floatingLabelText="Tell Us How You Discovered Us"
            onChange={handleChange("how")}
            // onChange={this.props.handleChange}
            defaultValue={values.how}
          />
          <br />
          <TextField
            hintText="Emergency Contact - Name"
            floatingLabelText="Emergency Contact - Name"
            onChange={handleChange("emerName")}
            // onChange={this.props.handleChange}
            defaultValue={values.emerName}
          />
          <br />
          <TextField
            hintText="Emergency Contact - Phone"
            floatingLabelText="Emergency Contact - Phone"
            onChange={handleChange("emerPhone")}
            // onChange={this.props.handleChange}
            defaultValue={values.emerPhone}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            styles={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="back"
            primary={false}
            styles={styles.button}
            onClick={this.back}
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

export default FormPersonalDetails;
