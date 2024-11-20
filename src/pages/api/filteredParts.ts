//문제 발생시 원본(성문이형이 전에 수정한 코드)로 변환 해도 될듯. 
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
  const { type = "", manufacturer = "", priceRange = "" } = req.query;

  try {
    const db = await openDb();

    // 기본 SQL 쿼리 및 조건
    let query = `
      SELECT ID as id, kind as type, manufacturing_company as manufacturer,
      name, about, price
      FROM comhubdb3
      WHERE 1=1
    `;
    const params: any[] = [];

    // `type` 필터 추가  
    /*const filteredParts = await db.all(query, [
      `%${type}%`,
      `%${manufacturer}%`,
    ]);
    */
    if (type) {
      query += " AND kind LIKE ?";
      params.push(`%${type}%`);
    }

    // `manufacturer` 필터 추가
    if (manufacturer) {
      query += " AND manufacturing_company LIKE ?";
      params.push(`%${manufacturer}%`);
    }

    // `priceRange` 필터 추가
    if (priceRange) {
      try {
        const [minPrice, maxPrice] = JSON.parse(priceRange as string);
        query += " AND price BETWEEN ? AND ?";
        params.push(minPrice, maxPrice);
      } catch (error) {
        console.error("Invalid priceRange format:", priceRange);
        res.status(400).json({ error: "Invalid priceRange format" });
        return;
      }
    }

    console.log("Executing query with parameters:", { params });

    // SQL 실행
    const filteredParts = await db.all(query, params);

    console.log("Filtered parts result:", filteredParts);

    res.status(200).json(filteredParts);
  } catch (error) {
    console.error("Error fetching filtered data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
