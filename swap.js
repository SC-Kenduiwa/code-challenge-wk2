// Import the built-in readline module for reading input from the terminal
const readline = require('readline');

// Create an interface for reading input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the swapCase function that accepts a string as input
function swapCase(str) {
  // Use the replace() method to find all alphabetic characters in the input string
  // For each matched character, use a function to handle the replacement
  return str.replace(/[a-zA-Z]/g, function(char) {
    // Check if the current character is uppercase
    // If it is, convert it to lowercase; if not, convert it to uppercase
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  });
}

// Ask for user input
rl.question('Enter a string: ', (input) => {
  // Call the swapCase function with the input string and log the result
  console.log('Swapped case:', swapCase(input));
  
  // Close the readline interface
  rl.close();
});
