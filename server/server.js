const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(json);
// JSON data for server
let todo_items = [
    { "id": 1, "title": "Titile 1", "content": "Todo item 1" },
    { "id": 2, "title": "Titile 2", "content": "Todo item 2" },
    { "id": 3, "title": "Titile 3", "content": "Todo item 3" },
    { "id": 4, "title": "Titile 4", "content": "Todo item 4" },
];

// home page of the server
app.get("/", (req, res) => {
    res.json({
        message:
            "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.",
    });
});

// Get all todo items
app.get('/todo', (req, res) => {
    res.json(todo_items);
});

// Get particular todo item
app.get("/todo/:id", (req, res) => {
    const id = req.params.id;
    const item = todo_items.find((item) => item.id == id);
    if (!item) {
        res.status(400).json({ "error": "Todo item not found." });
        return;
    }
    res.json(item);
});


// create the post request to add a todo item
app.post("/todo", (req, res) => {
    const item = {
        id: req.body.id,
        title: req.body.title,
        content: req.body.content,
    };
    if (!item.content || !item.title) {
        return res.status(400).json({ "error": "Missing required fields" });
    }
    todo_items.push(item);
    res.json(item);
});
// Server is running on port 5000
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});