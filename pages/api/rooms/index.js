import nc from 'next-connect';
import bdConnect from '@config/dbConnect';

import { allRooms, newRoom } from "@controllers/roomControllers"



// initialize
const handler = nc();

// run the function to connect to database
bdConnect();

handler.get(allRooms)

handler.post(newRoom)

// if you want to use middleware
// handler.use(middleware).get(allRooms)

export default handler 