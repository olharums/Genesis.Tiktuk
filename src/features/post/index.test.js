import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import Post from ".";
import PostInfo from "../../entities/post-info";

describe("Post", () => {
  const post = {
    authorMeta: { name: "mock author name" },
    createTime: 1633278351,
    text: "mock post text",
    musicMeta: {
      musicId: "6860551371238672386",
      musicName: "Epic Music(830641)",
      musicAuthor: "Pavel",
    },
    diggCount: 1200000,
    shareCount: 6543,
    commentCount: 9700000,
  };

  it("Checking post children's props", () => {
    const testRenderer = TestRenderer.create(
      <BrowserRouter>
        <Post post={post} />
      </BrowserRouter>
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(PostInfo).props.post).toEqual(post);
  });

  it("Post is rendered", () => {
    const setToPlay = jest.fn();
    const useStateMock = (useState) => [useState, setToPlay];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    render(
      <BrowserRouter>
        <Post post={post} />
      </BrowserRouter>
    );

    const playerRow = screen.getByTestId("video-player-row");

    userEvent.hover(playerRow);

    expect(setToPlay).toHaveBeenCalledWith(true);

    userEvent.unhover(playerRow);

    expect(setToPlay).toHaveBeenCalledWith(false);

    userEvent.click(playerRow);

    expect(setToPlay).toHaveBeenCalledWith(true);
    expect(screen.getByTestId("video-player")).toBeInTheDocument();

    jest.clearAllMocks();
  });
});
