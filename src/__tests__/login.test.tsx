import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../components/Auth/Login";

it("should be...", async () => {
  render(<Login />);

  const signUpDiv = screen.getByRole("button", { name: /log in/i });

  expect(signUpDiv.textContent).toMatch(`"Log in"`);
});

// fit("2 should be...", async () => {
//   render(<SignUp />);

//   const signUpDiv = screen.getByRole("button", { name: /sign up/i });

//   expect(signUpDiv.textContent).toMatchInlineSnapshot(`"Sign up"`);
// });

// jest-mock-test
// mock module