import express from 'express';
import Todo from "../models/Todo.js";
import auth from '../middleware/auth.js';


const router = express.Router();


router.post('/',auth, async(req, res) => {

    const {author, task, isCompleted, date, email} = req.body;

    let todo = await new Todo({
        author,
        task,
        isCompleted,
        email,
        date,
    });

    try {
        todo.save();
        res.send(todo);
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
});

router.get('/',auth, async(req, res) => {
    try {
        const todo = await Todo
        .find()
        .sort({date: -1});
        const filteredTasks = todo.filter(todo=>todo.email === req.user.email)
        res.send(filteredTasks);

    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
    
});

router.put('/:id',auth, async(req, res) => {

    try {
    const todo = Todo.findById(req.params.id);
    if(!(await todo)) return res.status(404).send('Task not found');

    const {author, task, isCompleted, email, date} = req.body;

        const updatedTask = await Todo.findByIdAndUpdate(req.params.id, 
            {
                author, 
                task, 
                isCompleted, 
                email,
                date,
            },
            {
                new: true,
            });
        res.send(updatedTask);
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
})

router.delete('/:id',auth, async(req, res) => {
    if(!(await Todo.findById(req.params.id))) return res.status(404).send('Task not found');

    try {
        const deletedTask = await Todo.findByIdAndDelete(req.params.id);

        res.send(deletedTask);
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
    
});

router.patch('/:id',auth, async(req, res) => {

    try {
    const task = await Todo.findById(req.params.id);
    if(!task) return res.status(404).send('Task not found');

    const updatedIsCompleted = await Todo.findByIdAndUpdate(req.params.id,{
        isCompleted: !task.isCompleted,
    }, {new: true});
    
        res.send(updatedIsCompleted);
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
    
});

export {router as todos};