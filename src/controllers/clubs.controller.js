const db = require("../models/index");
const Clubs = db.clubs;

const Op = db.Sequelize.Op;

// Create and Save a new Club
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Club
    const club = {
        id: req.body.id,
        name: req.body.name,
        createdAt: req.body.createdAt,
        photo: req.body.photo
    };

    // Save Club in the database
    Clubs.create(club)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Club."
            });
        });
}