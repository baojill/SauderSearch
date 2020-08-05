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
  const specialization = req.body.specialization;
  const credits = Number(req.body.credits);
  const prereqs = req.body.prereqs;
  const corereqs = req.body.corereqs;

  const newCourse = new Course({
    courseID,
    name,
    description,
    specialization,
    credits,
    prereqs,
    corereqs,
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
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
