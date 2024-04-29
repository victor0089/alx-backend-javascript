process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const uname = process.stdin.read();

  if (uname) {
    process.stdout.write(`Your name is: ${uname}`);
  }
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
