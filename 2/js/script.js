
var randnum = Math.floor(Math.random() * 10);
var choice = window.prompt("Choose Heads (H) or Tails (T) to play:");

isHeads = Boolean (randnum > 4);
heads = Boolean (choice.toUpperCase() == "H" || choice.toLowerCase() == "heads");
tails = Boolean (choice.toUpperCase() == "T" || choice.toLowerCase() == "tails");

if (isHeads) {

    if (heads) {
        window.alert("It was heads and you chose heads. WIN!!");
    } else if (tails) {
        window.alert("It was heads but you chose tails.LOSE!");
    } else {
        window.alert("Invalid choice.");
    }
} else {
    
    if (heads) {
        window.alert("It was tails but you chose heads.LOSE!!");
    } else if (tails) {
        window.alert("It was tails and you chose tails. WIN!!");
    } else {
        window.alert("Invalid choice.");
    }
}