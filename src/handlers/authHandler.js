import { signUpController } from "../controllers/authController.js";
import jwt from 'jsonwebtoken'
import { comparePassword, encriptPassWord } from "../utils/bcryptUtils.js";
import { checkUserName } from "../utils/checkUsername.js";


const { SECRET } = process.env

export const signInHandler = async (req, res) => {
  try {
    const { username, password } = req.body
    const userNameFound = await checkUserName(username)
    if (!userNameFound) {
      return res.status(404).json({ error: true, message: 'Username not found.' });
    }
    const passwordCompare = await comparePassword(password, userNameFound.password)
    if (!passwordCompare) {
      return res.status(404).json({ error: true, message: 'Invalid Password please try again' });
    }

    const token = jwt.sign({ id: userNameFound.username }, SECRET, { expiresIn: 86400 })
    return res.status(200).json({ error: false, data: { token } });

  } catch (error) {
    console.error(`Error in signInHandler: ${error.message}`);
    res.status(400).json({ error: true, message: error.message });
  }


}

export const signUpHandler = async (req, res) => {

  try {

    const { username, email, password, roles } = req.body

    const user = {
      username,
      email,
      password: await encriptPassWord(password),
      roles: roles
    }
    const newUser = await signUpController(user)

    const token = jwt.sign({ id: newUser.id }, SECRET, { expiresIn: 86400 })
    console.log('nuevo Usuario', newUser);


    res.status(201).json({ error: false, token })



  } catch (error) {
    res.status(400).json({ error: true, message: error.message })

  }
}