/**
 * Calculates the sum of a given numbers array
 * 
 * @param {number[]} numbers 
 * @return {number}
 */
export function sum(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
