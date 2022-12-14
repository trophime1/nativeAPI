import express from "express";
import studentController from "../controllers/student";

const studentRouter = express.Router();

studentRouter.get("/", studentController.getStudentById);
studentRouter.post("/student/create",studentController.createStudent);
studentRouter.get("/student/single/:id", studentController.getStudentById);
studentRouter.patch("/student/update/:id", studentController.updateStudent);
studentRouter.delete("/student/delete/:id",studentController.deleteStudent);

export default studentRouter;
