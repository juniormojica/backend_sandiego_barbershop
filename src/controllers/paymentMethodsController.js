import sequelize from '../database/db.js'

const { PaymentMethod } = sequelize.models
export const getPaymentMethods = async () => {
  const allMethods = await PaymentMethod.findAll()
  return allMethods
}

export const postPaymentMethod = async (method) => {
  console.log(method)
  const newMethod = await PaymentMethod.findOrCreate({
    where: {
      methodName: method.methodName
    }
  })

  return newMethod
}

export const deletePaymentMethod = async (idMethod) => {
  const method = await PaymentMethod.findByPk(idMethod)
  if (!method) {
    throw Error('No se pudo encontrar el metodo')
  }
  const methodDeleted = await PaymentMethod.destroy({
    where: {
      idMethod
    }
  })

  if (methodDeleted) {
    return `Metodo ${method.methodName} Eliminado Correctamente`
  } else {
    throw Error('El metodo que estas tratando de eliminar no existe en la base de datos')
  }
}

export const updatePaymentMethod = async (idMethod, newMethodName) => {
  const method = await PaymentMethod.findByPk(idMethod)

  if (!method) {
    throw Error('No se pudo encontrar el metodo')
  }
  const [affectedRows] = await PaymentMethod.update({ methodName: newMethodName }, {
    where: {
      idMethod
    }
  })
  console.log(affectedRows)
  if (affectedRows === 0) {
    throw new Error('No se pudo actualizar el Metodo de pago')
  }
  return `Se actualizo Exitosamente el metodo ${method.methodName} ahora es ${newMethodName}`
}
