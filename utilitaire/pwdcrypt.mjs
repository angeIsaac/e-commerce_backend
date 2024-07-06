import bcrypt from "bcrypt"

export const pwdcrypt = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const passwordcrypt = await bcrypt.hash(password, salt);
        return passwordcrypt
    } catch (error) {
        console.log(error.message);
    }
}
