const router = require("express").Router();
let Course = require("../models/course.model");

router.route("/").get((req, res) => {
  Course.find()
    .then((courses) => res.json(courses))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const courseID = req.body.courseID;
  const name = req.body.name;
  const description = req.body.description;
  const credits = Number(req.body.credits);
  const prereqs = req.body.prereqs;

  const newCourse = new Course({
    courseID,
    name,
    description,
    credits,
    prereqs,
  });

  newCourse
    .save()
    .then(() => res.json("Course added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
