import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUp from "../components/Auth/Signup";
// import Fetch from '../fetch'

const server = setupServer(
  rest.get("/greeting", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("should be...", async () => {
  render(<SignUp />);

  const signUpDiv = screen.getByRole("button", { name: /sign up/i });

  expect(signUpDiv.textContent).toMatchInlineSnapshot(`"Sign up"`);
});

fit("2 should be...", async () => {
  render(<SignUp />);

  const signUpDiv = screen.getByRole("button", { name: /sign up/i });

  expect(signUpDiv.textContent).toMatchInlineSnapshot(`"Sign up"`);
});

// jest-mock-test
// mock module