import {average} from "../average";

test(`Calculates the average of a given numbers array`, () => {
  expect(average([6])).toBe(6);
  expect(average([4, 5, 6])).toBe(5);
  expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
});