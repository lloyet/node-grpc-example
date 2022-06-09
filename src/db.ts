import fs from "fs";

import type { Capital } from "$proto/geoguess/Capital";

import { DB_PATH } from "./env";

const dbFile = fs.readFileSync(DB_PATH, { encoding: "utf8" });

if (!dbFile) throw new Error(`No db file found as ${DB_PATH}`);

const db: Array<Capital> = JSON.parse(dbFile);

export default db;
