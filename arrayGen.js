// Importing readline module for terminal input/output
const readline = require('readline');

// Create interface for reading input and output
const rl = readline.createInterface({
    input: process.stdin,//using the the keyboard
    output: process.stdout//using the terminal
});

/**
 * Generates an array of numbers between two given numbers, inclusive.
 * @param {number} startNum - The starting number.
 * @param {number} endNum - The ending number.
 * @returns {number[]} - The array of numbers between startNum and endNum.
 */
function generateArray(startNum, endNum) {
    // Initialize an empty array to store the result
    const result = [];

    // Determine the direction of counting
    const step = startNum <= endNum ? 1 : -1;

    // Generate the array of numbers between startNum and endNum
    for (let i = startNum; i !== endNum + step; i += step) {
        result.push(i);
    }

    return result; // Return the generated array
}

// Function to take input and call generateArray function
function main() {
    // Prompt the user to enter the starting number
    rl.question('Enter starting number: ', (startNum) => {
        // Prompt the user to enter the ending number
        rl.question('Enter ending number: ', (endNum) => {
            // Convert input strings to numbers
            startNum = parseInt(startNum);
            endNum = parseInt(endNum);

            // Check if inputs are valid numbers
            if (!isNaN(startNum) && !isNaN(endNum)) {
                // Call generateArray function with input numbers
                const resultArray = generateArray(startNum, endNum);
                // Display the generated array
                console.log('Generated Array:', resultArray);
            } else {
                // Display error message if inputs are not valid numbers
                console.log('Both inputs must be numbers.');
            }
            // Close the readline interface
            rl.close();
        });
    });
}

// Call the main function to start the program
main();