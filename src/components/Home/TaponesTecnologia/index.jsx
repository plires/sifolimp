import './styles.css'

const TaponesTecnologia = () => {
  return (
    <section className='tapones'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <div className='row'>
              <div className='col-sm-5 content_text'>
                <h2 data-aos='fade-up'>Desagües de alta tecnología</h2>
                <p data-aos='fade-up'>
                  Funcionamiento de el sistema de nuestra Sopapa con rosca, para
                  sifones roscados
                </p>
              </div>

              <div className='col-sm-7'>
                <div className='detalles'>
                  <img
                    data-aos='fade-up'
                    className='img-flui principal'
                    src='/img/home/tapones-render.jpg'
                    alt='tapones renders'
                  />
                  <div data-aos='fade-up' className='content_detalle'>
                    <img
                      className='img-fluid'
                      src='/img/home/tapones-circulo.jpg'
                      alt='detalle circulo 1'
                    />
                    <img
                      className='img-fluid'
                      src='/img/home/tapones-detalle-circulo.jpg'
                      alt='detalle circulo 2'
                    />
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

export default TaponesTecnologia
