var coinFlip;

for (let index = 0; index < 10; index++) {
    coinFlip = Math.round(Math.random());

    if (coinFlip == 0) {
        window.console.log("Heads");
    } else if (coinFlip == 1) {
        window.console.log("Tails");
    }
}