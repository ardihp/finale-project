import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import Profile from "../../components/Profile";
import { getCurrentUser } from "../../util/spotifyServices";

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
    render(<Profile name={data.display_name} images={data.images[0].url} />);

    const profile_name = screen.getByTestId("profile_name");
    const profile_image = screen.getByTestId("profile_image");

    expect(profile_name).toHaveTextContent("ardihp");
    expect(profile_image).toHaveAttribute("alt", "ardihp");
  });
});
