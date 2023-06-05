const router = require("express").Router();
const Category = require("../models/Category");

//ceate new category
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    // console.log(savedCat);
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all categories
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find();
    // console.log(savedCat);
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
