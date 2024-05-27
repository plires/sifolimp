import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import RotateLoader from 'react-spinners/RotateLoader'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import saveDataAndSendEmail from './../../../utils/saveDataAndSendEmail'
import ErrorInput from './../../Common/ErrorInput'
import ButtonSend from './../../Common/ButtonSend'

import './styles.css'

const override = {
  display: 'block',
  position: 'absolute',
  left: '50%',
  top: '50vh',
  zIndex: '1',
  background: '#FF0000',
}

const FormContacto = () => {
  const [loading, setLoading] = useState(false)

  const { executeRecaptcha } = useGoogleReCaptcha()

  const validation = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Ingresá un nombre'
    }
    if (!values.email) {
      errors.email = 'Ingresá tu email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Ingresá un correo válido'
    }
    if (!values.phone) {
      errors.phone = 'Ingresá un teléfono'
    }
    if (!values.comments) {
      errors.comments = 'Enviá tu consulta'
    }
    return errors
  }

  const sendForm = async (values, { setSubmitting, resetForm }) => {
    setLoading(true)

    const token = await executeRecaptcha('form_contacto')
    values.recaptchaToken = token
    values.origin = 'Formulario de contacto'
    values.table = 'contacts'
    values.url = window.location.href

    saveDataAndSendEmail(values).then(responseData => {
      if (responseData.success) {
        toast.success(responseData.msg)
        resetForm()
        setSubmitting(false)
        setLoading(false)
      } else {
        toast.error(responseData.msg)
        setSubmitting(false)
        setLoading(false)
      }
    })
  }

  const initFormDefault = {
    name: '',
    email: '',
    phone: '',
    comments: '',
  }

  return (
    <div className='content_all_form'>
      <div className='sweet-loading'>
        <RotateLoader
          loading={loading}
          color='#FF0000'
          speedMultiplier={1}
          size={15}
          cssOverride={override}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>

      <div>
        <ToastContainer />
      </div>
      <h2 data-aos='fade-up'>Contactanos</h2>
      <Formik
        initialValues={initFormDefault}
        validate={validation}
        onSubmit={sendForm}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form data-aos='fade-up' id='form_contacto' onSubmit={handleSubmit}>
            <div className='mb-3'>
              <Field
                className='form-control'
                type='text'
                name='name'
                placeholder='Nombre'
              />
              <ErrorMessage name='name' component={ErrorInput} />
            </div>

            <div className='mb-3'>
              <Field
                className='form-control'
                type='email'
                name='email'
                placeholder='Email'
              />
              <ErrorMessage name='email' component={ErrorInput} />
            </div>

            <div className='mb-3'>
              <Field
                className='form-control'
                type='text'
                name='phone'
                placeholder='Teléfono'
              />
              <ErrorMessage name='phone' component={ErrorInput} />
            </div>

            <div className='mb-3'>
              <Field
                className='form-control'
                as='textarea'
                name='comments'
                rows='4'
                placeholder='Que necesitás?'
              />
              <ErrorMessage name='comments' component={ErrorInput} />
            </div>

            <ButtonSend isSubmitting={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormContacto
