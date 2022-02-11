import React from "react";
import { formStats } from "./formStats";
import { getLiftingOfDescription } from "./getLiftingOfDescription";

describe("Post info lib functions", () => {
  it("formStats function", () => {
    const data = {
      diggCount: 1,
      commentCount: 2,
      shareCount: 3,
    };

    expect(formStats(data)).toEqual(data);
  });

  describe("getLiftingOfDescription function", () => {
    it("empty params or empty string", () => {
      expect(getLiftingOfDescription()).toEqual(30);
      expect(getLiftingOfDescription("")).toEqual(30);
    });

    it("edge params", () => {
      expect(getLiftingOfDescription("a".repeat(70))).toEqual(80);
      expect(getLiftingOfDescription("a".repeat(71))).toEqual(130);
    });
  });
});
