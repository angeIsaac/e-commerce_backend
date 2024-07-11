import { userModel } from "../model/userModel.mjs";
import mongoose from "mongoose";

const {Schema: {Types:{ObjectId}}} = mongoose;


const create = async data => {
    try {
        const result = await (new userModel(data)).save();
        return result
    } catch (error) {
        console.log(error.message);
    }
}

const getAllUsers = async () => {
    try {
        const result = await userModel.find();
        return result
    } catch (error) {
        console.log(error.message);
    }
}

const getUser = async id => {
    try {
        const result = await userModel.findById(id);
        return result
    } catch (error) {
        console.log(error.message);
    }
}

const deleteUser = async id => {
    try {
        const result = await userModel.deleteOne({_id: id});
        return result
    } catch (error) {
        console.log(error.message);
    }
}

const updateUser = async (id, data) => {
    try {
        const result = await userModel.updateOne({_id: id}, data);
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

export const userRepo = {
    create,
    updateUser,
    getAllUsers,
    getUser,
    deleteUser
}