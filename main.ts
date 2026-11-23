// One Line, Zero Use: The Useless Superpower Sprint
//
// The gate is 1-200 characters of UTF-8 text, not only whitespace; the
// line below is 98 characters. No trailing newline: the file holds exactly
// the line, so the scorer reads the line and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can read minds \u2014 but only pigeons', and every single one of them is just thinking about bread.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf-8");
console.log(LINE);
