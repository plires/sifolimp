import { Link } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { ImMobile } from 'react-icons/im'
import { BsTelephone } from 'react-icons/bs'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoFacebookCircle } from 'react-icons/bi'

import './styles.css'

export default function DatosContacto() {
  return (
    <section data-aos='fade-up' className='datos_contacto'>
      <h3 data-aos='fade-up'>Otros Medios</h3>

      <div data-aos='fade-up' className='medio'>
        <HiOutlineMail className='icon' />
        <div className='datos'>
          <h4>Email</h4>
          <Link
            className='transition'
            to={`mailto:${import.meta.env.VITE_EMAIL_CLIENT}`}
          >
            {import.meta.env.VITE_EMAIL_CLIENT}
          </Link>
        </div>
      </div>

      <div data-aos='fade-up' className='medio'>
        <ImMobile className='icon' />
        <div className='datos'>
          <h4>Teléfono</h4>
          <Link
            className='transition'
            to={`tel:${import.meta.env.VITE_0800_CLIENT}`}
          >
            {import.meta.env.VITE_PHONE_SHOW_CLIENT}
          </Link>
        </div>
      </div>

      <div data-aos='fade-up' className='medio'>
        <BsTelephone className='icon' />
        <div className='datos'>
          <h4>Atención al cliente</h4>
          <Link
            className='transition'
            to={`tel:${import.meta.env.VITE_0800_CLIENT}`}
          >
            {import.meta.env.VITE_0800_SHOW_CLIENT}
          </Link>
        </div>
      </div>

      <div data-aos='fade-up' className='rrss'>
        <a
          href={import.meta.env.VITE_IG_CLIENT}
          className='transition'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillInstagram />
        </a>
        <a
          href={import.meta.env.VITE_IN_CLIENT}
          className='transition'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillLinkedin />
        </a>
        <a
          href={import.meta.env.VITE_FB_CLIENT}
          className='transition'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BiLogoFacebookCircle />
        </a>
      </div>
    </section>
  )
}
