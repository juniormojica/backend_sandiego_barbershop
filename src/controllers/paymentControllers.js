import sequelize from '../database/db.js'
const { Payment, Client } = sequelize.models
export const createPayment = async (payment) => {
  const { id_client, id_method, amount, id_provided } = payment

  const newPayment = await Payment.create({ amount })

  await newPayment.setClient(id_client)
  await newPayment.addPaymentMethod(id_method)
  await newPayment.setProvidedService(id_provided)

  newPayment.save()
  return newPayment
}

export const getAllPayments = async () => {
  const payments = await Payment.findAll({
    attributes: ['id_payment', 'amount', 'createdAt'],
    include: {
      model: Client,
      attributes: ['id_client', 'name', 'phone']
    }
  })
  return payments
}
