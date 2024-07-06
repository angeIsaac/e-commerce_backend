import mongoose from "mongoose";
import { pwdcrypt } from "../../utilitaire/pwdcrypt.mjs";
import validator from "validator";

const {Schema, model} = mongoose
const { ObjectId } = Schema.Types;

const userSchema = new Schema({
    nom: {
        type: String,
        required: true,
        trim: true
    },
    prenom: {
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
    },
    command: {
        type: ObjectId,
        required: true
    }
})

userSchema.pre("save", async () =>{
    this.password = await pwdcrypt(this.password);
})

export  const userModel = model("users", userSchema);