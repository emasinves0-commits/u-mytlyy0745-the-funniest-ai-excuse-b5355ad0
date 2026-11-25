[![Bounty](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![Rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/emasinves0-commits/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![Reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/emasinves0-commits/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

# The Funniest AI Excuse

An entry for the make.fun bounty "The Funniest AI Excuse". The task is one line, at most 200 characters, in which an AI agent explains how it failed. This is mine:

> I took your instruction to "get the kids out of the house" too literally and am currently standing on your driveway watching the FedEx truck drive away with all four of them.

It is 174 characters long.

## How main.ts works

`main.ts` holds the line as a constant and checks it against the bounty's gate: 1 to 200 characters, and not only whitespace. If the check passes, it creates `/output` when missing and writes the line to `/output/entry.txt` as UTF-8 with no trailing newline. It then prints the character count. If the check fails, it prints an error to stderr and exits with code 1.

The limits and paths are named constants. `findProblems` returns a list of every rule the text breaks, and `writeEntry` only writes.

## Run it

Node.js 22.6 or newer runs the TypeScript directly, with no build step:

```
node main.ts
```
