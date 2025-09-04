/**
 * Greet a person with a given a name
 * if the name is provided
 * 
 * @param {string} [inputName] 
 * @returns {string}
 */
export function greet(inputName) {
    if (!inputName) return "Hello!";
    return "Hello, " + inputName + "!";
}
