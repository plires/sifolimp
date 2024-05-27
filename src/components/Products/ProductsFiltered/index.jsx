import { Link } from 'react-router-dom'
import { useFilters } from './../../../hooks/useFilters'
import Loading from './../../Common/Loading'
import './styles.css'

export default function ProductsFiltered() {
  const { setFilters, filterProducts, products, loading } = useFilters()
  const productsFiltered = filterProducts(products)

  const handleCategories = (currentCategory, currentSubCategory) => {
    setFilters({
      category: currentCategory,
      sub_category: currentSubCategory,
    })
  }

  return (
    <section className='products_list row'>
      {productsFiltered.length === 0 ? (
        <div className='not_found'>
          <h3>No se encontraron productos</h3>
        </div>
      ) : (
        ''
      )}
      {loading ? (
        <Loading />
      ) : (
        productsFiltered.map(product => (
          <div className='col-6 col-md-4 col-lg-3' key={product.id}>
            <Link
              onClick={() =>
                handleCategories(product.category, product.sub_category)
              }
              to={`/productos/${product.id}`}
              key={product.id}
            >
              <div className='product transition'>
                <div className='content_img transition'>
                  <img
                    className='transition img-fluid'
                    src={`/img/products/${product.img_src.split(',')[0]}`}
                    alt={product.img_alt}
                  />
                </div>
                <div className='content_data'>
                  <div className='layer transition'>
                    <p>{product.name}</p>
                    <button className='btn'>VER MAS</button>
                  </div>
                  <h3>{product.name}</h3>
                  <h4>{product.sub_category}</h4>
                  <h5>{product.units_per_box} unidades por caja</h5>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </section>
  )
}
