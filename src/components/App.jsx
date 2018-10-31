import React, { Component } from "react";
import DetailsForm from "./DetailsForm";
import "./App.css";

const initialState = {
  invoiceFrom: {
    name: "",
    email: "",
    address: "",
    phone: ""
  },
  invoiceTo: {
    name: "",
    email: "",
    address: "",
    phone: ""
  },
  invoiceNumber: null,
  invoiceEmitDate: null,
  invoiceDueDate: null,
  invoiceTerms: "",
  invoiceItems: [
    {
      description: "",
      price: null,
      quantity: null
    }
  ]
};

class App extends Component {
  constructor() {
    super();

    this.state = initialState;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Invoice generator</h1>
        </header>
        <div>
          <h2>From</h2>
          <DetailsForm
            value={this.state.invoiceFrom}
            onChange={this.handleChangeInvoiceFrom}
          />
        </div>
        <div>
          <h2>To</h2>
          <DetailsForm
            value={this.state.invoiceTo}
            onChange={this.handleChangeInvoiceTo}
          />
        </div>
      </div>
    );
  }

  handleChangeInvoiceFrom = invoiceFrom => {
    this.setState({ invoiceFrom });
  };

  handleChangeInvoiceTo = invoiceTo => {
    this.setState({ invoiceTo });
  };
}

export default App;
