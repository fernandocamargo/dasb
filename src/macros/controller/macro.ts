const { createMacro } = require('babel-plugin-macros');

function myMacro() {
  console.log(999, arguments);
}

module.exports = createMacro(myMacro);
