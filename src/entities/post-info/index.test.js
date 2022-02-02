import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import TestRenderer from "react-test-renderer";

import PostInfo from ".";
import MusicInfo from "../music-info";
import { BrowserRouter } from "react-router-dom";
import VideoStats from "../video-stats";
import { formStats } from "./lib/formStats";

describe("Post info", () => {
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

  it("Post info is rendered", () => {
    render(
      <BrowserRouter>
        <PostInfo post={post} />
      </BrowserRouter>
    );

    expect(
      screen.getByText(new RegExp(post.authorMeta.name, "i"))
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        new RegExp(new Date(post.createTime).toLocaleDateString(), "i")
      )
    ).toBeInTheDocument();

    expect(screen.getByText(new RegExp(post.text), "i")).toBeInTheDocument();
  });

  it("Checking Post info children's props", () => {
    const testRenderer = TestRenderer.create(
      <BrowserRouter>
        <PostInfo post={post} />
      </BrowserRouter>
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(MusicInfo).props.musicMeta).toEqual(
      post.musicMeta
    );

    expect(testInstance.findByType(VideoStats).props.stats).toEqual(
      formStats(post)
    );

    expect(testInstance.findByType(VideoStats).props.authorMeta).toEqual(
      post.authorMeta
    );
  });
});
