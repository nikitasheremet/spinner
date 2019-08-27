const str = '|/-\\|/-\\|';
let i = 0;
function loop() {
  setTimeout(() => {
    process.stdout.write(`\r${str.charAt(i)}   `);
    i++
    i < str.length ? loop() : console.log();
  }, 200)
}
loop();