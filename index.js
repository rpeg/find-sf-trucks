const readline = require('readline');

const display = require('./commands/display');
const help = require('./commands/help');
const next = require('./commands/next');
const prev = require('./commands/previous');
const jump = require('./commands/jump');
const invalid = require('./utils/invalid');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const quit = () => rl.close();

const commands = {
  display,
  d: display,
  help,
  h: help,
  next,
  n: next,
  prev,
  p: prev,
  jump,
  j: jump,
  quit,
  q: quit,
};

module.exports = () => {
  help(); // show command list on launch

  rl.on('line', (input) => {
    const inputArr = input.split(/\s+/);
    const cmd = inputArr[0];
    const args = inputArr.slice(1, inputArr.length);

    if (input) {
      if (cmd in commands) {
        commands[cmd](args);
      } else {
        invalid();
      }
    }
  });
};
