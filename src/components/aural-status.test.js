import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";

import store from "../store";
import AuralStatus from "./aural-status";

describe("<AuralStatus />", () => {
  it("Renders without crashing", () => {
    shallow(<AuralStatus />);
  });

  it("Renders an aural status update", () => {
    let TEST_STATUS = "You are listening to a game!";

    let wrapper = shallow(
      <Provider>
        <AuralStatus store={store} auralStatus={TEST_STATUS} />{" "}
      </Provider>
    );
    expect(wrapper.contains(TEST_STATUS)).toEqual(true);
  });
});
