import { default as mongoose } from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:25
    },
    description:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:50
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const TodoModel = mongoose.models.todos || mongoose.model("todos",Schema)

export default TodoModel;