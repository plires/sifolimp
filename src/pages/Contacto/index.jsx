import FormContacto from './../../components/Contacto/FormContacto'
import DatosContacto from './../../components/Contacto/DatosContacto'

import './styles.css'

export default function Contacto() {
  return (
    <section className='page contactos'>
      <div className='cuadricula_der'>
        <img src='/img/commons/circulo-der.png' alt='circulo der' />
      </div>
      <div className='cuadricula_izq_small'>
        <img src='/img/commons/circulo-arriba-der.png' alt='circulo izq' />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <div className='row'>
              <div className='col-md-6 content_data'>
                <FormContacto />
              </div>
              <div className='col-md-6 content_data'>
                <DatosContacto />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
