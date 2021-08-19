import { render, screen, cleanup } from "@testing-library/react";

import Landing from "../../pages/Landing";
import { Provider } from "react-redux";
import store from "../../store/store";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

describe("Landing Page", () => {
  it("should render landing page properly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Landing />
        </BrowserRouter>
      </Provider>
    );

    const button = screen.getAllByRole("button");
    const image = screen.getByRole("img");
    const heading1 = screen.getByTestId("heading1");
    const heading2 = screen.getByTestId("heading2");

    expect(button).toHaveLength(5);
    expect(image).toBeInTheDocument();
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
  });
});
