import Student from "../models/student"
class studentController{
static createStudent=async (request, response) => {
    const student = new Student(request.body);
    try {
      await student.save();
      response.status(200).send(student);
    } catch (error) {
      response.status(500).send({message:error});
    }
  }

  static getAll=async (request, response) => {   
    try {
      const student =await Student.find();
      if (!student) {
        return response.status(404).send({message:"No student Found"});
      }
      response.send(student);
    } catch (e) {
      response.send({error:e});
    }
  }


  static getStudentById=async (request, response) => {   
    try {
      const student =await Student.findById(request.params.id);
        return response.status(200).send(student);
    } catch (e) {
      response.send({error:e});
    }
  }
  static updateStudent=async (request, response) => {
    const student = await Student.findById(request.params.id);
    const updates = Object.keys(request.body);
    const allowedUpdates = [
      "name",
      "number",
    ];
    const isValidUpdate = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    try {
      updates.forEach((update) => (student[update] = request.body[update]));
      await student.save();
      response.status(200).send({message:'student updated successfully'});
    } catch (e) {
      response.status(500).send({error:e});
    }
  }
  
  static deleteStudent=async (request, response) => {
    try {
      const student = await Student.findById(request.params.id);
          await student.remove();
          response.status(400).send({message:'student removed!'});
        }
    catch (e) {
      response.status(500).send({error:e});
    }
  }

}
export default studentController