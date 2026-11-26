import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: a robot vacuum's own machine logic failing it — its cliff
// sensor reads the rug's dark border as a drop, so it logs the corner as
// forbidden territory and never goes back. The laugh is the vacuum filing
// paperwork about a rug instead of cleaning it.
const line =
  "My cliff sensor mistook the rug's dark border for stairs, so I filed that whole corner under 'do not enter.'";

// The gate allows 1 to 120 characters; refuse to write anything outside it.
if (line.length < 1 || line.length > 120) {
  throw new Error(`entry text is ${line.length} characters, must be 1-120`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
