import { Sequelize } from 'sequelize';

try {
  const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/coverpos');

  console.log('connected')
} catch (error) {
  console.log('----error',error)
}
// if (sequelize) {
//   console.log('connected to database')
// }else{
//   console.log('not connceted')
// }


export { Sequelize };
// import { Pool } from "pg";
// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: parseInt(process.env.DB_PORT || "5432")
// });



// // console.log(pool)
// const connectToDB = async () => {
//   try {
//     await pool.connect();
//     console.log('Database connected')
//   } catch (err) {
//     console.log(err);
//   }
// };
// connectToDB();
// export default connectToDB