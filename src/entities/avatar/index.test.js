import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import Avatar from ".";

describe("Avatar", () => {
  it("Avatar is rendered", () => {
    render(<Avatar />);

    expect(screen.getByAltText(/user icon/i)).toBeInTheDocument();
  });
});
