import Empresa from './../../components/Nosotros/Empresa'
import Historia from './../../components/Nosotros/Historia'
import Compromiso from './../../components/Nosotros/Compromiso'
import StockDistribucion from './../../components/Common/StockDistribucion'

import './styles.css'

export default function Nosotros() {
  return (
    <section className='page nosotros'>
      <Empresa />
      <div className='cuadricula_der'>
        <img src='/img/commons/circulo-arriba-der.png' alt='circulo der' />
      </div>
      <Historia />
      <Compromiso />
      <div className='cuadricula_izq_small'>
        <img src='/img/commons/circulo-arriba-der.png' alt='circulo izq' />
      </div>
      <StockDistribucion />
    </section>
  )
}
