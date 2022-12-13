const fs = require("fs");
const readline = require("readline");
const students = JSON.parse( fs.readFileSync("./Data/students.json") );

const rl = readline.createInterface({
    input : process.stdin,          
    output : process.stdout
});

rl.setPrompt("Trouver l'étudiant(e):\n");
rl.prompt();
rl.on('line', (line) => {
    let found = false;

    line.toString() === "exit" && process.exit(0);

    students.map(({ name, notes }) => {
        if(line.toString().toLowerCase() === name.toLowerCase()){
            const avg = notes.reduce((sum, a) => sum + a) / notes.length;
            console.log(`${name} a une moyenne de ${avg}/20.`);
            found = true;
        }
    })
    if(found){
        rl.prompt();
        found = false;
    }
    else {
        console.log('essayez encore ...');
    }
}).on("close", () => {
    console.log("Passez une bonne journée");
    process.exit(0);
});