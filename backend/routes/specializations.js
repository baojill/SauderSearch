const router = require("express").Router();
const specialization = require("../models/specialization");

router.route("/").get((req, res) => {
  specialization
    .find()
    .then((courses) => res.json(courses))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const { name, courses } = req.body;

  const newSpecialization = new specialization({
    name,
    courses,
  });

  newSpecialization
    .save()
    .then(() => res.json("Specialization added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:name").get((req, res) => {
  specialization
    .find({ name: req.params.name })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  specialization
    .findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  specialization
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Specialization deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
