import './styles.css'

export default function Empresa() {
  return (
    <div className='empresa container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <h2 data-aos='fade-up'>La empresa</h2>
            <div className='row'>
              <div className='col-md-6 content_img'>
                <img
                  data-aos='fade-up'
                  className='img-fluid'
                  src='/img/empresa/empresa.jpg'
                  alt='empresa sifolimp'
                />
              </div>
              <div className='col-md-6 content_data'>
                <h3 data-aos='fade-up'>Trayectoria</h3>
                <p data-aos='fade-up'>
                  Somos una empresa familiar argentina dedicada a la{' '}
                  <span>fabricación y comercialización</span> de productos para
                  el mercado sanitario. Con más de 30 años de trayectoria, y
                  transitando su segunda generación, Sifolimp es hoy un{' '}
                  <span>referente del mercado</span> con una línea de{' '}
                  <span>más de 150 productos</span>. Que se venden a lo largo y
                  a lo ancho de todo el territorio argentino y países de América
                  del Sur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
