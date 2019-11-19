# Python lexer in Javascript
Generates a python lexer using Antlr.

# Install

- https://github.com/antlr/antlr4/blob/master/doc/getting-started.md
- `npm install`

# Generate
```
$ANTLR_PATH="/specify/here/antlr-4.7.1-complete.jar"

java -cp ".:$ANTLR_PATH" org.antlr.v4.Tool -Dlanguage=JavaScript -lib grammar -o generated -no-listener -Xexact-output-dir grammar/Python3.g4
```

The generated lexer has been modified by hand to remove extranous dependencies and copied into src.
