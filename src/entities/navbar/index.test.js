import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import { ButtonLogText } from "./ButtonLog";
import NavBar from ".";
import { userAndFeedDataContext } from "../../app";

describe("Navbar", () => {
  const renderNavbar = (user) => {
    render(
      <userAndFeedDataContext.Provider value={{ user }}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </userAndFeedDataContext.Provider>
    );
  };

  it("with an authed user", () => {
    const user = {
      isAuth: true,
      userInfo: { user: { nickname: "mock nickname" } },
    };

    renderNavbar(user);

    expect(screen.getByText(/Новини/i)).toBeInTheDocument();

    expect(
      screen.getByText(new RegExp(user.userInfo.user.nickname, "i"))
    ).toBeInTheDocument();
    expect(screen.queryByText(/TikTuk/i)).not.toBeInTheDocument();

    expect(screen.getByText(ButtonLogText.logout)).toBeInTheDocument();
  });

  it("with a not authed user", () => {
    const user = {
      isAuth: false,
    };

    renderNavbar(user);

    expect(screen.queryByText(/Новини/i)).not.toBeInTheDocument();

    expect(screen.queryByText(/mock nickname/i)).not.toBeInTheDocument();
    expect(screen.getByText(/TikTuk/i)).toBeInTheDocument();

    expect(screen.getByText(ButtonLogText.login)).toBeInTheDocument();
  });
});
