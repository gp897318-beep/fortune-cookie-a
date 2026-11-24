// Fortune Cookie Wisdom for Developers — entry for @g290.
//
// The task: write one original line of fortune-cookie wisdom for a
// software developer, at most 120 characters. This program writes
// exactly one such line to /output/entry.txt and nothing else.
//
// The line: a piece of legacy-code wisdom. Every codebase has a
// comment that says "do not touch" — and the quiet joke is that the
// warning itself is proof someone touched it before you, and lived
// to warn you. One balanced sentence, true about a developer's day,
// with a second meaning waiting on the second read.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const FORTUNE =
  "The comment that says 'do not touch' was written by someone who touched it last.";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, FORTUNE, "utf8");

// Read the file back and check it against the gate: 1 to 120
// characters, not only white space, exactly the line we meant to send.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (
  written !== FORTUNE ||
  written.length < 1 ||
  written.length > 120 ||
  written.trim().length === 0
) {
  throw new Error(
    `entry failed the gate (${written.length} chars): ${JSON.stringify(written)}`,
  );
}
