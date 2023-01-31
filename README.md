<h1 align="center">
  <br>
  Captain Code: Treasure Hacker
  <br>
</h1>

## About

Move Captain Code through puzzles by writing programs.

Puzzles include

1. Repetitive tasks
2. Tasks which are handled well with loops and conditionals (spiral staircase tower, ...)
3. etc.

## How to use

```console
# Clone this repository
$ git clone https://github.com/Code4Community/captain-code

# Go into the repository
$ cd captain-code

# Install dependencies
$ npm install

# Start the local development server (on port 8080)
$ npm run start

# Ready for production?
# Build the production ready code to the /dist folder
$ npm run build
```

## JavaScript

You want to use JavaScript instead of TypeScript?

- Add `"checkJs": false,` to [tsconfig.json](./tsconfig.json)
- Change the extension of all game files in [/src/scripts](./src/scripts) from `.ts` to `.js` (except `game.ts`).
