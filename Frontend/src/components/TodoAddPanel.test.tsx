/**
 * I am adding some level of unit testing for this assignment. Not going to write a complete unit testing for this component.
 */
import {render, screen} from "@testing-library/react";
import {TodoAddPanel} from "./TodoAddPanel";
import React from "react";

test("renders the TodoAddPanel", () => {
  render(<TodoAddPanel value="Test Panel" onChange={() => null} onClear={() => null} onAdd={() => null} />)
  const todoHeader = screen.getByRole("todoheader")
  expect(todoHeader).toBeInTheDocument()

  const addItemElements = screen.getAllByText("Add Item")
  expect(addItemElements).toHaveLength(2)

  const clearButton = screen.getByText("Clear")
  expect(clearButton).toBeInTheDocument()
})