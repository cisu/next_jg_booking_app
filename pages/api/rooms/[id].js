import nc from 'next-connect';
import bdConnect from '@config/dbConnect';

import { getSingleRoom } from "@controllers/roomControllers"



// initialize
const handler = nc();

// run the function to connect to database
bdConnect();

handler.get(getSingleRoom)



export default handler 