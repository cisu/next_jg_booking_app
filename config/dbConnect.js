import mongoose from 'mongoose';

const bdConnect = () => {
    // check if mongoose connection is ready
    if(mongoose.connection.readyState >= 1) {
        return
    }

    // connect to db
    mongoose.connect(process.env.BD_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    // .then(con => console.log('Connected to local database'))
}

export default bdConnect