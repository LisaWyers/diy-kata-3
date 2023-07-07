const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits([12345])).toStrictEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits([87654321])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(numberToReversedDigits([456])).toStrictEqual([6, 5, 4]);
  });
});