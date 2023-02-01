import pool from "../config/db.js";
const resolvers = {
  Query: {
    getCapmgrounds: async () => {
      const [rows, fields] = await pool.query("SELECT * FROM campground");
      return rows;
    },
    getCapmground: async (_, { campId }) => {
      const [rows, fields] = await pool.query(
        `SELECT * FROM campground WHERE camp_id=${campId}`
      );
      console.log(rows);
      return rows[0];
    },
  },
  Mutation: {
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

      const [rows, fields] = await pool.query(
        `SELECT * FROM campground WHERE camp_id=${insertId}`
      );
      console.log(rows);
      return rows[0];
    },
  },
};

export default resolvers;
