const WorksCategory = require("../models/WorksCategory");

exports.index = async (req, res) => {
  try {
    const result = await WorksCategory.findAll();
    if (result.length === 0) {
      return res.json({ error: "Not Found !" });
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Something Error !" });
  }
};

exports.store = async (req, res) => {
  try {
    const store = await WorksCategory.create({
      categoryName: req.body.categoryName,
      createdBy: 1,
    });
    res.json({ status: "Succes Insert !" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something Error !" });
  }
};

exports.getData = async (req, res) => {
  try {
    const result = await WorksCategory.findAll({
      where: { categoryName: req.body.categoryName },
    });
    if (result.length === 0) {
      return res.json({ error: "Not Found !" });
    }
    res.json(result);
  } catch (error) {
    // console.error(error);
    return res.status(500).json({ error: "Something Error !" });
  }
};
