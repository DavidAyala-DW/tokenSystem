import {connect,connection} from "mongoose";

const conn = {
  isConnected: false
}

export async function dbConnect(){
  
  if(conn.isConnected) return;
  const db = await connect(process.env.MONGODB_URL);
  
}

connection.on("connected", () => {
  console.log("Mongo connected");
})



