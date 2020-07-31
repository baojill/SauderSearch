const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  courseID: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  credits: { type: Number, required: true },
  prerequisites: [],
});

CourseSchema.method({});

CourseSchema.static({});

module.exports = mongoose.model("Courses", CourseSchema);
