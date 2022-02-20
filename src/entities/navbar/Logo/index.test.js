import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Logo from ".";

describe("Logo", () => {
  it("Logo is rendered", () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );

    expect(screen.getByAltText(/App logo/i)).toBeInTheDocument();

    expect(screen.getByText(/TikTuk/i)).toBeInTheDocument();
  });
});
