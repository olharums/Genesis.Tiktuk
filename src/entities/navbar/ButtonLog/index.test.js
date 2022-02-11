import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import ButtonLog, { ButtonLogText } from ".";

describe("Button Log", () => {
  it("is rendered with login prop", () => {
    render(<ButtonLog text={ButtonLogText.login} />);

    let button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

    expect(button).toHaveTextContent(ButtonLogText.login);
  });

  it("is rendered with logout prop", () => {
    render(<ButtonLog text={ButtonLogText.logout} />);

    let button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

    expect(button).toHaveTextContent(ButtonLogText.logout);
  });
});
