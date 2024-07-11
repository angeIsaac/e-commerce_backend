import { productRepo } from "../db/repositonry/productRepository.mjs";


const create = async (req, res) => {
    try {
        const {body} = req;
        const result = await productRepo.create(body);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
};


const deleteProd = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await productRepo.deleteProduct(id);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
};


const update = async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await productRepo.updateProduct(id, data);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
};


const getProd = async (req, res) => {
    try {
        const result = await productRepo.getAllProduct();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
};


const getOneProd = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await productRepo.getOneProduct(id);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
};


export   {
    getOneProd,
    getProd,
    deleteProd,
    create,
    update
};