const readline = require("readline");
const students = ["Alan", "Sonia", "Sophie"];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("Trouvez un étudiant ");
rl.prompt();

rl.on("line", (line) => {
  if (students.includes(line.trim())) {
    console.log(`Oui c'est trouvé`);
    rl.close();

    return;
  }
  console.log('essayez encore ...');
  rl.prompt();
}).on("close", () => {
  console.log("Passez une bonne journée");
  process.exit(0); // arrêt du processus
});