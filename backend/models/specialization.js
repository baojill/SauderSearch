const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpecializationSchema = new Schema({
  name: { type: String, required: true },
  courses: {},
});

SpecializationSchema.method({});

module.exports = mongoose.model("Specialization", SpecializationSchema);

/* 
Specialization = {
    name: 'btm',
    courses: {
        1: [comm 101,... ],
        2: [],
        3: []
    }
}
*/
