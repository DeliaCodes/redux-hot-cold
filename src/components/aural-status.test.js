import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";

import store from "../store";
import AuralStatus from "./aural-status";

describe("<AuralStatus />", () => {
  it("Renders without crashing", () => {
    shallow(<AuralStatus store={store} />);
  });

  it("Renders an aural status update", () => {
    let TEST_STATUS = "You are listening to a game!";

    let wrapper = shallow(
      <Provider store={store}>
        <AuralStatus auralStatus={TEST_STATUS} />
      </Provider>
    );
    console.log('wrapper', JSON.stringify(wrapper));
    expect(wrapper.contains(TEST_STATUS)).toEqual(true);
  });
});
