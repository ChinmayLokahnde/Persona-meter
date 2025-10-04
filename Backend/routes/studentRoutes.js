const express = require ('express');
const {getStudents, getStudentById, generateCertificate} = require('../controllers/studentController');

const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudentById);
router.get("/:id/certificate", generateCertificate);

module.exports = router;