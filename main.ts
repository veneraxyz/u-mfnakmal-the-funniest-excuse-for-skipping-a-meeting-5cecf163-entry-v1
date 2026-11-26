// The Funniest Excuse for Skipping a Meeting — entry v1.
// Writes a single excuse line (at most 200 characters) to entry.txt
// in the directory given by MAKEFUN_OUTPUT_DIR (default /output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry, I'm double-booked with a meeting about why I have too many meetings, and that one starts now.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n");
