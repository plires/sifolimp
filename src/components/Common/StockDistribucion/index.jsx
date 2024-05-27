import { Link } from 'react-router-dom'
import './styles.css'

const StockDistribucion = () => {
  return (
    <section className='stock_distribucion'>
      <div className='container-fluid p-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <div className='row'>
                <div className='col-lg-6'>
                  <h2 data-aos='fade-up'>Stock y distribución</h2>
                  <p data-aos='fade-up' className='frase'>
                    Contamos con stock permanente y distribuimos a todo el país.
                  </p>
                  <div data-aos='fade-up' className='row'>
                    <div className='col-4 content_icon'>
                      <img
                        className='img-fluid'
                        src='/img/commons/icono-liviano.png'
                        alt='icono liviano'
                      />
                      <h4>liviano</h4>
                    </div>
                    <div className='col-4 content_icon'>
                      <img
                        className='img-fluid'
                        src='/img/commons/icono-resistente.png'
                        alt='icono resistente'
                      />
                      <h4>resistente</h4>
                    </div>
                    <div className='col-4 content_icon'>
                      <img
                        className='img-fluid'
                        src='/img/commons/icono-economico.png'
                        alt='icono economico'
                      />
                      <h4>economico</h4>
                    </div>
                  </div>

                  <div data-aos='fade-up' className='row content_text_final'>
                    <div className='col-md-7'>
                      <p>
                        Nuestros/as asesores/as podrán ayudarte a encontrar el
                        distribuidor mas cercano a tu domicilio.
                      </p>
                    </div>
                    <div className='col-md-5'>
                      <Link className='btn' to='/contacto'>
                        Contactanos
                      </Link>
                    </div>
                  </div>
                </div>

                <div data-aos='fade-up' className='col-lg-6'>
                  <div className='row content_imgs'>
                    <div className='col-6'>
                      <img
                        className='img-fluid'
                        src='/img/commons/mapa.jpg'
                        alt='mapa'
                      />
                    </div>
                    <div className='col-6'>
                      <img
                        className='img-fluid'
                        src='/img/commons/entregas.jpg'
                        alt='entregas'
                      />
                    </div>
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

export default StockDistribucion
