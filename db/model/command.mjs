import mongoose from "mongoose";


const {Schema, model} = mongoose;
const { Types: {ObjectId} } = Schema;

const cmmandSchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    user: {
        type: ObjectId,
        ref: "users",
        required: true,
    },
    product:{
        type: ObjectId,
        ref: "products",
        required: true
    }
});

export const commandModel = model("order", cmmandSchema);