import jwt from "jsonwebtoken";


const secret_key = process.env.secret_key;

const authenticate = (req, res, next) => {
    const token = req.headers["authorization"];
    if(!token){
        return res.status(401).json({message: "veillez-vous connectez s'il vous plait"})
    }
    try {
        const validToken = jwt.verify(token, secret_key);
        req.userId = validToken.userId;
        next();
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export default authenticate;