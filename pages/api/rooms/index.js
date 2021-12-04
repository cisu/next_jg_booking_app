import nc from 'next-connect';
import bdConnect from '@config/dbConnect';

import { allRooms } from "@controllers/roomControllers"



// initialize
const handler = nc();

// run the function to connect to database
bdConnect();

handler.get(allRooms)

// if you want to use middleware
// handler.use(middleware).get(allRooms)

export default handler 