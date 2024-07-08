import {userRepo} from "../db/repositonry/index.mjs"
const {create, deleteUser, updateUser, getUser, getAllUsers} = userRepo;

const postUser = async (req, res) => {
    try {
        const {body} = req;
        const result = await create(body);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
    }
}


export {
    postUser
}