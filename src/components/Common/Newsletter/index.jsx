import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import RotateLoader from 'react-spinners/RotateLoader'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import saveDataAndSendEmail from './../../../utils/saveDataAndSendEmail'
import ErrorInput from './../ErrorInput'

import './styles.css'

const override = {
  display: 'block',
  position: 'absolute',
  left: '50%',
  top: '50vh',
  zIndex: '1',
  background: '#FF0000',
}

const Newsletter = () => {
  const [loading, setLoading] = useState(false)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const validation = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Ingresá tu email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Ingresá un correo válido'
    }
    return errors
  }

  const sendForm = async (values, { setSubmitting, resetForm }) => {
    setLoading(true)

    const token = await executeRecaptcha('form_contacto')
    values.recaptchaToken = token
    values.origin = 'Formulario de newsletter'
    values.table = 'newsletters'
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
    email: '',
  }

  return (
    <section className='newsletter'>
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
      <div className='container-fluid p-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <div className='row'>
                <div className='col-md-6'>
                  <h2 data-aos='fade-up'>Newsletter</h2>
                  <p data-aos='fade-up'>
                    Suscribite y recibí las mejores ofertas
                  </p>
                </div>
                <div data-aos='fade-up' className='col-md-6 content_form'>
                  <Formik
                    initialValues={initFormDefault}
                    validate={validation}
                    onSubmit={sendForm}
                  >
                    {({ handleSubmit, isSubmitting }) => (
                      <Form id='form_contacto' onSubmit={handleSubmit}>
                        <Field
                          className='form-control'
                          type='email'
                          name='email'
                          placeholder='Email'
                        />
                        <ErrorMessage name='email' component={ErrorInput} />
                        <button type='Suscribirme' className='btn'>
                          Enviar
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
