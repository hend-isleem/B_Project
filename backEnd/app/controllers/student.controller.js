const db = require("../models");
const State = db.states;
const Student = db.students;
const Op = db.Sequelize.Op;

// Create and Save a new Student
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.email || !req.body.phone) {
    res.status(400).send({
      message: "Student name, email and phone can not be empty!",
    });
    return;
  }

  // Create a Student
  const student = {
    id: Date.now().toString(),
    name: req.body.name,
    email: req.body.email,
    isDeleted: false,
    phone: req.body.phone,
    stateId: req.body.stateId,
  };
  // Save Student in the database
  Student.create(student)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Some error occurred while creating the Student. => " + err.message,
      });
    });
};

// Retrieve all Students from the database.
exports.findByEmail = (req, res) => {
  const email = req.body.email;
  // if (email == '') res.send()
  Student.findAll({
    include: ["state"],
    where: { email: email, isDeleted: false },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "b Some error occurred while retrieving students. => " + err.message,
      });
    });
};

exports.findAll = (req, res) => {
  const email = req.body.email;
  var condition = email
    ? { email: { [Op.like]: `%${email}%` }, isDeleted: false }
    : { isDeleted: false };

  Student.findAll({ include: ["state"], where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Some error occurred while retrieving students. => " + err.message,
      });
    });
};

// Find a single Student with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Student.findByPk(id, { include: ["state"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Student with id=" + id,
      });
    });
};

// Update a Student by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Student.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Student was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Student with id=" + id,
      });
    });
};

// Delete a Student with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Student.update(
    { isDeleted: true },
    {
      where: { id: id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Student was deleted successfully.",
        });
      } else {
        res.send({
          message: `Cannot delete Student with id=${id}. Maybe Student was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Student with id=" + id,
      });
    });
};

// Delete all Students from the database.
exports.deleteAll = (req, res) => {
  Student.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Students were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Some error occurred while removing all Students. => " + err.message,
      });
    });
};

// Find all published Students
exports.findAllDeleted = (req, res) => {
  Student.findAll({ where: { isDeleted: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Some error occurred while retrieving Students. => " + err.message,
      });
    });
};
