import Room from '../models/room';

// Get all Rooms =>  /api/rooms
const allRooms = async (req, res) => {
  
  try {
  // find all room into database
  const rooms = await Room.find()
  
  res.status(200).json({
    success:true,
    count: rooms.length,
    rooms
  })

  } catch (error) {
    res.status(400).jsoon({
      success: false,
      error: error.message
    })
  }


};

// Create new room  =>  /api/rooms
const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);

    res.status(200).json({
      success: true,
      room,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
  
};


// Get room details  =>  /api/rooms/:id
const getSingleRoom = async (req, res) => {
  
    const room = await Room.findById(req.query.id);

    if(!room) {
      res.status(404).json({
        success: false,
        error: 'Room not found with this ID'
      })
    }

    res.status(200).json({
      success: true,
      room,
    });


  
};

export {
  allRooms, 
  newRoom, 
  getSingleRoom
};
