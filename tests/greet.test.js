import {greet} from "../greet";

test("Greets a person with name if provided", () => {
  expect(greet("Alice")).toMatch(/Alice/);
  expect(greet()).toMatch(/Hello/i);
  expect(greet("Bob")).toBe("Hello, Bob!");
});