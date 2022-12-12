process.stdin.on('data', (chunk) => {
    const text = chunk.toString().replace("\n", "");
    console.error("err: " + text);
    console.log("log: " + text);
    process.exit(0);
})