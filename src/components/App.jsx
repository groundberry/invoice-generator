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
      }
    };
  }

  render() {
    const { from } = this.state;

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
}

export default App;
