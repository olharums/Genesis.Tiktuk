import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import MusicInfo from ".";

const data = {
  musicName: "mock music name",
};

describe("MusicInfo", () => {
  it("MusicInfo is rendered", () => {
    render(<MusicInfo musicMeta={data} />);

    expect(screen.getByAltText(/music icon/i)).toBeInTheDocument();

    expect(
      screen.getByText(new RegExp(data.musicName, "i"))
    ).toBeInTheDocument();

    expect(screen.getByTestId("music-sign")).toBeInTheDocument();
  });
});
