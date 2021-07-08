const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('This is the top route in the Blog Post API');
})

app.get('/', function(req, res) {
    res.send('You have reached the router handler for get all blog posts')
})

require('./src/routes/blogpost.route')(app);
require('./src/routes/user.route')(app);
require('./src/routes/todo.route')(app);

app.listen(3000, function () {
    console.log('BlogPostApp listening on port 3000');
})