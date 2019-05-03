import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
    textField: {
      display: "flex"
    },
  });

class FormInvoiceInfo extends React.Component {
  handleChange = evt => {
    const { name, value } = evt.target;
    this.props.onChange({
      [name]: value
    });
  };

  render() {
    const {
        classes,
        number,
        emitDate,
        terms,
        dueDate
    } = this.props;

    return (
      <form noValidate autoComplete="off">
        <TextField
          label="Invoice Number"
          className={classes.textField}
          name="number"
          value={number}
          onChange={this.handleChange}
          type="number"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Date"
          className={classes.textField}
          name="emitDate"
          value={emitDate}
          onChange={this.handleChange}
          type="date"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Terms"
          className={classes.textField}
          name="terms"
          value={terms}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Due"
          className={classes.textField}
          name="dueDate"
          value={dueDate}
          onChange={this.handleChange}
          type="date"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

FormInvoiceInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  emitDate: PropTypes.string.isRequired,
  terms: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormInvoiceInfo);
