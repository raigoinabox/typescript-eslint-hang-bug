# typescript-eslint-hang-bug
First "npm install", that will get the dependencies.

Then type in "eslint src" and eslint should hang and start gobbling memory.

After it has taken about 4 gigs of memory, node should throw a out of memory error.
