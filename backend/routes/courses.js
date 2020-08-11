const router = require("express").Router();
const Course = require("../models/course.model");
// const R = require('ramda');

router.route("/").get((req, res) => {
  Course.find()
    .then((courses) => res.json(courses))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const {
    courseID,
    name,
    credits,
    // R.pathOr(NaN, ['req','body','credits']),
    prereqs,
    corereqs,
    description,
    specialization,
  } = req.body;

  const newCourse = new Course({
    courseID,
    name,
    credits,
    prereqs,
    corereqs,
    description,
    specialization,
  });

  newCourse
    .save()
    .then(() => res.json("Course added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Course.findById(req.params.id)
    .then((course) => res.json(course))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:name").get((req, res) => {
  Course.find({ name: req.params.name })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Course.findByIdAndDelete(req.params.id)
    .then(() => res.json("Course deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Course.findById(req.params.id)
    .then((course) => {
      course.courseID = req.body.courseID;
      course.name = req.body.name;
      course.description = req.body.description;
      course.specialization = req.body.specialization;
      course.credits = Number(req.body.credits);
      course.prereqs = req.body.prereqs;
      course.corereqs = req.body.corereqs;

      course
        .save()
        .then(() => res.json("Course updated!"))
        .catch((err) => res.status(500).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
