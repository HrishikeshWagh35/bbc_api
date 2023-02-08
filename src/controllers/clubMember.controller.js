const { DATE } = require("sequelize");
const db = require("../models/index");
const MemberClubs = db.memberClubs;

// Create and Save a new Club
exports.create = (req, res) => {
    // Validate request
    if (!req.body.person_id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Club
    const memberClub = {
        person_id: req.body.person_id,
        company_id: req.body.company_id,
        createdAt: Date.now(),
    };

    // Save Club in the database
    MemberClubs.create(memberClub)
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