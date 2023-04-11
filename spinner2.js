const symbolsArray = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];

let output = 100;

for (const element of symbolsArray) {
  setTimeout(() => {
    process.stdout.write(element + "\r");
  }, output);

  output += 200;
}

setTimeout(() => {
  console.log("\n");
}, 1900);