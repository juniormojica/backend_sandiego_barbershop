
import sequelize from "../database/db.js"
const { Payment } = sequelize.models
export const createPayment = async (payment) => {
  const { id_client, id_method, amount } = payment


  const newPayment = await Payment.create({ amount })

  await newPayment.setClient(id_client)
  await newPayment.addPaymentMethod(id_method)
  console.log(newPayment.setClient());
  newPayment.save()
  return newPayment
}