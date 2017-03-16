var db = require('mongoose'),
  Todo = db.model('Todo');

function allTodos(res) {
  Todo.find(function (err, todos) {
    if (err) {
      res.send(err);
    }
    res.json(todos)
  });
}

module.exports = (function (app) {
  app.route('/todos')
    .post(function (req, res) {
      console.log('req', req.body)
      Todo.create({
        title: req.body.title,
        done: false
      }, function (err, todo) {
        if (err)
          res.send(err);
        allTodos(res);
      });
    })
    .get(function (req, res) {
      allTodos(res);
    });

  app.route('/todos/:id')
    .get(function (req, res) {

    })
    .put(function (req, res) {
      console.log(req.params, req.body)
      Todo.findOneAndUpdate({ _id: req.params.id }, req.body,
        function (err, todo) {
          console.log('TODO EDITADO', todo)
          if (err)
            res.send(err)
          allTodos(res);
        })
    })
    .delete(function (req, res) {
      Todo.remove({
        _id: req.params.id
      }, function (err, todo) {
        if (err)
          res.send(err);
        allTodos(res);
      });
    });
});
