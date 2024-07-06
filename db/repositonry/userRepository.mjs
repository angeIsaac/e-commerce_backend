import { userModel } from "../model/userModel.mjs";


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
        const result = userModel.find();
        return result
    } catch (error) {
        console.log(error.message);
    }
}

const getUser = async id => {
    try {
        const result = userModel.findById(id);
        return result
    } catch (error) {
        console.log(error.message);
    }
}

const deleteUser = async id => {
    try {
        const result = userModel.findByIdAndDelete(id);
        return result
    } catch (error) {
        console.log(error.message);
    }
}

const updateUser = async (id, data) => {
    try {
        const user = userModel.findById(id);
        if(!user){
            return {status: 404, message: "l'utilisatuer n'existe pas", data: null}
        }
        const result = await user.set(data).save();
        return {status: 201, message: "mise ajour reussie", data: {...result}}
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