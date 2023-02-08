const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/index');
const db = require("./src/models/index.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

db.sequelize.sync().then(() => {
    console.log("DB Connection Established Successfully!");
}).catch(err => {
    console.log("Failed to sync DB: " + err.message);
});

//drop the table if it already exists

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

app.listen(5000, () => {
    console.log('Listening to port 5000');
})

app.use('/api', routes);

module.export = app;