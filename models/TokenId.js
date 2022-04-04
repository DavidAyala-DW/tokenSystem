import {Schema,model,models} from "mongoose";


const tokenSchema = new Schema({

  token:{
    type: String,
    required: [true,"Token is required"],
    trim: true,
    maxlength: [40,"Title must be less than 40 characters"]
  }

},{
  timestamps:true,
  versionKey: false
})

export default models.TokenId ||  model("TokenId",tokenSchema);