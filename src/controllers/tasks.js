import { HttpError, StatusCode } from "../util/http.js";
import Task from "../models/tasks.js";

export async function AddTask(req, res) {
    try {
      const { name } = req.body;
      const t = await Task.create(
        {
        name: name,
        done: "to do",
        });
      res.json(t);
    } catch {
      res.sendStatus(500);
    }
  }

  export async function GetTaskByID(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findById(id);
      res.json(task);
    } catch {
      res.sendStatus(500);
    }
  }

  export async function GetAllTasks(req,res){
    try{
      const tasks = await Task.find({})
      res.json(tasks);
    }
    catch {
      res.sendStatus(500);
    }
  
  }

  export async function DeleteTask(req,res){
    try{
      const {id} =req.params;
      await Task.deleteOne({_id: id});  
      res.json("task deleted successfully");
    } catch {
      res.sendStatus(500);
    }
  
  }

  export async function UpdateTask(req,res){
    try{
      const {id} =req.params;
      const {name , done } = req.body;
      const newprop= { $set: {name: name, done: done} };
      const result = await Task.updateOne({_id : id},newprop);
      if (result.modifiedCount === 0){
        return res.sendStatus(404)
      }
      res.json({message: "updated successfully",}); 
    }
    catch {
      res.sendStatus(500);
    }
  }