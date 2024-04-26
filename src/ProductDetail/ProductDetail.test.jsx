import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductDetail from "./ProductDetail";
import { describe, expect } from "vitest";
import { vi } from "vitest";

describe("ProductDetail component", () => {
  it("renders ProductDetail component"),
    () => {
      const { container } = render(<ProductDetail />);
      expect(container).toMatchSnapshot();
    };

  it("should call onClick when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<ProductDetail onClick={onClick}/>);

    const button = screen.getByRole("button", { name: "Add to cart" });

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
