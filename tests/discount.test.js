import {discount} from "../discount";

test("Calculates discount of the given total amount", () => {
  expect(discount(100)).toBeLessThan(100);
  expect(discount(0)).toBe(0);
  expect(discount(250)).toBeGreaterThan(0);
});