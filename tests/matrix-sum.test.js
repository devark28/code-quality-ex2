import {matrixSum} from "../matrix-sum";

test("Calculates sum of a given matrix", () => {
  expect(matrixSum([[1,2],[3,4]])).toBe(10);
  expect(matrixSum([[0,0],[0,0]])).toBe(0);
  expect(matrixSum([[-1,-2],[-3,-4]])).toBe(-10);
});