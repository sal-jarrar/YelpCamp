import pool from "../../config/db.js";
export const Campground = {
  reviews: async ({ camp_id }) => {
    const [rows] = await pool.query(
      `SELECT *  FROM review WHERE camp_id='${camp_id}'`
    );
    console.log(rows);
    if (rows.length) {
      const [user] = await pool.query(
        `SELECT * FROM users WHERE user_id='${rows[0].user_id}'`
      );
      console.log(user);

      return [{ ...rows[0], user: user[0] }];
    } else {
      return [];
    }
  },
};
