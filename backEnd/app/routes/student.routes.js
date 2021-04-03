module.exports = (app) => {
  const students = require("../controllers/student.controller.js");
  const states = require("../controllers/state.controller.js");

  var router = require("express").Router();

  // Create a new State
  router.post("/stateAdd", states.create);

  // Retrieve 1 State with all students
  router.post("/state", states.findOne);

  // Retrieve all State
  router.get("/stateAll", states.findAll);

  // Create a new Student
  router.post("/add", students.create);

  // Retrieve all Students
  router.get("/get", students.findAll);

  // Retrieve all Students
  router.post("/", students.findByEmail);

  // Retrieve all deleted Students
  router.get("/deleted", students.findAllDeleted);

  // Retrieve a single Student with id
  router.get("/:id", students.findOne);

  // Update a Student with id
  router.put("/:id", students.update);

  // Delete a Student with id
  router.delete("/:id", students.delete);

  // Delete all Students
  router.delete("/", students.deleteAll);

  app.use("/students", router);
  // app.use("/api/students", router);
};
