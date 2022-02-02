import shortenNumber from "./shortenNumber";

describe("ShortenNumber function", () => {
  it("Without params", () => {
    expect(shortenNumber()).toBe(0);
  });

  it("Edge params", () => {
    expect(shortenNumber(9999)).toBe(9999);
    expect(shortenNumber(10000)).toBe("10K");
  });
});
