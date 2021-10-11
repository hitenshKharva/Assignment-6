// Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

// Global Variables
var n1;
var n2;

n1 = window.prompt("Please enter the first integer:");
n1 = parseInt(n1, 10);

n2 = window.prompt("Please enter the second integer:");
n2 = parseInt(n2, 10);

document.write("First number is: " + String(n1) + "<br>");
document.write("Second number is: " + String(n2) + "<br><br>");

// Finding the larger number and displaying appropriate result
if (n1 == n2) {
    document.write("Both the numbers are equal." + "<br>");
} else if (n1 > n2) {
    document.write(String(n1) + " is the larger number." + "<br>");
} else {
    document.write(String(n2) + " is the larger number." + "<br>");
}

