import React from "react";
import { shallow } from "enzyme";
import store from "../store";
import AuralStatus from "./aural-status";
import Feedback from "./feedback";

describe("<Feedback />", () => {
  it("Renders without crashing", () => {
    shallow(<Feedback />);
  });
});

it("Renders some feedback", () => {
  let TEST_FEEDBACK = "You are listening to a game!";

  let wrapper = shallow(
    <Provider>
      <Feedback store={store} feedback={TEST_FEEDBACK} />
    </Provider>
  );
  expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
});
