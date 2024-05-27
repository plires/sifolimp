import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'

import './styles.css'

export default function Nav() {
  const [srcLogo, setSrcLogo] = useState('/img/header/logo-sifolimp-white.png') // Ruta de la imagen inicial

  const handleScrollAndResize = () => {
    const scrollY = window.scrollY // Obtiene la posición vertical del scroll
    const windowWidth = window.innerWidth // Obtiene el ancho de la pantalla
    const header = document.getElementById('navigator')

    if (scrollY > 85) {
      header.classList.add('prevFixed')
    } else {
      header.classList.remove('prevFixed')
    }

    if (scrollY > 90) {
      header.classList.add('fixed')
    } else {
      header.classList.remove('fixed')
    }

    // Define tus condiciones para cambiar la imagen según el scroll y el ancho de la pantalla
    if (windowWidth < 992) {
      setSrcLogo('/img/header/logo-sifolimp-white.png') // Ruta de la imagen a mostrar en esas condiciones
    }

    if (scrollY > 90 && windowWidth > 992) {
      setSrcLogo('/img/header/logo-sifolimp-white.png') // Ruta de la imagen a mostrar en esas condiciones
    }

    if (scrollY < 90 && windowWidth > 992) {
      setSrcLogo('/img/header/logo-sifolimp.png') // Ruta de la imagen a mostrar en esas condiciones
    }
  }

  useEffect(() => {
    handleScrollAndResize() // Llamamos a la función para establecer la imagen inicial

    const handleScroll = () => {
      handleScrollAndResize() // Llamamos a la función al producirse un cambio en el scroll
    }

    const handleResize = () => {
      handleScrollAndResize() // Llamamos a la función al producirse un cambio en el tamaño de la ventana
    }

    window.addEventListener('scroll', handleScroll) // Agrega el evento de scroll
    window.addEventListener('resize', handleResize) // Agrega el evento de resize

    return () => {
      window.removeEventListener('scroll', handleScroll) // Limpia el evento de scroll cuando el componente se desmonta
      window.removeEventListener('resize', handleResize) // Limpia el evento de resize cuando el componente se desmonta
    }
  }, [])

  const [navMobile, setNavMobile] = useState(false)

  const activateMenu = () => {
    setNavMobile(!navMobile)
  }

  const closeMenuMobile = () => {
    setNavMobile(false)
  }

  return (
    <section
      id='navigator'
      className='navigator transition container-fluid p-0'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 content_brand'>
            <Link className='transition' to='/'>
              <img
                className='img-fluid transition'
                src={srcLogo}
                alt='logo sifolimp'
              />
            </Link>
            {navMobile ? (
              <AiOutlineClose onClick={activateMenu} className='btn_menu' />
            ) : (
              <RxHamburgerMenu onClick={activateMenu} className='btn_menu' />
            )}
          </div>

          <div className='col-lg-9 content_mobile'>
            <nav className={`transition ${navMobile ? 'open' : ''}`}>
              <ul>
                <li>
                  <NavLink
                    activeclassname='active'
                    onClick={closeMenuMobile}
                    className='transition'
                    to='/'
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeclassname='active'
                    onClick={closeMenuMobile}
                    className='transition'
                    to='/productos'
                  >
                    Productos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeclassname='active'
                    onClick={closeMenuMobile}
                    className='transition'
                    to='/descargas'
                  >
                    Descargas
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeclassname='active'
                    onClick={closeMenuMobile}
                    className='transition'
                    to='/nosotros'
                  >
                    Nosotros
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeclassname='active'
                    onClick={closeMenuMobile}
                    className='transition'
                    to='/contacto'
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
