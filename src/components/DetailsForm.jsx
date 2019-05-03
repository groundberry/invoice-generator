import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  textField: {
    display: "flex"
  }
});

class DetailsForm extends React.Component {
  render() {
    const { classes, name, email, street, city, zipCode, phone } = this.props;

    return (
      <form>
        <TextField
          label="Name"
          className={classes.textField}
          name="name"
          value={name}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          className={classes.textField}
          name="email"
          value={email}
          onChange={this.handleChange}
          type="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Street"
          className={classes.textField}
          name="street"
          value={street}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="City"
          className={classes.textField}
          name="city"
          value={city}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Zip code"
          className={classes.textField}
          name="zipCode"
          value={zipCode}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Phone"
          className={classes.textField}
          name="phone"
          value={phone}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.props.onChange({
      [name]: value
    });
  };
}

DetailsForm.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  zipCode: PropTypes.string,
  phone: PropTypes.string,
  onChange: PropTypes.func
};

export default withStyles(styles)(DetailsForm);
