import { Link } from 'react-router-dom'
import { useFilters } from './../../../hooks/useFilters'

import './styles.css'

const Categorias = () => {
  const { setFilters } = useFilters()
  return (
    <section className='categories'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <h2 data-aos='fade-up'>Nuestras líneas</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <div className='row'>
              <div data-aos='fade-up' className='col-sm-6'>
                <div className='content_categoria'>
                  <img
                    className='img-fluid img_rounded'
                    src='/img/home/categoria-sanitarios.jpg'
                    alt='categorias productos sanitarios'
                  />

                  <div className='data'>
                    <img
                      className='img-fluid'
                      src='/img/home/logo-sifolimp-categorias.png'
                      alt='categorias productos sanitarios'
                    />
                    <p>Artículos sanitarios</p>
                    <Link
                      className='btn'
                      to='/productos'
                      onClick={() =>
                        setFilters({
                          category: import.meta.env
                            .VITE_CATEGORY_SANITARIOS_DEFAULT,
                          sub_category: 'all',
                          sort: 'desc',
                        })
                      }
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
              <div data-aos='fade-up' className='col-sm-6'>
                <div className='content_categoria'>
                  <img
                    className='img-fluid img_rounded'
                    src='/img/home/categoria-griferias.jpg'
                    alt='categorias productos sanitarios'
                  />

                  <div className='data'>
                    <img
                      className='img-fluid'
                      src='/img/home/logo-aqua-categorias.png'
                      alt='categorias productos sanitarios'
                    />
                    <p>Griferías y accesorios</p>
                    <Link
                      className='btn'
                      to='/productos'
                      onClick={() =>
                        setFilters({
                          category: import.meta.env
                            .VITE_CATEGORY_GRIFERIAS_DEFAULT,
                          sub_category: 'all',
                          sort: 'desc',
                        })
                      }
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categorias
