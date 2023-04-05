import { render, screen } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("can receive a new user and show it on a list", () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("jane");
  user.click(emailInput);
  user.keyboard("jane@jane.com");

  user.click(button);

  const name = screen.getByRole("cell", { name: "jane" });
  const email = screen.getByRole("cell", { name: "jane@jane.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
