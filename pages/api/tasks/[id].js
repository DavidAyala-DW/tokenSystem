import {dbConnect} from "config/db";
import Task from "models/Task";
dbConnect();

export default async function handler (req,res) {

  const {method,body,query:{id}} = req;

  switch (method) {

    case "GET":

      try {

        const task = await Task.findById(id);        
        if(!task) return res.status(404).json({msg: "Task not found"})
        return res.status(200).json(task)

      } catch (error) {
        return res.status(500).json({msg: error.message})
      }

    case "PUT":

      try {

        const task = await Task.findByIdAndUpdate(id,body,{new:true});        
        if(!task) return res.status(404).json({msg: "Task not found"})
        return res.status(200).json(task)

      } catch (error) {
        return res.status(500).json({msg: error.message})
      }

    case "DELETE":

      try {

        const task = await Task.findByIdAndDelete(id);        
        if(!task) return res.status(404).json({msg: "Task not found"})
        return res.status(204).json({msg: "Task Deleted"})

      } catch (error) {
        return res.status(500).json({msg: error.message})
      }
  
    default:
      return res.status(500).json({msg: "This method is not supported"})

  }

}