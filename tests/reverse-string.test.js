import {reverseString} from "../reverse-string";

test("Reverses a given string", () => {
  expect(reverseString("abc")).toBe("cba");
  expect(reverseString("")).toBe("");
  expect(reverseString("racecar")).toBe("racecar");
});