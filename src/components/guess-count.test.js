import React from "react";
import { shallow } from "enzyme";
import { Provider } from 'react-redux';
import store from "../store";
import AuralStatus from "./aural-status";
import GuessCount from "./guess-count";

describe("<GuessCount />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessCount store={store} />);
  });

  it("Renders the correct guess count", () => {
    const value = 5;
    const wrapper = shallow(
      <GuessCount store={store} guessCount={value} />
    );
    expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
  });
});
