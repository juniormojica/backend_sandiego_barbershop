import jwt from 'jsonwebtoken'
import sequelize from '../database/db.js'
const { SECRET } = process.env
const { User } = sequelize.models
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']

    console.log(token)
    if (!token) res.status(403).json({ error: true, message: 'No token provided' })
    const tokenDecoded = jwt.verify(token, SECRET)

    req.userId = tokenDecoded.id

    const user = await User.findByPk(req.userId, { attributes: { exclude: ['password'] } })
    if (!user) res.status(403).json({ error: true, message: 'Not user found' })

    console.log(user.dataValues)

    next()
  } catch (error) {
    return res.status(401).json({ error: true, message: 'Unauthorized' })
  }
}
