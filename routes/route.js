const express = require ("express");
const router = express.Router();
const Student = require("../models/student.js");
const { 
    getStudents , 
    getStudent , 
    createStudent , 
    updateStudent, 
    deleteStudent} = require("../controllers/student.controller.js")

router.get('/' , getStudents); 

router.get("/:id" , getStudent);

router.post("/" , createStudent);

router.put("/:id" , updateStudent);

router.delete("/:id" , deleteStudent);

module.exports = router;