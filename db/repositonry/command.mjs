import { commandModel } from "../model/command.mjs";


const create = async data => {
    try {
        const result = await (new commandModel(data)).save();
        return result
    } catch (error) {
        return error.message;
    }
};

const updateCommand = async (id, data) => {
    try {
        const command = await  commandModel.findById(id);
        const result = await command.set(data).save();
        return result
    } catch (error) {
        return error.message;
    }
};

const deleteCommand = async id => {
    try {
        const result = await commandModel.findByIdAndDelete(id);
        return result
    } catch (error) {
        return error.message;
    }
};

const getAllCommand = async () => {
    try {
        const result = await commandModel.find();
        return result
    } catch (error) {
        return error.message;
    }
};

export const commandRepo = {
    getAllCommand,
    updateCommand,
    deleteCommand,
    create
}