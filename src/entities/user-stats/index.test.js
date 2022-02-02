import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import UserStats from ".";
import shortenNumber from "../../shared/lib/shortenNumber";

describe("User stats", () => {
  it("User stats is rendered", () => {
    const stats = {
      following: 1,
      fans: 2,
      heart: 3,
    };

    render(
      <UserStats
        following={stats.following}
        fans={stats.fans}
        heart={stats.heart}
      />
    );

    expect(screen.getByText(/Підписки/i)).toBeInTheDocument();
    expect(screen.getByText(/Підписники/i)).toBeInTheDocument();
    expect(screen.getByText(/Вподобання/i)).toBeInTheDocument();

    expect(
      screen.getByText(shortenNumber(stats.following))
    ).toBeInTheDocument();
    expect(screen.getByText(shortenNumber(stats.fans))).toBeInTheDocument();
    expect(screen.getByText(shortenNumber(stats.heart))).toBeInTheDocument();
  });
});
