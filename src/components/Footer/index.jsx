import { Link } from 'react-router-dom'

import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { RiInstagramFill } from 'react-icons/ri'
import { IoMdCloudDownload } from 'react-icons/io'
import { MdFacebook } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { GoMail } from 'react-icons/go'

import './styles.css'

export default function Footer() {
  return (
    <footer className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 content_data'>
            <Link target='_blank' rel='noopener' className='transition' to='/'>
              <img
                className='img-fluid data_fiscal'
                src='/img/footer/data-fiscal.png'
                alt='data fiscal'
              />
            </Link>
            <div className='atencion'>
              <h4>Atención al cliente</h4>
              <div className='content'>
                <FiPhone />
                <Link
                  target='_blank'
                  rel='noopener'
                  className='transition'
                  to={`tel:${import.meta.env.VITE_0800_CLIENT}`}
                >
                  {import.meta.env.VITE_0800_SHOW_CLIENT}
                </Link>
              </div>
            </div>
            <div className='politicas'>
              <h4>Politicas de Calidad</h4>
              <div className='content'>
                <IoMdCloudDownload />
                <Link
                  target='_blank'
                  rel='noopener'
                  className='transition'
                  to='./descargas/politica-calidad.pdf'
                >
                  Descargar.
                </Link>
              </div>
            </div>
            <div className='contacto'>
              <h4>Contacto</h4>
              <div className='content'>
                <GoMail />
                <Link
                  target='_blank'
                  rel='noopener'
                  className='transition'
                  to='mailto:web@sifolimp.com.ar'
                >
                  web@sifolimp.com.ar
                </Link>
              </div>
              <div className='content'>
                <FiPhone />
                <Link
                  target='_blank'
                  rel='noopener'
                  className='transition'
                  to={`tel:${import.meta.env.VITE_PHONE_CLIENT}`}
                >
                  {import.meta.env.VITE_PHONE_SHOW_CLIENT}
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <img
              className='img-fluid img_argentina'
              src='/img/footer/logo-argentina.png'
              alt='logo argentina'
            />
            <div className='content_logo_rrss'>
              <img
                className='img-fluid logo_footer'
                src='/img/footer/logo-sifolimp-footer.png'
                alt='logo sifolimp footer'
              />
              <div className='rrss'>
                <a
                  rel='noopener noreferrer'
                  className='transition'
                  target='_blank'
                  href={import.meta.env.VITE_FB_CLIENT}
                >
                  <MdFacebook className='transition' />
                </a>
                <a
                  rel='noopener noreferrer'
                  className='transition'
                  href={import.meta.env.VITE_IG_CLIENT}
                  target='_blank'
                >
                  <RiInstagramFill className='transition' />
                </a>
                <a
                  rel='noopener noreferrer'
                  className='transition'
                  target='_blank'
                  href={import.meta.env.VITE_IN_CLIENT}
                >
                  <BiLogoLinkedinSquare className='transition' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container libre'>
        <div className='row'>
          <div className='col-md-12'>
            <Link
              className='transition'
              target='_blank'
              to='https://librecomunicacion.net/'
            >
              by Libre
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
