/*
 * THIS CODE IS OUR OWN WORK, IT WAS WRITTEN WITHOUT CONSULTING
 * A TUTOR OR CODE WRITTEN BY OTHER STUDENTS OUTSIDE OF OUR TEAM.
 * - Danny Chen, Ruilin Chen, Leah Loukedis, Chloe Peyrebrune, Coralynn Yang, Sihao Zhang
 */

// Fails CI if any team-written source file is missing the course integrity header.
// Generated shadcn/ui primitives (src/components/ui) are vendored, not team-written, so they're skipped.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const HEADER_LINE = "THIS CODE IS OUR OWN WORK, IT WAS WRITTEN WITHOUT CONSULTING";
const ROOTS = ["src", "scripts", "supabase/functions"];
const SKIP = [join("src", "components", "ui")];
const EXT = /\.(ts|tsx|js|mjs|sql)$/;

function walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return [];
  }
  return entries.flatMap((name) => {
    const path = join(dir, name);
    if (SKIP.some((s) => path.startsWith(s))) return [];
    if (statSync(path).isDirectory()) return walk(path);
    return EXT.test(name) ? [path] : [];
  });
}

const missing = ROOTS.flatMap(walk).filter(
  (file) => !readFileSync(file, "utf8").slice(0, 600).includes(HEADER_LINE),
);

if (missing.length) {
  console.error("Missing integrity header (copy scripts/integrity-header.txt):");
  for (const file of missing) console.error(`  ${file}`);
  process.exit(1);
}
console.log("Integrity header present in all source files.");
