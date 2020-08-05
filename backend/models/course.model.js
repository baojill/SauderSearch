const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  courseID: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  specialization: { type: String },
  credits: { type: Number, required: true },
  prereqs: [
    // {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "course",
    // },
  ],
  corereqs: [
    // {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "course",
    // },
  ],
});

CourseSchema.method({});

CourseSchema.static({});

module.exports = mongoose.model("Courses", CourseSchema);
