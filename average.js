/**
 * Calculates the average of a given numbers array
 * 
 * @param {number[]} numbers 
 * @return {number}
 */
export function average(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  return average;
}
