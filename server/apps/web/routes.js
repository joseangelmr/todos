var path = require('path');
module.exports = (function(app, passport) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './../../../client/index.html'));
  });
});
