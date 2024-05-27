import './styles.css'

const Beneficios = () => {
  return (
    <section className='beneficios'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <h2>Somos expertos</h2>
            <div className='row'>
              <div data-aos='fade-up' className='col-4 content'>
                <img
                  className='img-fluid'
                  src='/img/home/tilde.png'
                  alt='tilde 1'
                />
                <p>
                  Más de 150
                  <br /> productos
                </p>
              </div>
              <div data-aos='fade-up' className='col-4 content'>
                <img
                  className='img-fluid'
                  src='/img/home/tilde.png'
                  alt='tilde 2'
                />
                <p>
                  Precios
                  <br /> competitivos
                </p>
              </div>
              <div data-aos='fade-up' className='col-4 content'>
                <img
                  className='img-fluid'
                  src='/img/home/tilde.png'
                  alt='tilde 3'
                />
                <p>
                  Trato
                  <br /> personalizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Beneficios
