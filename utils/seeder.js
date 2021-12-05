const Room  = require('../models/room');

const mongoose = require('mongoose');


const rooms =  require('../data/rooms');

// connect to database survey and post the data
mongoose.connect('mongodb://localhost:27017/booking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const seedRooms = async () => {
    try {
        // delete all the Room database
        await Room .deleteMany()
        console.log('Rooms are deleted');

        // insert the seeders into database
        await Room.insertMany(rooms);
        console.log('All Rooms are added.')

        // when it's done will auto exit
        process.exit()

    } catch (error) {
        console.log(error.message)
        process.exit()
    }
}


seedRooms()