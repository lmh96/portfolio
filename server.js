const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use(express.static(path.join(__dirname, 'build')));

require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(
        "Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});

module.exports = app;