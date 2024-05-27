import { RiMailSendLine } from 'react-icons/ri'
import './styles.css'

export default function ButtonSend({ isSubmitting }) {
  return (
    <button
      id='send'
      className='btn btn-primary transition'
      type='submit'
      disabled={isSubmitting}
    >
      Enviar
      <RiMailSendLine className='transition' />
    </button>
  )
}
