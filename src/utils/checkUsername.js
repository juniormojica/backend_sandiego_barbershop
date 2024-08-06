import sequelize from '../database/db.js'
const { User } = sequelize.models
export const checkUserName = async (username) => {
  try {
    const userNameFound = await User.findOne({
      where: {
        username
      }
    })
    if (!userNameFound) {
      throw new Error('The username doesnt exist')
    }
    return userNameFound
  } catch (error) {
    console.log(`Error in checkUserName: ${error.message}`)
    throw error
  }
}
