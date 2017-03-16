var db = require('mongoose');

var ObjectId = db.Schema.ObjectId;
var Schema = new(db.Schema)({
  title: {type: String, trim: true, required: true},
  done: {type: Boolean, default: false},
});

var Todo = db.model('Todo', Schema);
