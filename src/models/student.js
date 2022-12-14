import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    number: {
      type: Number,
    }
  },
  { timestamps: true }
);

const Student = mongoose.model("student", studentSchema);
export default Student;
