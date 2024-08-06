import sequelize from '../database/db.js'
const { Payment, Client } = sequelize.models
export const createPayment = async (payment) => {
  const { idClient, idMethod, amount, idProvided } = payment

  const newPayment = await Payment.create({ amount })

  await newPayment.setClient(idClient)
  await newPayment.addPaymentMethod(idMethod)
  await newPayment.setProvidedService(idProvided)

  newPayment.save()
  return newPayment
}

export const getAllPayments = async () => {
  const payments = await Payment.findAll({
    attributes: ['idPayment', 'amount', 'createdAt'],
    include: {
      model: Client,
      attributes: ['idClient', 'name', 'phone']
    }
  })
  return payments
}
