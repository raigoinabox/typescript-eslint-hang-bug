# typescript-eslint-hang-bug
First "npm install", that will get the dependencies.

Then type in "eslint src" and eslint should hang and start gobbling memory.

After it has taken about 4 gigs of memory, node should throw a out of memory error.

It seems to be a complex through the interplay typescript-eslint and i18next.
I first discovered it by upgrading to i18next version 22. It can be seen from this repo
as well, if i18next is removed, the bug disappears. This is what I have tried to change,
and then notice that the bug goes away:

* remove i18next.d.ts file (or any code in there)
* remove i18next package
* move i18next to the src directory
* in eslint conf replace "plugin:@typescript-eslint/recommended-requiring-type-checking" with "plugin:@typescript-eslint/recommended"
* change the content of src/broken.ts in any way.
