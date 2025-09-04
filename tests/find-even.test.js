import {findEven} from "../find-even";

test("Finds even numbers from an array", () => {
  expect(findEven([1,2,3,4,5,6])).toEqual([2,4,6]);
  expect(findEven([1,3,5])).toEqual([]);
  expect(findEven([2,2,2])).toEqual([2,2,2]);
});