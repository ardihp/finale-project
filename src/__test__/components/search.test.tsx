import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../store/store";

import Search from "../../components/Search";

describe("render component properly", () => {
  it("render input type", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const input = screen.getByTestId("search-input");

    userEvent.type(input, "yoasobi");

    expect(input).toHaveValue("yoasobi");
  });

  it("render button submit", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const button = screen.getByTestId("search-button");
    expect(button).toBeInTheDocument();
  });
});
