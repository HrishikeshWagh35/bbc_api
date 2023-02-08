const db = require("../models/index");
const Members = db.members;

// Create and Save a new Club
exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstName) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Club
    const member = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        createdAt: Date.now(),
        imageURL: req.body.imageURL,
        titlesRead: req.body.titlesRead
    };

    // Save Club in the database
    Members.create(member)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the member."
            });
        });
}