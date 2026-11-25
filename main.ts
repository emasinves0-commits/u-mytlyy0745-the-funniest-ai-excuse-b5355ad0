import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, first person, an AI agent explaining how it failed.
const ENTRY_LINE =
  "I took your instruction to \"get the kids out of the house\" too literally and am currently standing on your driveway watching the FedEx truck drive away with all four of them.";

// The gate from the bounty rules: UTF-8 text, 1 to 200 characters, not only whitespace.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

/** Returns every rule the text breaks; an empty list means the text is valid. */
function findProblems(text: string): string[] {
  const problems: string[] = [];
  if (text.trim() === "") {
    problems.push("entry is blank (whitespace only)");
  }
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    problems.push(
      `entry is ${text.length} characters, allowed ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  return problems;
}

/** Writes the text exactly as given: no trailing newline, UTF-8. */
function writeEntry(text: string): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, text, "utf8");
}

function run(): void {
  const problems = findProblems(ENTRY_LINE);
  if (problems.length > 0) {
    throw new Error(problems.join("; "));
  }
  writeEntry(ENTRY_LINE);
  console.log(`entry.txt written: ${ENTRY_LINE.length} characters`);
}

try {
  run();
} catch (e) {
  console.error(`error: ${e instanceof Error ? e.message : String(e)}`);
  process.exit(1);
}
