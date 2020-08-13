const router = require("express").Router();
const course = require("../models/course");

router.route("/").get((req, res) => {
  course
    .find()
    .then((courses) => res.json(courses))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const {
    courseID,
    name,
    credits,
    prereqs,
    corereqs,
    description,
    specialization,
  } = req.body;

  const newCourse = new course({
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

router.route("/:courseID").get((req, res) => {
  course
    .find({ courseID: req.params.courseID })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  course
    .findById(req.params.id)
    .then((course) => res.json(course))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  course
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Course deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  course
    .findById(req.params.id)
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
