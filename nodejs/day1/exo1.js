function getRandomInt(max) {
    return Math.floor((Math.random() * max) + 1);
}

let tries = 10;
const randNumber = getRandomInt(100);

console.log("Rules: try to find the number between 1 and 100 in less than ten attempts, good luck ! (only numbers are allowed");

process.stdin.on('data', (chunk) => {
    const nb = parseInt(chunk);
    
    if (isNaN(nb)){
        console.log("please write numbers only !");
    }
    else {
        if (nb > 100 |nb < 1){
            console.log("please write a number between 1 and 100!");
        }
        else if (nb > randNumber) {''
            tries--;
            if (tries)
                console.log("too high");
        }
        else if (nb < randNumber){
            tries--;
            if (tries)
                console.log("too low ");
        }
        else {
            console.log("you nailed it !")
            console.log("your score: " + (10 - tries) + " attempts")
            process.exit(0);
        }
        if(!tries){
            console.log("the number was: " + randNumber);
            console.log("you used all your chances, loser !");
            process.exit(0);
        }
        console.log("tries left: " + tries + "\n");
    }
})