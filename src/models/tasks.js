import mongoose from "mongoose";

const task={
             name:{
                type:String,
                required:true,
                unique:true,
                min:2,
                max:30,
                },

             done:{ type:String,
                    required:true
                  }
             };

const Task=mongoose.model("Task",new mongoose.Schema(task));
export default Task