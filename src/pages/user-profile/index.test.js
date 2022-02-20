import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import OtherUserProfile, { UserProfile } from ".";

import { MemoryRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { userAndFeedDataContext } from "../../app";
import { formUserInfo } from "./formUserInfo";
// import { formUserInfo } from "./formUserInfo";

describe("formUserInfo function", () => {
  it("formUserInfo function", () => {
    const dataBefore = {
      userInfo: {
        user: {
          avatarLarger: "avatar mock",
          uniqueId: "id mock",
          signature: "signature mock",
          bioLink: {
            filled: true,

            link: "mock link",
          },
        },
        stats: {
          followingCount: 1,
          followerCount: 2,
          heartCount: 3,
        },
      },
    };
    const dataAfter = {
      avatar: "avatar mock",
      name: "id mock",
      following: 1,
      fans: 2,
      heart: 3,
      signature: "signature mock",
      bioLink: {
        filled: true,
        link: "mock link",
      },
    };
    expect(formUserInfo(dataBefore)).toEqual(dataAfter);
  });
});

describe("User profile", () => {
  it("User profile with an empty store", () => {
    render(
      <userAndFeedDataContext.Provider value={{}}>
        <UserProfile />
      </userAndFeedDataContext.Provider>
    );
    expect(screen.getByTestId("error-container")).toBeInTheDocument();
  });

  it("User profile with a filled store", () => {
    const user = {
      userInfo: {
        user: {
          avatarLarger: "avatar mock",
          uniqueId: "id mock",
          signature: "signature mock",
          bioLink: {
            filled: true,
            link: "mock link",
          },
        },
        stats: {
          followingCount: 1,
          followerCount: 2,
          heartCount: 3,
        },
      },
      userFeed: [
        {
          id: "1",
          video: {
            playAddr: "mock addr",
          },
          stats: { playCount: 200 },
        },
        {
          id: "2",
          video: {
            playAddr: "mock addr",
          },
          stats: { playCount: 200 },
        },
        {
          id: "3",
          video: {
            playAddr: "mock addr",
          },
          stats: { playCount: 200 },
        },
      ],
      setUserFeed: jest.fn(),
    };

    render(
      <userAndFeedDataContext.Provider value={{ user }}>
        <MemoryRouter initialEntries={[`/`]}>
          <Routes>
            <Route path="/" element={<UserProfile />} />
          </Routes>
        </MemoryRouter>
      </userAndFeedDataContext.Provider>
    );

    expect(screen.queryByTestId("error-container")).not.toBeInTheDocument();
    expect(screen.getByAltText(/user's avatar/i)).toBeInTheDocument();
    expect(screen.getAllByTestId("user-video-player")).toHaveLength(3);
  });
});
