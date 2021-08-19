import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { getCurrentUser } from "../../util/spotifyServices";
import { Provider } from "react-redux";
import store from "../../store/store";

import Navbar from "../../components/authNavbar";

const server = setupServer(
  rest.get("https://api.spotify.com/v1/me", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        display_name: "ardihp",
        images: [
          {
            url:
              "https://static.wikia.nocookie.net/disney/images/2/25/Profile_-_Vanellope_Von_schweetz.jpeg/revision/latest?cb=20190312023329"
          }
        ]
      })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("render component authNavbar properly", () => {
  it("render name correctly", async () => {
    const Token = "ini token";
    const data = await getCurrentUser(Token);
    const name = data.display_name;
    const image = data.images[0].url;

    expect(name).toBe("ardihp");
    expect(image).toBeDefined();
  });

  it("render component correctly", () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    const button_logout = screen.getByTestId("logout-button");
    expect(button_logout).toBeInTheDocument();
  });
});
