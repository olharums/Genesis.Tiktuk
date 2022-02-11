import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import SubscribeButton from ".";

describe("Subscribe button", () => {
  it("subscribe button is rendered", () => {
    render(<SubscribeButton />);

    let button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

    expect(button).toHaveClass("unsubscribed");
    expect(button).not.toHaveClass("subscribed");

    expect(button).toHaveTextContent(/Підписатися/i);
  });

  it("reaction on a click", () => {
    render(<SubscribeButton />);

    let button = screen.getByRole("button");

    userEvent.click(button);

    expect(button).not.toHaveClass("unsubscribed");
    expect(button).toHaveClass("subscribed");

    expect(button).toHaveTextContent(/Відписатися/i);
  });
});
