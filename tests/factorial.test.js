import {factorial} from "../factorial";

test("Calculates factorial of a given number", () => {
  expect(factorial(0)).toBe(1);
  expect(factorial(5)).toBe(120);
  expect(factorial(1)).toBe(1);
});