const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  courseID: { type: String, required: true },
  name: { type: String, required: true },
  credits: { type: Number, required: true },
  prereqs: {
    description: { type: String },
    courses: [
      // {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: "course",
      // },
    ],
  },
  corereqs: {
    description: { type: String },
    courses: [
      // {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: "course",
      // },
    ],
  },
  description: { type: String },
  specialization: { type: String },
});

CourseSchema.method({});

CourseSchema.static({});

module.exports = mongoose.model("Courses", CourseSchema);
