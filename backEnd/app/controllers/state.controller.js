const db = require("../models");
const State = db.states;
const Student = db.students;
const Op = db.Sequelize.Op;

// Create and Save a new State
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "State name can not be empty!",
    });
    return;
  }

  // Create a State
  const state = {
    name: req.body.name,
  };
  // Save State in the database
  State.create(state)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Some error occurred while creating the State. => " + err.message,
      });
    });
};

exports.findAll = (req, res) => {
  State.findAll({ include: ["students"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Some error occurred while retrieving states. => " + err.message,
      });
    });
};

// Find a single State with an id
exports.findOne = (req, res) => {
  const id = req.body.id;
  State.findByPk(id, { include: ["students"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving State with id=" + id,
      });
    });
};

// Update a State by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  State.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "State was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update State with id=${id}. Maybe State was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating State with id=" + id,
      });
    });
};

// Delete state by id from the database.
exports.delete = (req, res) => {
  const id = req.params.id;
  State.destroy({
    where: { id: id },
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} States were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Some error occurred while removing all States. => " + err.message,
      });
    });
};
