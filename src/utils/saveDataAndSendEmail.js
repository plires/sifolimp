import axios from 'axios'

// Función para grabar la consulta del formulario en base de datos y enviar los correos al cliente y usuario
export default async function saveDataAndSendEmail(values) {
  let response = {
    success: false,
    msg: '',
  }
  try {
    const responseSaveBDD = await axios.post(
      import.meta.env.VITE_ROOT + 'php/save.php',
      values,
    )
    const responseDataSaveBDD = responseSaveBDD.data

    const responseEmail = await axios.post(
      import.meta.env.VITE_ROOT + 'php/send-mail.php',
      values,
    )
    const responseDataEmail = responseEmail.data

    // Realizar acciones después de las respuestas exitosa
    if (responseDataSaveBDD.success && responseDataEmail.success) {
      response = {
        success: true,
        msg: responseDataSaveBDD.msg,
      }
      return response
    } else {
      response = {
        success: false,
        msg: 'Ocurrió un error inesperado al enviar la consulta, por favor intente mas tarde.',
      }
      return response
    }
  } catch (error) {
    // Realizar acciones en caso de error
    response = {
      success: false,
      msg: 'Aparentemente en este momento no hay conexión con el servidor, por favor intente mas tarde.',
    }
    return response
  }
}
