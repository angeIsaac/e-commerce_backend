import jwt from "jsonwebtoken";
import {userRepo} from "../db/repositonry/userRepository.mjs";
import bcryp from "bcrypt"

const { getUser } = userRepo;
const secret_key = process.env.secret_key;
const expiresIn = process.env.expriresIn

const login = async (email, password) => {
    const user = await getUser({email});
    if(!user){
        return {message: "email est invalide", data: null};
    }
    const vaildPassword = bcryp.compare(password, user.password);
    if(!vaildPassword){
        return {message: "mot de passe incorrect", data: null};
    }
    try {
        const accessToken = jwt.sign({userId: user._id}, secret_key, {expiresIn})
        const refreshToken = jwt.sign({userId: user._id}, secret_key, {expiresIn: "7d"})
        return {message: "connection reussie", data: {accessToken, refreshToken}}
    } catch (error) {
        return {message: error.message};
    }
};

export default login;