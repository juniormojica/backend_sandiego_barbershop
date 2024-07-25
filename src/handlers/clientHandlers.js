
export const getClientsHandler = async (req, res) => {
  try {
    res.json('Está ruta trae todos los usuarios cuando existan')
  } catch (error) {

  }
}


export const postClientHandler = async (req, res) => {
  const clientInfo = req.body.nombre
  console.log(`Está es la informacion del cliente ${clientInfo}`);
}