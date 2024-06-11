// sum.test.js
import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
test("adds 1 + 2 to equal 3", () => {
  expect(3).toBe(3);
});
test("adding new task", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/What needs to be done/i);
  const addButton = screen.getByText(/Apply/i);

  fireEvent.change(inputElement, { target: { value: "new task" } });
  fireEvent.click(addButton);
  expect(screen.getByText(/new task/i)).toBeInTheDocument();
});

test("completing task", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/What needs to be done/i);
  const addButton = screen.getByText(/Apply/i);

  fireEvent.change(inputElement, { target: { value: "new task" } });
  fireEvent.click(addButton);

  const checkbox = screen.getAllByRole("checkbox");

  fireEvent.click(checkbox[checkbox.length - 1]);

  expect(screen.getByText(/new task/i)).toHaveStyle(
    "text-decoration: line-through"
  );
});

test("clear completed tasks", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/What needs to be done/i);
  const addButton = screen.getByText(/Apply/i);

  fireEvent.change(inputElement, { target: { value: "new task" } });
  fireEvent.click(addButton);
  const checkbox = screen.getAllByRole("checkbox");
  fireEvent.click(checkbox[checkbox.length - 1]);

  const deleteButton = screen.getByText(/Clear completed/i);
  fireEvent.click(deleteButton);
  checkbox.forEach((el) =>
    expect(el).not.toHaveStyle("text-decoration: line-through")
  );

  expect(screen.queryByText(/new task/i)).not.toBeInTheDocument();
});
