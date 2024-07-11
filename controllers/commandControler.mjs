import {commandRepo} from "../db/repositonry/command.mjs";

const create = async (req, res) => {
    try {
        const {body} = req;
        const result = await commandRepo.create(body);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
};


const deleteCommand= async (req, res) => {
    try {
        const { id } = req.params;
        const result = await commandRepo.deleteCommand(id);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
};


const update = async (req, res) => {
    try {
        const data = req.body;
        const id = req.params;
        const result = await commandRepo.updateCommand(id, data);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
};


const getCommand= async (req, res) => {
    try {
        const result = await commandRepo.getAllCommand();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
};


export {
    getCommand,
    deleteCommand,
    update,
    create
};
