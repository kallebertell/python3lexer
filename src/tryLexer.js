const antlr4 = require('antlr4');
const Python3Lexer = require('./Python3Lexer.js');

const pythonScript = `
from stuff.helpers import get_foo, do_yummy

# This is a nice comment dude
def execute(candy, foobar):
    print("mutha")
    foo = get_foo(foobar)
    do_yummy(candy)

`;

function printNext(lexer) {
  const { type, channel, start, stop, tokenIndex, line, column } = lexer.nextToken();
  console.log("token", { type, start, stop, line, column, ctx: input.substr(start, stop-start+1) })
  return type;
}

const chars = new antlr4.InputStream(pythonScript);
const lexer = new Python3Lexer.Python3Lexer(chars);

console.log(`Input script: ${pythonScript}`);
console.log("Lexing and printing all tokens:");

while (printNext(lexer) !== antlr4.Token.EOF);
