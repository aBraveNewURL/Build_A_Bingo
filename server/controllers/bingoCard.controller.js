const db = require('../models');

exports.create = (req, res) => {
    //validate
if(!req.body.title) {
    res.status(400).send
}
}

// const getPagination = (page, size) => {
//   const limit = size ? +size : 3;
//   const offset = page ? page * limit : 0;
//   return { limit, offset };
// };
// Create and Save a new bingo card
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a bingo card
  const bingoCard = new Card({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  });
  // Save bingo card in the database
  bingoCard
    .save(bingoCard)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "An error has occured while creating bingo card .",
      });
    });
};
// Retrieve all bingoCards from the database.
exports.findAll = (req, res) => {
  const { page, size, title } = req.query;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};
  const { limit, offset } = getPagination(page, size);
  Card.paginate(condition, { offset, limit })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        bingoCards: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bingoCards.",
      });
    });
};
// Find a single Card with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Card.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found bingo card with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving bingo card with id=" + id });
    });
};
// Update a Card by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  const id = req.params.id;
  Card.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update bingo card with id=${id}. possibly bingo card was not found!`,
        });
      } else res.send({ message: "bingo card was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating bingo card with id=" + id,
      });
    });
};
// Delete a bingo card with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Card.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete bingo card with id=${id}. bingo card was not found!`,
        });
      } else {
        res.send({
          message: "bingo card was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete bingo card with id=" + id,
      });
    });
};
// Delete all bingoCards from the database.
exports.deleteAll = (req, res) => {
  Card.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} bingoCards were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all bingoCards.",
      });
    });
};
// Find all submitted bingoCards
exports.findAllPublished = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);
  Cards.paginate({ published: true }, { offset, limit })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        bingoCards: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bingoCards.",
      });
    });
};