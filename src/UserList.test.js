import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render the correct number of rows", () => {
  // Render the component
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];

  const { container } = render(<UserList users={users} />); // 렌더링할 때 자동으로 생성되는 div

  // Find all the rows in the table
  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  // screen.logTestingPlaygroundURL();
  // const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {});
