import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";

import VideoStats from ".";
import shortenNumber from "../../shared/lib/shortenNumber";
import Avatar from "../avatar";

describe("Video stats", () => {
  const stats = {
    diggCount: 1,
    shareCount: 6543,
    commentCount: 9700000,
  };

  it("Video stats are rendered", () => {
    render(<VideoStats stats={stats} authorMeta={{}} />);

    expect(
      screen.getByText(shortenNumber(stats.diggCount))
    ).toBeInTheDocument();

    expect(
      screen.getByText(shortenNumber(stats.commentCount))
    ).toBeInTheDocument();

    expect(
      screen.getByText(shortenNumber(stats.shareCount))
    ).toBeInTheDocument();

    expect(screen.getByTestId("AiOutlineCommentStyled")).toBeInTheDocument();
    expect(screen.getByTestId("FaShareStyled")).toBeInTheDocument();
  });

  it("reactions with a like", () => {
    render(<VideoStats stats={stats} authorMeta={{}} />);

    const like = screen.getByTestId("BsHeartFillStyled");

    expect(like).toBeInTheDocument();
    expect(like).toHaveClass("notLiked");
    expect(like).not.toHaveClass("liked");
    expect(
      screen.getByText(shortenNumber(stats.diggCount))
    ).toBeInTheDocument();

    userEvent.click(like);

    expect(like).not.toHaveClass("notLiked");
    expect(like).toHaveClass("liked");
    expect(
      screen.getByText(shortenNumber(stats.diggCount + 1))
    ).toBeInTheDocument();
  });

  it("Checking Video stats children's props", () => {
    const authorMeta = {
      id: "6785823001336415238",
      secUid:
        "MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4",
      name: "kikakiim",
      nickName: "Kika Kim",
      verified: false,
    };

    const testRenderer = TestRenderer.create(
      <VideoStats stats={{}} authorMeta={authorMeta} />
    );

    const testInstance = testRenderer.root;

    expect(testInstance.findByType(Avatar).props.authorMeta).toEqual(
      authorMeta
    );
  });
});
