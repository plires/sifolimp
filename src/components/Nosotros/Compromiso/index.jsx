import './styles.css'

export default function Compromiso() {
  return (
    <div className='compromiso container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <h2>Calidad y compromiso</h2>
            <div className='row'>
              <div data-aos='fade-up' className='col-md-6 content'>
                <div className='content_icon'>
                  <img
                    className='img-fluid'
                    src='/img/empresa/icono-buen-trato.png'
                    alt='icono buen trato'
                  />
                </div>
                <div className='content_data'>
                  <h3>Buen trato</h3>
                  <p>
                    A lo largo de nuestra historia nos caracterizamos por la
                    calidad de nuestros productos y el{' '}
                    <span>buen trato comercial, personalizado y humano</span>.
                    Estas características representan hoy nuestras mayores
                    ventajas competitivas.
                  </p>
                </div>
              </div>

              <div data-aos='fade-up' className='col-md-6 content'>
                <div className='content_icon'>
                  <img
                    className='img-fluid'
                    src='/img/empresa/icono-argentina.png'
                    alt='icono argentina'
                  />
                </div>
                <div className='content_data'>
                  <h3>Industria nacional</h3>
                  <p>
                    Nuestra planta de elaboración y oficinas comerciales se
                    encuentran en la provincia de Buenos Aires. Trabajamos con
                    la <span>energía y el compromiso</span> de siempre, para
                    seguir innovando y apostando al{' '}
                    <span>desarrollo del mercado y la industria nacional</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className='row last_row'>
              <div data-aos='fade-up' className='col-md-6 content'>
                <div className='content_icon'>
                  <img
                    className='img-fluid'
                    src='/img/empresa/icono-iso.png'
                    alt='icono ISO'
                  />
                </div>
                <div className='content_data'>
                  <h3>Calidad certificada</h3>
                  <p>
                    Actualmente la empresa se encuentra certificada en el{' '}
                    <span>Sistema de Gestión de Calidad ISO 9001:2015</span>. En
                    este proceso hemos documentado nuestra{' '}
                    <span>Política de Calidad</span> que se encuentra a
                    disposición para todas las partes interesadas.
                  </p>
                </div>
              </div>

              <div data-aos='fade-up' className='col-md-6 content'>
                <div className='content_icon'>
                  <img
                    className='img-fluid'
                    src='/img/empresa/icono-garantia.png'
                    alt='icono garantia'
                  />
                </div>
                <div className='content_data'>
                  <h3>Garantía</h3>
                  <p>
                    Todos nuestros productos se fabrican con las{' '}
                    <span>mejores materias primas vírgenes</span>. Nuestro
                    compromiso con la calidad es total, de ahí que Sifolimp
                    cuenta con una de las{' '}
                    <span>más bajas tasas de falla del mercado</span> y una{' '}
                    <span>garantía de 6 años</span>.
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
