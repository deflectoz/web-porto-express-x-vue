const { DataTypes } = require("sequelize");
const sequelize = require("../libs/db");

const WorksCategory = sequelize.define(
  "WorksCategory",
  {
    //Colum Name
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updateBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "tm_workscategory",
    timestamps: true,
  }
);

module.exports = WorksCategory;
