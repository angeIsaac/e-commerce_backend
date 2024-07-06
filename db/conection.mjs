import mongoose from "mongoose"

const connectDb = ()=> {
    try {
        mongoose.connect(process.env.db_uri);
        console.log("connection reuissie")
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDb();