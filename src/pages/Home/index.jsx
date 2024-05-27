import HomeVideo from './../../components/Home/HeaderVideo'
import FeaturedProducts from './../../components/Home/FeaturedProducts'
import Categorias from './../../components/Home/Categorias'
import Newsletter from './../../components/Common/Newsletter'
import Beneficios from './../../components/Home/Beneficios'
import Slide from './../../components/Home/Slide'
import TaponesTecnologia from './../../components/Home/TaponesTecnologia'
import StockDistribucion from './../../components/Common/StockDistribucion'

import './styles.css'

export default function Home({ products, productsLoading }) {
  return (
    <section className='page home'>
      <HomeVideo />
      <FeaturedProducts products={products} productsLoading={productsLoading} />
      <Categorias />
      <Newsletter />
      <div className='cuadricula_der'>
        <img src='/img/commons/circulo-der.png' alt='circulo der' />
      </div>
      <Beneficios />
      <Slide />
      <TaponesTecnologia />
      <div className='cuadricula_izq_small'>
        <img src='/img/commons/circulo-izq.png' alt='circulo izq' />
      </div>
      <StockDistribucion />
    </section>
  )
}
