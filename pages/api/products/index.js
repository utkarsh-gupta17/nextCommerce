import nc from 'next-connect';
import { connectDB } from '@/backend/config/dbConn';
import { getProducts, newProduct } from '@/backend/controllers/productControllers';

async function connectWithDB(){
  await connectDB();
}

const handler = nc();

connectWithDB();

handler.get(getProducts);
handler.post(newProduct);

export default handler;