import React, { Component } from "react";
import "./DetailsForm.css";

class DetailsForm extends Component {
  render() {
    const { value } = this.props;
    const { name, email, address, phone } = value;

    return (
      <form className="DetailsForm">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChangeName}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChangeEmail}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.handleChangeAddress}
          />
        </label>
        <label>
          Phone number:
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={this.handleChangePhone}
          />
        </label>
      </form>
    );
  }
  handleChangeName = evt => {
    const { value } = this.props;
    this.props.onChange({
      ...value,
      name: evt.target.value
    });
  };

  handleChangeEmail = evt => {
    const { value } = this.props;
    this.props.onChange({
      ...value,
      email: evt.target.value
    });
  };

  handleChangeAddress = evt => {
    const { value } = this.props;
    this.props.onChange({
      ...value,
      address: evt.target.value
    });
  };

  handleChangePhone = evt => {
    const { value } = this.props;
    this.props.onChange({
      ...value,
      phone: evt.target.value
    });
  };
}

export default DetailsForm;
