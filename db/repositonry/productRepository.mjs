import { productModel } from "../model/productModel.mjs";

const create = async data => {
    try {
        const product = await (new productModel(data)).save();
        return product;
    } catch (error) {
        return error.message;
    }
};

const deleteProduct = async id => {
    try {
        const result = await productModel.findByIdAndDelete(id);
        return result
    } catch (error) {
        return error.message;
    }
}

const updateProduct = async (id, data) => {
    try {
        const product = await productModel.findById(id);
        if(!product){
            return "le produit n'existe pas";
        }
        const result = await product.set(data).save();
        return result;
    } catch (error) {
        return error.message;
    }
};

const getProduct = async () => {
    try {
        const result = await productModel.find();
        return result
    } catch (error) {
        return error.message;
    }
};

const getOneProduct = async id => {
    try {
        const result = await productModel.findById(id);
        return result
    } catch (error) {
        return error.message;
    }
};

const getAllProduct = async () => {
    try {
        const result = await productModel.find();
        return result
    } catch (error) {
        return error.message;
    }
}

export const productRepo = {
    create,
    getAllProduct,
    getOneProduct,
    getProduct,
    deleteProduct,
    updateProduct
}