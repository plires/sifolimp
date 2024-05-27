import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import RotateLoader from 'react-spinners/RotateLoader'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ErrorInput from './../ErrorInput'
import ButtonSend from '../ButtonSend'
import saveDataAndSendEmail from './../../../utils/saveDataAndSendEmail'
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './styles.css'

const override = {
  display: 'block',
  position: 'absolute',
  left: '50%',
  top: '50vh',
  zIndex: '1',
  background: '#FF0000',
}

const FormProductContact = ({ product, modalRef }) => {
  const [loading, setLoading] = useState(false)

  // const showModal = () => {
  //   const modalEle = modalRef.current
  //   const bsModal = new bootstrap.Modal(modalEle, {
  //     backdrop: 'static',
  //     keyboard: false,
  //   })
  //   bsModal.hide()
  // }

  // const hideModal = () => {
  //   const modalEle = modalRef.current
  //   const bsModal = bootstrap.Modal.getInstance(modalEle)
  //   bsModal.hide()
  // }

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
    values.origin = 'Formulario de producto'
    values.category = product.category
    values.sub_category = product.sub_category
    values.product = product.name
    values.table = 'budgets_product'
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

    // setTimeout(() => {
    //   toast.dismiss()
    //   hideModal()
    // }, 2000)
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
      <Formik
        initialValues={initFormDefault}
        validate={validation}
        onSubmit={sendForm}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form id='form_contacto' onSubmit={handleSubmit}>
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

export default FormProductContact
