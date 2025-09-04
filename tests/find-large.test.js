import {findLarge} from "../find-large";

test("Finds the largest among 3 numbers", () => {
  expect(findLarge(1,5,3)).toBe(5);
  expect(findLarge(-10,-5,-20)).toBe(-5);
  expect(findLarge(7,7,7)).toBe(7);
});