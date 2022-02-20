import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import UserVideo from ".";
import shortenNumber from "../../shared/lib/shortenNumber";

describe("User video", () => {
  const post = {
    video: {
      playAddr: "mock addr",
      dynamicCover: "mock cover",
    },
    stats: { playCount: 200 },
  };

  it("User video is rendered", () => {
    render(<UserVideo post={post} />);

    expect(screen.getByTestId("user-video-player")).toBeInTheDocument();

    expect(screen.getByTestId("fiplay")).toBeInTheDocument();

    expect(
      screen.getByText(shortenNumber(post.stats.playCount))
    ).toBeInTheDocument();
  });
});
