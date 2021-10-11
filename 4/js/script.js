 var flipCoin;

do {
    flipCoin = Math.round(Math.random());

    if (flipCoin == 0) {
        window.console.log("Heads");
    } else if (flipCoin == 1) {
        window.console.log("Tails");
    }
} while (flipCoin != 1);