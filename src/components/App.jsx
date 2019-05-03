import React from "react";
import DetailsForm from "./DetailsForm";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      from: {
        name: "",
        email: "",
        street: "",
        city: "",
        zipCode: "",
        phone: ""
      },
      to: {
        name: "",
        email: "",
        street: "",
        city: "",
        zipCode: "",
        phone: ""
      }
    };
  }

  render() {
    const { from, to } = this.state;

    return (
      <div className="App">
        <div className="App-form">
          <div className="App-form-info-from">
            <h2>From</h2>
            <DetailsForm
              name={from.name}
              email={from.email}
              street={from.street}
              city={from.city}
              zipCode={from.zipCode}
              phone={from.phone}
              onChange={this.handleChangeFrom}
            />
          </div>
          <div className="App-form-info-to">
            <h2>To</h2>
            <DetailsForm
              email={to.email}
              street={to.street}
              city={to.city}
              name={to.name}
              zipCode={to.zipCode}
              phone={to.phone}
              onChange={this.handleChangeTo}
            />
          </div>
        </div>
      </div>
    );
  }

  handleChangeFrom = newAttribute => {
    this.setState(prevState => ({
      from: {
        ...prevState.from,
        ...newAttribute
      }
    }));
  };

  handleChangeTo = newAttribute => {
    this.setState(prevState => ({
      to: {
        ...prevState.to,
        ...newAttribute
      }
    }));
  };
}

export default App;
