// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/StartTimerV2'));
app.use(bodyParser.json());

// Routes
app.route('/contact').post((req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);