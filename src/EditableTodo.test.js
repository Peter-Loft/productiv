import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const todo = {
  id: 1,
  title: "Code!",
  description: "Write some code",
  priority: 2,
}

describe("EditableTodo Tests", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={todo} />);
  });

  it("contains correct fields", function () {
    const result = render(<EditableTodo todo={todo} />)
    expect(result.queryByText("Edit")).toBeInTheDocument();
    expect(result.queryByText("Edit")).toBeInTheDocument();
    expect(result.queryByText("Fluffy")).not.toBeInTheDocument();
  });
});