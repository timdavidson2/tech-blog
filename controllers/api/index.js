const router = require("express").Router();
const blogRoutes = require("./blogRoutes");
const commentRoutes = require("./commentRoutes");
const userRoutes = require("./userRoutes.js");

router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);

module.exports = router;
