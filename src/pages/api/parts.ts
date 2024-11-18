import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

const dbPath = path.join(process.cwd(), 'public', 'comhub_db', 'comhubdb1.db');
 // 절대 경로 사용

// 데이터베이스 연결 함수
async function openDb() {
  return open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await openDb();

    if (!db) {
      console.error("Failed to open database");
      return res.status(500).json({ error: "Failed to open database" });
    }

    const parts = await db.all(`
      SELECT ID as id, kind as type, manufacturing_company as manufacturer,
      name , about, price
      FROM comhubdb3;
    `);

    res.status(200).json(parts);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

