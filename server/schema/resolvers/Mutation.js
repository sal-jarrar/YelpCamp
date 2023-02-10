import { UserInputError } from "apollo-server";
import pool from "../../config/db.js";
import { generateToken } from "../../util/check-auth.js";
import bcrypt from "bcryptjs";

export default {
  createCampground: async (_, { input }) => {
    try {
      const {
        title,
        location,
        image,
        price,
        description,
        created_at,
        user_id,
      } = input;
      const [{ insertId }] = await pool.query(
        `INSERT INTO campground(title,location,image,price,description,created_at,user_id) VALUES ('${title}','${location}','${image}','${price}','${description}','${created_at}','${user_id}');`
      );

      const [rows] = await pool.query(
        `SELECT * FROM campground WHERE camp_id=${insertId}`
      );
      console.log(rows);
      return rows[0];
    } catch (error) {
      console.log(error);
    }
  },
  registerUser: async (_, { input }) => {
    const { name, email, password } = input;
    const [res] = await pool.query(
      `SELECT * FROM users WHERE email='${email}'`
    );
    console.log(res[0]);
    const foundEmail = res[0]?.email;

    if (foundEmail) throw new Error("Dublicate email");
    // hash password and create an auth token
    const hashPassword = await bcrypt.hash(password, 12);
    const [{ insertId }] = await pool.query(
      `INSERT INTO users(name,email,password) VALUES ('${name}','${email}','${hashPassword}');`
    );

    const [rows] = await pool.query(
      `SELECT * FROM users WHERE user_id=${insertId}`
    );
    const token = generateToken(rows[0]);

    return { ...rows[0], token };
  },
  loginUser: async (_, { input }) => {
    const { email, password } = input;
    console.log(email, "e");
    const [res] = await pool.query(
      `SELECT * FROM users WHERE email='${email}'`
    );

    console.log(res[0], "res");

    const foundEmail = res[0]?.email;
    const userPass = res[0]?.password;

    if (!foundEmail) throw new Error("Check email or Password");

    const match = await bcrypt.compare(password, userPass);

    if (!match) {
      throw new UserInputError("Wrong crendetials", {
        errors: { general: "Wrong crendetials" },
      });
    }
    const token = generateToken(res[0]);

    return { ...res[0], token };
  },
};
