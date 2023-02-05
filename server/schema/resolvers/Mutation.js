import pool from "../../config/db.js";
export default {
  createCampground: async (_, { input }) => {
    const {
      title,
      location,
      image,
      price,
      description,
      created_at,
      geometry,
      user_id,
    } = input;
    const [{ insertId }] = await pool.query(
      `INSERT INTO campground(title,location,image,price,description,created_at,geometry,user_id) VALUES ('${title}','${location}','${image}','${price}','${description}','${created_at}',ST_GeomFromText('${geometry}'),'${parseInt(
        user_id
      )}');`
    );

    const [rows] = await pool.query(
      `SELECT * FROM campground WHERE camp_id=${insertId}`
    );
    console.log(rows);
    return rows[0];
  },
  registerUser: async (_, { input }) => {
    const { name, email, password } = input;
    const [res] = await pool.query(
      `SELECT * FROM users WHERE email='${email}'`
    );
    console.log(res[0]);
    const foundEmail = res[0].email;

    if (foundEmail) throw new Error("Dublicate email");
    const [{ insertId }] = await pool.query(
      `INSERT INTO users(name,email,password) VALUES ('${name}','${email}','${password}');`
    );

    const [rows] = await pool.query(
      `SELECT * FROM users WHERE user_id=${insertId}`
    );
    console.log(rows);
    return rows[0];
  },
};
