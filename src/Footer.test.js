import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

it("renders with correct footer text", function () {
  const result = render(<Footer />);
  expect(result.queryByText(
    "Prødutïv is copyright ©2020 by Flüffy Data Enterprises, Inc."))
    .toBeInTheDocument();
});