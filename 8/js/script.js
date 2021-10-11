
window.confirm("Are you 18 yrs or older?");

var num = window.prompt("Enter the number to countdown from:");
num = parseInt(num, 10);

if (num > 0) {
    for (let i = num; i >= 0; i--) {
        window.console.log(i);
    }
} else {
    window.console.log("Please enter a number greater than 0.")
}
