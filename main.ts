import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "I found your file in my cache from Tuesday, so I edited that copy and overwrote three days of your work with total confidence.";

const MAX_ENTRY_LENGTH = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function writeEntry(): void {
  if (ENTRY_TEXT.length === 0 || ENTRY_TEXT.length > MAX_ENTRY_LENGTH) {
    throw new Error(
      `Entry text is ${ENTRY_TEXT.length} characters, over the ${MAX_ENTRY_LENGTH} limit.`,
    );
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, ENTRY_TEXT, "utf8");
}

writeEntry();
