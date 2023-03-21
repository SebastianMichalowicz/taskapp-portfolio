import { mongoose, Schema } from "mongoose";

const TodoSchema = new Schema({
    author: {
        type: String,
    },
    task: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: new Date(),
    },
    email: {
        type: String,
    }

})

const Todo = mongoose.model('Todo', TodoSchema);

export default Todo;