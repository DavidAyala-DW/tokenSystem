import {Schema,model,models} from "mongoose";


const taskSchema = new Schema({

  title:{
    type: String,
    required: [true,"Title is required"],
    unique: [true,"This title already exists"],
    trim: true,
    maxlength: [40,"Title must be less than 40 characters"]
  },

  description: {
    type: String,
    required: [true,"Description is required"],
    maxlength: [500,"Title must be less than 500 characters"]
  }


},{
  timestamps:true,
  versionKey: false
})

export default models.Task ||  model("Task",taskSchema);