import nc from "next-connect";
import { registerUser } from "@/backend/controllers/authControllers";
import { connectDB } from '@/backend/config/dbConn';
import onError from "@/backend/middlewares/errors";

async function connectWithDB(){
  await connectDB();
}

const handler = nc({ onError });

connectWithDB();

handler.post(registerUser);

export default handler;