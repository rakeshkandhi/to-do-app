const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


// JSON data for server
let todo_items = [
    { "id": 1, "title": "Titile 1", "content": "Todo item 1" },
    { "id": 2, "title": "Titile 2", "content": "Todo item 2" },
    { "id": 3, "title": "Titile 3", "content": "Todo item 3" },
    { "id": 4, "title": "Titile 4", "content": "Todo item 4" },
];



// Get server home page
app.get('/', (req, res) => {
    res.send("This is the server home page");
});


// Get all todo
app.get('/todo', (req, res) => {
    res.json(todo);
});


// Get a single todo by ID
app.get('/todo/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todo.find(p => p.id === id);
    if (!todo) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.json(todo);
});


// Create a new todo
app.post('/todo', (req, res) => {
    const { id, name, price } = req.body;
    if (!id || !name || !price) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const newTodo = { id, name, price };
    todo.push(newTodo);
    res.status(201).json(newTodo);
});


// Update a todo
app.put('/todo/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;
    const todoIndex = todo.findIndex(p => p.id === id);
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }
    const updateTodo = { ...todo[todoIndex], name, price };
    todo[todoIndex] = updateTodo;
    res.json(updateTodo);
});


// Delete a todo
app.delete('/todo/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todoIndex = todo.findIndex(p => p.id === id);
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }
    const deletedTodo = todo[todoIndex];
    todo.splice(todoIndex, 1);
    res.json(deletedTodo);
});




// Server is running on port 5000
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});