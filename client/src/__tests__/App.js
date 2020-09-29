import React from "react";
import { render } from "@testing-library/react";
import App from "../App.js";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const inputDirective = getByText(
    /Please enter an amount of money in your local currency/i
  );
  expect(inputDirective).toBeInTheDocument();
});
