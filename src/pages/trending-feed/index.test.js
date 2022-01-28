import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import { userAndFeedDataContext } from "../../app";
import TrendingFeed from ".";
import { BrowserRouter } from "react-router-dom";

describe("Trending feed", () => {
  it("Trending feed with an empty store", () => {
    render(
      <userAndFeedDataContext.Provider value={{}}>
        <TrendingFeed />
      </userAndFeedDataContext.Provider>
    );

    expect(
      screen.getByTestId("trending-feed-without-data")
    ).toBeInTheDocument();
  });

  it("Trending feed with a filled store", () => {
    const trendingFeed = {
      setPosts: jest.fn(),
      posts: [
        { id: 1, authorMeta: { id: 1 } },
        { id: 2, authorMeta: { id: 2 } },
      ],
    };

    render(
      <BrowserRouter>
        <userAndFeedDataContext.Provider value={{ trendingFeed }}>
          <TrendingFeed />
        </userAndFeedDataContext.Provider>
      </BrowserRouter>
    );

    expect(
      screen.queryByTestId("trending-feed-without-data")
    ).not.toBeInTheDocument();

    expect(screen.getAllByTestId("video-player")).toHaveLength(
      trendingFeed.posts.length
    );
  });
});
