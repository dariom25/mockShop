import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";
import { it, describe, expect } from "vitest";

describe("Homepage component", () => {
  it("renders correct heading", () => {
    render(<Homepage />);
    expect(screen.getByRole("heading").textContent).toMatch(
      /Welcome to Mocks Online-Schmock Shop/i,
    );
  });
  it("renders homepage according to snapshot", () => {
    const { homepage} = render(<Homepage/>);
    expect(homepage).toMatchSnapshot();
  })
});
