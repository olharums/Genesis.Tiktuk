import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import TestRenderer from "react-test-renderer";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import UserInfo from ".";
import UserStats from "../../entities/user-stats";
import Signature from "../../entities/signature";

describe("User info", () => {
  const user = {
    name: "mock author name",
    following: 1200000,
    fans: 6543,
    heart: 9700000,
    signature: "mock signature",
    bioLink: {
      filled: true,
      link: "mock link",
    },
  };

  it("User info is rendered", () => {
    render(
      <BrowserRouter>
        <UserInfo user={user} />
      </BrowserRouter>
    );

    expect(screen.getByAltText(/user's avatar/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(user.name, "i"))).toBeInTheDocument();
  });

  describe("Mocking useLocate()", () => {
    it("useLocation().pathname !== '/'", () => {
      render(
        <MemoryRouter initialEntries={[{ pathname: "/mock" }]}>
          <UserInfo user={user} />
        </MemoryRouter>
      );

      expect(screen.getByTestId("SubscribeButtonStyled")).toBeInTheDocument();
    });

    it("useLocation().pathname === '/'", () => {
      render(
        <MemoryRouter initialEntries={[{ pathname: "/" }]}>
          <UserInfo user={user} />
        </MemoryRouter>
      );

      expect(
        screen.queryByTestId("SubscribeButtonStyled")
      ).not.toBeInTheDocument();
    });
  });

  it("Checking post children's props", () => {
    const testRenderer = TestRenderer.create(
      <BrowserRouter>
        <UserInfo user={user} />
      </BrowserRouter>
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(UserStats).props.following).toEqual(
      user.following
    );
    expect(testInstance.findByType(UserStats).props.fans).toEqual(user.fans);
    expect(testInstance.findByType(UserStats).props.heart).toEqual(user.heart);

    expect(testInstance.findByType(Signature).props.signature).toEqual(
      user.signature
    );
    expect(testInstance.findByType(Signature).props.bioLink).toEqual(
      user.bioLink
    );
  });
});
