const db = require('../models');

module.exports = function(app) {
    app.get('/api/projects', function(req, res) {
        db.Project.findAll({}).then(function(data) {
            res.json(data);
        });
    })
}