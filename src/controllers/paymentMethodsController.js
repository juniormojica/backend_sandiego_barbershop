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

export const deletePaymentMethod = async (id_method) => {

  const method = await PaymentMethod.findByPk(id_method)
  if (!method) {
    throw Error('No se pudo encontrar el metodo')
  }
  const methodDeleted = await PaymentMethod.destroy({
    where: {
      id_method
    }
  })

  if (methodDeleted) {
    return `Metodo ${method.method_name} Eliminado Correctamente`
  } else {
    throw Error('El metodo que estas tratando de eliminar no existe en la base de datos')

  }

}

export const updatePaymentMethod = async (id_method, newMethodName) => {

  const method = await PaymentMethod.findByPk(id_method)

  if (!method) {
    throw Error('No se pudo encontrar el metodo')
  }
  const [affectedRows] = await PaymentMethod.update({ method_name: newMethodName }, {
    where: {
      id_method
    }
  })
  console.log(affectedRows);
  if (affectedRows === 0) {
    throw new Error('No se pudo actualizar el Metodo de pago');
  }
  return `Se actualizo Exitosamente el metodo ${method.method_name} ahora es ${newMethodName}`

}