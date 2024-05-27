import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import NotFound from './../NotFound/index'
import Loading from './../../components/Common/Loading'
import Share from './../../components/Common/Share'
import OtherImages from './../../components/Common/OtherImages'
import ModalForm from './../../components/Common/ModalForm'
import ImagePrincipal from './../../components/Common/ImagePrincipal'
import { useFilters } from './../../hooks/useFilters'

import { IoIosArrowBack } from 'react-icons/io'
import { BsCurrencyDollar } from 'react-icons/bs'

import './styles.css'

export default function ProductDetail() {
  const { products, loading } = useFilters()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const productFound = products.find(
      product => parseInt(product.id) === parseInt(id),
    )
    setSelectedProduct(productFound)
  }, [id, products])

  if (loading) {
    return <Loading />
  } else if (selectedProduct) {
    return (
      <section className='page product_detail'>
        <ModalForm product={selectedProduct} />
        <div className='cuadricula_der'>
          <img src='/img/commons/circulo-der.png' alt='circulo der' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <div className='row'>
                <div data-aos='fade-up' className='col-lg-6 content_imgs'>
                  <div className='row'>
                    <OtherImages product={selectedProduct} />
                    <ImagePrincipal product={selectedProduct} />
                  </div>
                </div>
                <div
                  data-aos='fade-up'
                  className='col-lg-5 offset-lg-1 content_data'
                >
                  <div className='content_btn'></div>
                  <h2>{selectedProduct.name}</h2>
                  <p className='categories'>
                    {selectedProduct.category} / {selectedProduct.sub_category}
                  </p>
                  <p className='presentation'>
                    Presentación <br />
                    {selectedProduct.units_per_box}{' '}
                    <span>unidades por caja</span>
                  </p>
                  <div className='content_btns'>
                    <button
                      className='btn transition'
                      type='button'
                      data-bs-toggle='modal'
                      data-bs-target='#formModal'
                    >
                      Presupuestar
                      <BsCurrencyDollar className='transition' />
                    </button>
                    <Link to='/productos' className='btn btn_volver transition'>
                      <IoIosArrowBack className='transition' />
                      Volver a todos los productos
                    </Link>
                  </div>
                  <Share />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='cuadricula_izq_small'>
          <img src='/img/commons/circulo-abajo-izq.png' alt='circulo izq' />
        </div>
      </section>
    )
  } else {
    return <NotFound />
  }
}
