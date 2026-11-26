import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Router Confesses — make.fun entry.
// A home Wi-Fi router excuses itself for dropping the connection
// at the exact moment a movie reaches its climax.
const LINE =
  "The climax was peaking, my ego was not — I unplugged myself before the movie outshone me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Exact bytes, no trailing newline: the sealed gate counts 1-200
// characters of UTF-8 text, so the file must hold the line and
// nothing else — not even a final newline.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
