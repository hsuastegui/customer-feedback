import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Form from "./Form";
import Graph from "./Graph";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("renders app", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("handles submit", () => {
    const item = {
      name: "Doe",
      email: "doe@email.com",
      rating: 5,
      comment: "Consectetur adipiscing elit",
    };
    const handleSubmit = wrapper.find(Form).prop("handleSubmit");
    handleSubmit(item);
    expect(wrapper.find(Graph).prop("data")[2]).toEqual(item);
  });
});
