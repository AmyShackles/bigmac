import React from "react";
import { Random } from "../components/Random.js";
import { render, screen } from "@testing-library/react";

describe("Random.js", () => {
  test("displays PPP", () => {
    render(
      <Random
        country={{
          Country: "United States",
          Date: "2016-01-01",
          "Local price": "4.93",
          "Dollar ex": "1.0",
          "Dollar price": "4.93",
          "Dollar PPP": "1.0",
          "Dollar valuation": "0.0",
        }}
        localPrice={4.93}
        localDollarPrice={4.93}
        input="12"
        countries={[
          {
            Country: "Argentina",
            Date: "2016-01-01",
            "Local price": "33.0",
            "Dollar ex": "13.80925",
            "Dollar price": "2.3897025544472004",
            "Dollar PPP": "6.69371196754564",
            "Dollar valuation\r": "-51.52733155279512",
          },
          {
            Country: "United States",
            Date: "2016-01-01",
            "Local price": "4.93",
            "Dollar ex": "1.0",
            "Dollar price": "4.93",
            "Dollar PPP": "1.0",
            "Dollar valuation": "0.0",
          },
        ]}
      />
    );
    expect(screen.getByTestId("random-country")).toHaveTextContent("Random Country: Argentina");
    expect(screen.getByTestId("random-country-burgers")).toHaveTextContent("You could buy 5.021545454545454 of Big Macs in Argentina");
    expect(screen.getByTestId("money-worth")).toHaveTextContent("Your 12 is worth about 24.756219090909088 in Argentina")
  });
});
