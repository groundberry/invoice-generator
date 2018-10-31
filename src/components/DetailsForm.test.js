import React from "react";
import { shallow } from "enzyme";
import DetailsForm from "./DetailsForm";

const data = {
  name: "John",
  email: "john@doe.com",
  address: "1st Ave",
  phone: "555 666 7777"
};

describe("DetailsForm", () => {
  let wrapper;
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();
    wrapper = shallow(<DetailsForm value={data} onChange={onChange} />);
  });

  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("when name changes", () => {
    beforeEach(() => {
      wrapper
        .find('input[name="name"]')
        .simulate("change", { target: { value: "Jane" } });
    });

    it("invokes onChange with the new name", () => {
      expect(onChange).toHaveBeenCalledWith({ ...data, name: "Jane" });
    });
  });

  describe("when email changes", () => {
    beforeEach(() => {
      wrapper
        .find('input[name="email"]')
        .simulate("change", { target: { value: "jane@doe.com" } });
    });

    it("invokes onChange with the new email", () => {
      expect(onChange).toHaveBeenCalledWith({ ...data, email: "jane@doe.com" });
    });
  });

  describe("when address changes", () => {
    beforeEach(() => {
      wrapper
        .find('input[name="address"]')
        .simulate("change", { target: { value: "2nd Ave" } });
    });

    it("invokes onChange with the new address", () => {
      expect(onChange).toHaveBeenCalledWith({ ...data, address: "2nd Ave" });
    });
  });

  describe("when phone changes", () => {
    beforeEach(() => {
      wrapper
        .find('input[name="phone"]')
        .simulate("change", { target: { value: "555 666 8888" } });
    });

    it("invokes onChange with the new phone", () => {
      expect(onChange).toHaveBeenCalledWith({ ...data, phone: "555 666 8888" });
    });
  });
});
