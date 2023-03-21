//Imports
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import {todos} from './routes/Todos.js';
import { registration } from './routes/Registration.js';
import { login } from './routes/Login.js';


//DB Models
// import Todo from './models/Todo.js';


const app = express();

//Middleware
app.use(cors());
app.use(express.json());


app.use('/todos', todos);
app.use('/register', registration);
app.use('/login',login);


//Dotenv
dotenv.config();
const port = process.env.PORT;
const db = process.env.DB_URL;


//Routes
app.get('/', (req, res) => {
    res.send('API for todo app');
});


//Server connection
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
//DB connection
mongoose.connect(db)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(`Database not connected, ${err.message}`));