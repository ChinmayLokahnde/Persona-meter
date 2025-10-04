const Student = require("../models/student");

const getStudents = async (req,res)=>{
    const student = await Student.find();
    res.json(student);
};

const getStudentById = async (req,res)=>{
    const student = await Student.findById(req.params.id);
    if(!student) return res.status(404).json({error:"Studnet not Found"});
    res.json(student);
};

const generateCertificate = async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) return res.status(404).json({ error: "Student not found" });

  let category = "All-Rounder";
  if (student.leadership > 8) category = "Leader";
  else if (student.academics > 8) category = "Scholar";

  const feedback = `${student.name} has demonstrated strong ${category.toLowerCase()} qualities with a skill score of ${student.skill}/10.`;

  res.json({
    name: student.name,
    category,
    feedback,
  });
};


module.exports = {getStudents, getStudentById, generateCertificate};