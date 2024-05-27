import Breadcrumbs from './../../components/Products/Breadcrumbs'
import Search from './../../components/Products/Search'
import Filter from './../../components/Products/Filter'
import ProductsFiltered from './../../components/Products/ProductsFiltered'
import Sidebar from './../../components/Common/Sidebar'

import './styles.css'

export default function Products() {
  return (
    <section className='page products'>
      <Breadcrumbs />

      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 offset-lg-3 search'>
            <Search />
          </div>
          <div className='col-lg-4 filter'>
            <Filter />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3'>
            <Sidebar />
          </div>

          <div className='col-lg-9'>
            <ProductsFiltered />
          </div>
        </div>
      </div>
    </section>
  )
}
