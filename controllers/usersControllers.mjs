import { isValidObjectId } from "mongoose";
import {userRepo} from "../db/repositonry/index.mjs"
const { create, deleteUser, updateUser, getUserById} = userRepo;

const postUser = async (req, res) => {
    try {
        const {body} = req;
        const result = await create(body);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
    }
};


const update = async (req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const result = await updateUser(id, body);
        if(!result){
            return res.status(404).send("un erreur est survenue")
        }
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
};


const delUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteUser(id);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
};


const getOneUser = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await getUserById(id);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
    }
};


export {
    postUser,
    delUser,
    update,
    getOneUser
}