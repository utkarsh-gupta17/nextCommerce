import nc from 'next-connect';
import { connectDB } from '@/backend/config/dbConn';
import { getProduct } from '@/backend/controllers/productControllers';

async function connectWithDB(){
  await connectDB();
}

const handler = nc();

connectWithDB();

handler.get(getProduct);
export default handler;