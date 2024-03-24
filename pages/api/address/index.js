import nc from "next-connect";
import {
  getAddresses,
  newAddress,
} from "@/backend/controllers/addressControllers";
import { connectDB } from '@/backend/config/dbConn';

async function connectWithDB(){
  await connectDB();
}

const handler = nc();

connectWithDB();

handler.get(getAddresses);
handler.post(newAddress);

export default handler;