import {dbConnect} from "config/db";
import TokenId from "models/TokenId";
dbConnect();

export default async function handler (req,res) {

  const {method,body,query:{id}} = req;

  switch (method) {

    case "GET":

      try {

        const token = await TokenId.findById(id);        
        if(!token) return res.status(404).json({msg: "Token not found"})
        return res.status(200).json(token)

      } catch (error) {
        return res.status(500).json({msg: error.message})
      }

    case "PUT":

      try {

        const token = await TokenId.findByIdAndUpdate(id,body,{new:true});        
        if(!token) return res.status(404).json({msg: "Token not found"})
        return res.status(200).json(token)

      } catch (error) {
        return res.status(500).json({msg: error.message})
      }

    case "DELETE":

      try {

        const tokne = await TokenId.findByIdAndDelete(id);        
        if(!token) return res.status(404).json({msg: "Token not found"})
        return res.status(204).json({msg: "Token Deleted"})

      } catch (error) {
        return res.status(500).json({msg: error.message})
      }
  
    default:
      return res.status(500).json({msg: "This method is not supported"})

  }

}