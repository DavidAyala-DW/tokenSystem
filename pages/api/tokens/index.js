import {dbConnect} from "config/db";
import TokenId from "models/TokenId";
dbConnect();

export default async function handler(req, res) {

  const {method,body} = req;

  switch (method) {

    case "GET":

      try {

        const tokens = await TokenId.find();        
        return res.status(200).json(tokens)

      } catch (error) {
        return res.status(500).json({msg: error.message})
      }

    case "POST":

      try {

        const newToken = new TokenId(body);        
        const savedToken = await newToken.save();
        return res.status(201).json(savedToken);

      } catch (error) {
        return res.status(500).json({msg: error.message})
      }

    default:
      return res.status(500).json({msg: "This method is not supported"})

  }

}
 