import {multiply} from "../multiply";

test("Multiplies two numbers", () => {
  expect(multiply(2,3)).toBe(6);
  expect(multiply(-2,4)).toBe(-8);
  expect(multiply(0,10)).toBe(0);
});