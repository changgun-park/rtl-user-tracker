import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

const renderComponent = () => {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];

  render(<UserList users={users} />);

  return { users };
};

test("render the correct number of rows", () => {
  // Render the component
  renderComponent();

  // Find all the rows in the table
  // eslint-disable-next-line
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // screen.logTestingPlaygroundURL();
  // const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  const { users } = renderComponent();

  // screen.logTestingPlaygroundURL();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
