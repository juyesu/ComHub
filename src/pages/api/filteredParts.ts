import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

const dbPath = path.join(process.cwd(), "public", "comhub_db", "comhubdb1.db");

async function openDb() {
  return open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type = "", manufacturer = "" } = req.query;

  try {
    const db = await openDb();

    const query = `
      SELECT ID as id, kind as type, manufacturing_company as manufacturer,
      name, about, price
      FROM comhubdb3
      WHERE kind LIKE ? AND manufacturing_company LIKE ?;
    `;

    console.log("Executing query with parameters:", { type, manufacturer });

    const filteredParts = await db.all(query, [
      `%${type}%`,
      `%${manufacturer}%`,
    ]);

    console.log("Filtered parts result:", filteredParts);

    res.status(200).json(filteredParts);
  } catch (error) {
    console.error("Error fetching filtered data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
