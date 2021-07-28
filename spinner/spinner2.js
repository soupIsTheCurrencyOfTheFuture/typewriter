const rotation = ['|', '/', '-', '\\', '\n']
let index = 0;
let timer = 100;

for (const bar in rotation) {
  setTimeout(() => {
    process.stdout.write(`\r ${rotation[bar]}`);
  }, timer)
  timer += 400
}
setTimeout(() => {
    process.stdout.write(rotation[index]);
    index++;
    timer += 400;
  }, timer);
  
