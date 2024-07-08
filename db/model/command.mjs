import mongoose from "mongoose";


const {Schema, model} = mongoose;
const { ObjectId } = Schema.Types;

const cmmandSchema = new Schema({
    date: {
        Type: Date,
        required: true,
        default: Date.now()
    },
    user: {
        Type: ObjectId,
        required: true,
        unique: true
    },
    product:{
        Type: ObjectId,
        required: false
    }
});

export const commandModel = model("order", cmmandSchema);