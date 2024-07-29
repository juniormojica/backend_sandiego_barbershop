import sequelize from "../database/db.js"

const { PaymentMethod } = sequelize.models
export const getPaymentMethods = async () => {
  const allMethods = await PaymentMethod.findAll()
  return allMethods
}

export const postPaymentMethod = async (method) => {
  console.log(method);
  const newMethod = await PaymentMethod.findOrCreate({
    where: {
      method_name: method.method_name
    }
  })

  return newMethod
}