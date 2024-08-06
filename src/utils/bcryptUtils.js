import bcrypt from 'bcrypt'
export const encriptPassWord = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const passwordHashed = await bcrypt.hash(password, salt)
  console.log('user Password' + passwordHashed)

  return passwordHashed
}
export const comparePassword = async (password, passwordToCompare) => {
  return await bcrypt.compare(password, passwordToCompare)
}
