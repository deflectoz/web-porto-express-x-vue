const Sequelize = require("sequelize");

const sequelize = new Sequelize("web-porto-node", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log, // Aktifkan logging SQL
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database successfully.");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

module.exports = sequelize;
