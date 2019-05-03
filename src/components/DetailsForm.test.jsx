import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import DetailsForm from "./DetailsForm";
import TextField from "@material-ui/core/TextField";

const data = {
  name: "John",
  email: "john@doe.com",
  street: "NE 8th St",
  city: "Bellevue",
  zipCode: "98004",
  phone: "555 666 7777"
};

describe("DetailsForm", () => {
  let wrapper;
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();

    const shallow = createShallow({
      untilSelector: DetailsForm
    });
    wrapper = shallow(
      <DetailsForm
        name={data.name}
        email={data.email}
        street={data.street}
        city={data.city}
        zipCode={data.zipCode}
        phone={data.phone}
        onChange={onChange}
      />
    );
  });

  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("when name changes", () => {
    beforeEach(() => {
      wrapper
        .find(TextField)
        .filter({ name: "name" })
        .simulate("change", { target: { name: "name", value: "Jane" } });
    });

    it("invokes onChange with the new name", () => {
      expect(onChange).toHaveBeenCalledWith({ name: "Jane" });
    });
  });

  describe("when email changes", () => {
    beforeEach(() => {
      wrapper
        .find(TextField)
        .filter({ name: "email" })
        .simulate("change", { target: { name: "email", value: "jane@doe.com" } });
    });

    it("invokes onChange with the new email", () => {
      expect(onChange).toHaveBeenCalledWith({ email: "jane@doe.com" });
    });
  });

  describe("when street changes", () => {
    beforeEach(() => {
      wrapper
        .find(TextField)
        .filter({ name: "street" })
        .simulate("change", { target: { name: "street", value: "12th Ave" } });
    });

    it("invokes onChange with the new street", () => {
      expect(onChange).toHaveBeenCalledWith({ street: "12th Ave" });
    });
  });

  describe("when city changes", () => {
    beforeEach(() => {
      wrapper
        .find(TextField)
        .filter({ name: "city" })
        .simulate("change", { target: { name: "city", value: "Seattle" } });
    });

    it("invokes onChange with the new city", () => {
      expect(onChange).toHaveBeenCalledWith({ city: "Seattle" });
    });
  });

  describe("when zipCode changes", () => {
    beforeEach(() => {
      wrapper
        .find(TextField)
        .filter({ name: "zipCode" })
        .simulate("change", { target: { name: "zipCode", value: "98122" } });
    });

    it("invokes onChange with the new zipCode", () => {
      expect(onChange).toHaveBeenCalledWith({ zipCode: "98122" });
    });
  });

  describe("when phone changes", () => {
    beforeEach(() => {
      wrapper
        .find(TextField)
        .filter({ name: "phone" })
        .simulate("change", { target: { name: "phone", value: "555 666 8888" } });
    });

    it("invokes onChange with the new phone", () => {
      expect(onChange).toHaveBeenCalledWith({ phone: "555 666 8888" });
    });
  });
});
