import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import DetailsForm from "./DetailsForm";
import FormInvoiceInfo from "./FormInvoiceInfo";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("when invoice from changes", () => {
    beforeEach(() => {
      const data = {
        name: "John",
        email: "john@doe.com",
        street: "1st Ave",
        city: "Seattle",
        zipCode: "09112",
        phone: "555 666 7777"
      };

      wrapper
        .find(DetailsForm)
        .at(0)
        .simulate("change", data);
    });

    it("renders with the new from", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("when invoice to changes", () => {
    beforeEach(() => {
      const data = {
        name: "Jane",
        email: "jane@doe.com",
        street: "2nd Ave",
        city: "Seattle",
        zipCode: "09112",
        phone: "555 666 8888"
      };

      wrapper
        .find(DetailsForm)
        .at(1)
        .simulate("change", data);
    });

    it("renders with the new to", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("when invoice information changes", () => {
    beforeEach(() => {
      const data = {
        number: "0001",
        emitDate: "04/10/2019",
        terms: "30 Days",
        dueDate: "05/10/2019"
      };

      wrapper
        .find(FormInvoiceInfo)
        .at(0)
        .simulate("change", data);
    });

    it("renders with the new information", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
