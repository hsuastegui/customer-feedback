import React from "react";
import { shallow } from "enzyme";
import List from "./List";

describe("List", () => {
  it("renders", () => {
    const data = [
      {
        name: "John",
        email: "john@email.com",
        rating: 3,
        comment: "Lorem ipsum",
      },
    ];
    const wrapper = shallow(<List data={data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
