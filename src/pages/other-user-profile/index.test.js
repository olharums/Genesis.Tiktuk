import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import OtherUserProfile from ".";

import { MemoryRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { userAndFeedDataContext } from "../../app";
import { formUserInfo } from "./formUserInfo";

describe("formUserInfo function", () => {
  it("formUserInfo function", () => {
    const dataBefore = {
      avatar: "avatar",
      name: "name",
      following: 1,
      fans: 2,
      heart: 3,
      signature: "signature",
      bioLink: {
        filled: true,
        link: "link",
      },
    };
    const dataAfter = {
      avatar: "avatar",
      name: "name",
      following: 1,
      fans: 2,
      heart: 3,
      signature: "signature",
      bioLink: {
        filled: false,
        link: "",
      },
    };
    expect(formUserInfo(dataBefore)).toEqual(dataAfter);
  });
});

describe("Other user profile", () => {
  it("Other user profile with an empty store", () => {
    render(
      <userAndFeedDataContext.Provider value={{}}>
        <OtherUserProfile />
      </userAndFeedDataContext.Provider>
    );

    expect(screen.getByTestId("error-container")).toBeInTheDocument();
  });

  it("Other user profile with a filled store", () => {
    const trendingFeed = {
      posts: [{ authorMeta: { id: "123" } }],
    };

    render(
      <userAndFeedDataContext.Provider value={{ trendingFeed }}>
        <MemoryRouter
          initialEntries={[`/feed/${trendingFeed.posts[0].authorMeta.id}`]}
        >
          <Routes>
            <Route path="/feed/:userId" element={<OtherUserProfile />} />
          </Routes>
        </MemoryRouter>
      </userAndFeedDataContext.Provider>
    );

    expect(screen.queryByTestId("error-container")).not.toBeInTheDocument();
    expect(screen.getByAltText(/user's avatar/i)).toBeInTheDocument();
  });
});
