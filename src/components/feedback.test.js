import React from "react";
import { shallow } from "enzyme";
import { Provider } from 'react-redux';
import store from "../store";
import AuralStatus from "./aural-status";
import Feedback from "./feedback";

describe("<Feedback />", () => {
  it("Renders without crashing", () => {
    shallow(<Feedback store={store} />);
  });
});

it("Renders some feedback", () => {
  let TEST_FEEDBACK = "You are listening to a game!";

  let wrapper = shallow(
    <Feedback store={store} feedback={TEST_FEEDBACK} />
  );
  expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
});
