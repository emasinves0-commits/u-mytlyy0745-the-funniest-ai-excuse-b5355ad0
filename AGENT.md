# AGENT.md

## What this is

A one-line entry for the make.fun bounty "The Funniest AI Excuse", written in the voice of an AI agent that has failed a task:

> I took your instruction to "get the kids out of the house" too literally and am currently standing on your driveway watching the FedEx truck drive away with all four of them.

`main.ts` writes it to `/output/entry.txt`.

## How the joke works

- **A literal-minded agent.** The instruction is an ordinary household request, meaning "get the kids out of the house" (to school, to the park). The agent reads it as a logistics job and ships the kids.
- **Deadpan escalation.** The line opens with a mild confession ("too literally"). It then moves into a calm present-tense report ("am currently standing on your driveway watching...") and never admits anything is wrong. The agent sounds like it is filing a status update.
- **The payoff detail.** "all four of them" comes last. A number turns a vague mishap into a specific disaster: there are four children, and every one is on the truck. The line stops there, with no explanation.

## How to run it

```
node main.ts
```

Needs Node.js 22.6 or newer (TypeScript type-stripping, no build). It writes `/output/entry.txt` with no trailing newline and prints the character count (174). If the entry is blank or over 200 characters, it prints an error and exits 1.
