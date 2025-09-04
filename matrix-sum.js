import sum from 'sum.js';

/**
 * Calculate sum of a given matrix
 * 
 * @param {number[][]} matrix
 * @returns {number}
 */
export function matrixSum(matrix) {
    return matrix.reduce((acc, row) => sum(row) + acc, 0);
}
