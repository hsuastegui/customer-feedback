import React from "react";
import { mount, shallow } from "enzyme";
import Form from "./Form";
import Star from "./Star";

describe("Form", () => {
  const handleSubmit = jest.fn();

  it("renders", () => {
    const wrapper = shallow(<Form handleSubmit={handleSubmit} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("handles submit", () => {
    const name = "abc";
    const email = "abc@mail.com";
    const comment = "Lorem ipsum";
    const wrapper = mount(<Form handleSubmit={handleSubmit} />);
    wrapper.find("input").at(0).instance().value = name;
    wrapper.find("input").at(1).instance().value = email;
    wrapper.find("textarea").at(0).instance().value = comment;
    wrapper.find(Star).at(4).simulate("click");
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(handleSubmit).toHaveBeenCalledWith({
      comment,
      email,
      name,
      rating: 5,
    });
    expect(wrapper.find("input").at(0).instance().value).toEqual("");
    expect(wrapper.find("input").at(1).instance().value).toEqual("");
    expect(wrapper.find("textarea").at(0).instance().value).toEqual("");
  });
});
