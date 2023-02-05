import pool from "../../config/db.js";
export const Query = {
  getCapmgrounds: async () => {
    const [rows] = await pool.query("SELECT * FROM campground");
    return rows;
  },
  getCapmground: async (_, { campId }) => {
    const [rows, fields] = await pool.query(
      `SELECT * FROM campground WHERE camp_id=${campId}`
    );
    console.log(rows);
    return rows[0];
  },
};
