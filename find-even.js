/**
 * Find even numbers for a given numbers array
 * 
 * @param {number[]} numbers 
 * @returns {number[]}
 */
export function findEven(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
