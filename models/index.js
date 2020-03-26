var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost/todoAPI', { useUnifiedTopology: true });
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');