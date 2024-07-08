import mongoose from "mongoose";
import { pwdcrypt } from "../../utilitaire/pwdcrypt.mjs";
import validator from "validator";

const {Schema, model} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        valiate(value){
            if(!validator.isEmail(value)){
                throw new Error("email est invalide")
            }
        }
    },
    avatar: {
        type: Buffer,
        required: false,
    }
},{
    toJSON:{
        transform(doc, ret){
            delete ret.password;
            delete ret.__v;
        }
    }
})

userSchema.pre("save", async function(next){
    if(this.isNew){
        this.password = await pwdcrypt(this.password);
    }
    next();
})

export  const userModel = model("users", userSchema);