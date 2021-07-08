module.exports = app => {
    const controller = require('../controllers/todo.controller')

    const router = require('express').Router();

    //get all todos
    router.get('/', controller.findAll);

    //get a todo by ID
    router.get('/:id', controller.findById);
    app.use('/api/todos', router);
}