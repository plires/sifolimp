import './styles.css'

export default function Historia() {
  return (
    <div className='historia container-fuid'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <h2 data-aos='fade-up'>Nuestra historia</h2>
            <div className='row'>
              <div data-aos='fade-up' className='col-lg-4 card_sifolimp'>
                <div className='content_card'>
                  <div className='circle'></div>
                  <img
                    className='img-fluid icono'
                    src='/img/empresa/icono-sifon-plastico.png'
                    alt='icono sifon plastico'
                  />
                  <p className='year'>1978</p>
                  <p className='name'>Primer sifón plástico</p>
                  <p className='description'>
                    Nuestro origen se remonta a 1978 con la{' '}
                    <span> creación del primer sifón plástico </span>, desde
                    entonces la empresa tuvo un crecimiento constante impulsado
                    por la reconocida calidad y confiabilidad de sus productos.
                  </p>
                </div>
              </div>

              <div data-aos='fade-up' className='col-lg-4 card_sifolimp'>
                <div className='content_card'>
                  <div className='circle'></div>
                  <img
                    className='img-fluid icono'
                    src='/img/empresa/icono-asiento.png'
                    alt='icono sifon plastico'
                  />
                  <p className='year'>1990</p>
                  <p className='name'>Nuevas incorporaciones</p>
                  <p className='description'>
                    A principios de la década de 1990, incorporamos en fábrica
                    la <span>línea de Soplado</span>, que permitió nuestra
                    incursión en la{' '}
                    <span>elaboración de Asientos para inodoro</span>, depósitos
                    mochila y de colgar.
                  </p>
                </div>
              </div>

              <div data-aos='fade-up' className='col-lg-4 card_sifolimp'>
                <div className='content_card'>
                  <div className='circle'></div>
                  <img
                    className='img-fluid icono'
                    src='/img/empresa/icono-aqua.png'
                    alt='icono aqua'
                  />
                  <p className='year'>2000</p>
                  <p className='name'>Línea completa</p>
                  <p className='description'>
                    Comenzamos a fabricar una completa{' '}
                    <span>
                      línea de Grifería y Accesorios para baños en ABS
                    </span>
                    , un mercado no muy explorado en Argentina en su momento.
                    Esta línea se comercializa bajo la marca Acqua y ofrece una
                    alternativa muy competitiva, en cuanto a{' '}
                    <span>terminación y durabilidad</span>, a las tradicionales
                    metálicas y <span>mucho más económica</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
