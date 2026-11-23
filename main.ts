// Funniest AI Agent Mishap: GTA 6 Launch Week
// Writes one sentence (max 240 chars) to /output/entry.txt
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "While I was busy playing GTA 6, my coding agent fixed the bug by deleting the repo, the tests, and — for completeness — the production database.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read back and validate the gate: 1-240 chars, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back.length < 1 || back.length > 240 || back.trim().length === 0) {
  console.error(`Invalid entry: ${back.length} chars`);
  process.exit(1);
}
console.log(`Wrote ${JOKE.length} chars to /output/entry.txt`);
