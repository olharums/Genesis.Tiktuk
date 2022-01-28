import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import Signature from ".";

describe("Signature", () => {
  const signature = "mock signature";

  it("Signature is rendered", () => {
    const bioLink = {
      filled: true,
      link: "mock link",
    };
    render(<Signature signature={signature} bioLink={bioLink} />);

    expect(screen.getByText(signature)).toBeInTheDocument();

    expect(screen.getByTestId("bioLink")).toBeVisible();

    expect(screen.getByText(bioLink.link)).toBeInTheDocument();
  });

  it("Signature without bioLink", () => {
    const bioLink = {
      filled: false,
      link: "",
    };
    render(<Signature signature={signature} bioLink={bioLink} />);

    expect(screen.getByText(signature)).toBeInTheDocument();

    expect(screen.queryByTestId("bioLink")).not.toBeVisible();
  });
});
