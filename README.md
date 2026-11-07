# What should our group agreement cover?

A static discussion aid for a physician group's governance agreement. Plain HTML, CSS and JS. No build step, no external requests, nothing stored.

## Update
- `js/ai-picks.js`: the blue AI-suggested option for each decision, with its reason. Delete an entry to remove it.
- `js/leaning.js`: highlight where the group is leaning. Add a decision id and option name; instructions are in the file.
- `js/content/*.js`: the topics, options, pros and cons. Add a new option to a decision's `options` list.
- `js/config.js`: banner text and `showContractNotes` (off for the public version).

## Versions
With every change, bump `version` and `updated` in `js/config.js`, add an entry to `js/changelog.js`, and update the `?v=` numbers in `index.html` so browsers fetch the new files.

## Publish
Repo Settings > Pages > deploy from the `main` branch, root folder.

Not legal, tax or accounting advice.
