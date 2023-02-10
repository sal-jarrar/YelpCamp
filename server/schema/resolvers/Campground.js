import pool from "../../config/db.js";
export const Campground = {
  reviews: async ({ camp_id }) => {
    const [rows] = await pool.query(
      `SELECT *  FROM review WHERE camp_id='${camp_id}'`
    );
    const [user] = await pool.query(
      `SELECT * FROM users WHERE user_id='${rows[0].user_id}'`
    );

    return [{ ...rows[0], user: user[0] }];
  },
};
