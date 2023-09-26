const sentence = 'hello there from lighthouse labs';

let timer = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 50;
}

// By this point, timer has been increased accordingly to sentence, but we call setTimeout again to add to event loop after the sentence loop.
setTimeout(() => {
  console.log();
}, timer);