import React from "react";
import { shallow } from "enzyme";
import store from "../store";
import AuralStatus from "./aural-status";
import GuessCount from "./guess-count";

describe("<GuessCount />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessCount />);
  });

  it("Renders the correct guess count", () => {
    const value = 5;
    const wrapper = shallow(
      <Provider>
        <GuessCount store={store} guessCount={value} />
      </Provider>
    );
    expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
  });
});
