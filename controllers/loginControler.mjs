import login from "../service/security.mjs";


const connexion = async (req, res) => {
    const { email, password } = req.body;
    const result = await login(email, password);
    if(result.data){
        const {accessToken, refreshToken} = result.data;
        return res
            .status(200)
            .cookie("refreshToken", refreshToken)
            .header("Authorization", accessToken)
            .json(result.data);
    }
    return res.status(200).json(result);
};

export default connexion;