import {average} from '../average.js';
import {discount} from '../discount.js';
import {factorial} from '../factorial.js';
import {findEven} from '../find-even.js';
import {findLarge} from '../find-large.js';
import {greet} from '../greet.js';
import {multiply} from '../multiply.js';
import {reverseString} from '../reverse-string.js';
import {sum} from '../sum.js';
import {matrixSum} from '../matrix-sum.js';


describe("Exercises Tests", () => {
  test(`Calculates the average of a given numbers array`, () => {
    expect(average([6])).toBe(6);
    expect(average([4,5,6])).toBe(5);
    expect(average([1,2,3,4,5,6])).toBe(9);
  });

  test("Calculates discount of the given total amount", () => {
    expect(discount(100)).toBeLessThan(100);
    expect(discount(0)).toBe(0);
    expect(discount(250)).toBeGreaterThan(0);
  });

  test("Calculates factorial of a given number", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(1)).toBe(1);
  });

  test("Finds even numbers from an array", () => {
    expect(findEven([1,2,3,4,5,6])).toEqual([2,4,6]);
    expect(findEven([1,3,5])).toEqual([]);
    expect(findEven([2,2,2])).toEqual([2,2,2]);
  });

  test("Finds the largest among 3 numbers", () => {
    expect(findLarge(1,5,3)).toBe(5);
    expect(findLarge(-10,-5,-20)).toBe(-5);
    expect(findLarge(7,7,7)).toBe(7);
  });

  test("Greets a person with name if provided", () => {
    expect(greet("Alice")).toMatch(/Alice/);
    expect(greet()).toMatch(/Hello/i);
    expect(greet("Bob")).toBe("Hello, Bob!");
  });

  test("Multiplies two numbers", () => {
    expect(multiply(2,3)).toBe(6);
    expect(multiply(-2,4)).toBe(-8);
    expect(multiply(0,10)).toBe(0);
  });

  test("Reverses a given string", () => {
    expect(reverseString("abc")).toBe("cba");
    expect(reverseString("")).toBe("");
    expect(reverseString("racecar")).toBe("racecar");
  });

  test("Calculates the sum of numbers array", () => {
    expect(sum([1,2,3])).toBe(6);
    expect(sum([0,0,0])).toBe(0);
    expect(sum([-1,-2,-3])).toBe(-6);
  });

  test("Calculates sum of a given matrix", () => {
    expect(matrixSum([[1,2],[3,4]])).toBe(10);
    expect(matrixSum([[0,0],[0,0]])).toBe(0);
    expect(matrixSum([[-1,-2],[-3,-4]])).toBe(-10);
  });
});