var db = require('../models');

exports.getTodos = function(req, res) {
    db.Todo.find()
    .then(function(todos) {
        res.status(200).json({
            success: true,
            'message': 'All todos returned',
            todos
        });
    }).catch(function(err) {
        res.json(err);
    })
}

exports.createTodo = function(req, res) {
    var  todo = req.body;
    
    if (!todo.created_date) 
         todo.created_date = new Date(); 

    if (!todo.completed)
        todo.completed = false;

    db.Todo.create(todo)
    .then(function() {
        res.status(201).json({ 
            success: true,
            message: 'Success to create todo',
            todo
        });
    }).catch(function() {
        res.status(201).json({ success: false, message: 'Failed to create todo',  })
    })
}

exports.getTodo =  function(req, res) {
    db.Todo.findById(req.params.id)
    .then(function(todo) {
        res.status(200).json({
            success: true,
            'message': 'todo returned',
            todo
        });
    }).catch(function(err) {
        res.json(err);
    })
}

exports.updateTodo = function(req, res) {
    db.Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(function(todo) {
        res.status(204).json({ 
            success: true,
            message: 'Success to update todo',
            todo
        });
    }).catch(function(err) {
        res.json(err);
    })
}

exports.deleteTodo = function(req, res) {
    db.Todo.remove({ _id: req.params.id })
    .then(function() {
        res.status(200).json({ 
            success: true, 
            message: 'Success to delete todo'
        });
    }).catch(function(err) {
        res.json(err);
    })
}

module.exports = exports;