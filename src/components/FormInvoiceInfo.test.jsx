import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import FormInvoiceInfo from "./FormInvoiceInfo";
import TextField from "@material-ui/core/TextField";

const data = {
  number: "0001",
  emitDate: "04/10/2019",
  terms: "30 Days",
  dueDate: "05/10/2019"
};

describe("FormInvoiceInfo", () => {
  let wrapper;
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();

    const shallow = createShallow({
      untilSelector: FormInvoiceInfo
    });
    wrapper = shallow(
      <FormInvoiceInfo
        number={data.number}
        emitDate={data.emitDate}
        terms={data.terms}
        dueDate={data.dueDate}
        onChange={onChange}
      />
    );
  });

  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("when invoice number changes", () => {
    beforeEach(() => {
      wrapper
        .find(TextField)
        .filter({ name: "number" })
        .simulate("change", {
          target: { name: "number", value: "0002" }
        });
    });

    it("invokes onChange with the new number", () => {
      expect(onChange).toHaveBeenCalledWith({ number: "0002" });
    });
  });

  describe("when emit date changes", () => {
    beforeEach(() => {
      wrapper
        .find(TextField)
        .filter({ name: "emitDate" })
        .simulate("change", {
          target: { name: "emitDate", value: "04/11/2019" }
        });
    });

    it("invokes onChange with the new emit date", () => {
      expect(onChange).toHaveBeenCalledWith({ emitDate: "04/11/2019" });
    });
  });

  describe("when terms change", () => {
    beforeEach(() => {
      wrapper
        .find(TextField)
        .filter({ name: "terms" })
        .simulate("change", { target: { name: "terms", value: "31 Days" } });
    });

    it("invokes onChange with the new terms", () => {
      expect(onChange).toHaveBeenCalledWith({ terms: "31 Days" });
    });
  });

  describe("when due date changes", () => {
    beforeEach(() => {
      wrapper
        .find(TextField)
        .filter({ name: "dueDate" })
        .simulate("change", { target: { name: "dueDate", value: "05/12/2019" } });
    });

    it("invokes onChange with the new due date", () => {
      expect(onChange).toHaveBeenCalledWith({ dueDate: "05/12/2019" });
    });
  });
});
