import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./drizzle/schema";
const sql = neon(process.env.PG_URL!);

export const db = drizzle(sql, { schema });

export { schema };
