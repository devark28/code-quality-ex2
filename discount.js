/**
 * Calculate discount of the given total amount
 * 
 * @param {number} totalAmount
 * @returns {number}
 */
export function discount(totalAmount) {
  if (totalAmount > 100) {
    return totalAmount * 0.1;
  } else {
    return totalAmount * 0.05;
  }
}
