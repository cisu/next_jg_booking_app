const allRooms = (req, res) => {
    res.status(200).json({ 
        success: true,
        messages: 'All Rooms'
    })
}

export {
    allRooms
}