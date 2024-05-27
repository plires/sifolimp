import { Link } from 'react-router-dom'
import { useFilters } from './../../../hooks/useFilters'

import './styles.css'

export default function Breadcrumbs() {
  const { setFilters, filters } = useFilters()

  const FilterProductsByCategory = currentCategory => {
    setFilters({
      category: currentCategory,
      sub_category: 'all',
      sort: 'desc',
    })
  }

  return (
    <section className='content_breadcrumbs container-fluid'>
      <div className='row'>
        <div className='col-md-12 '>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link className='transition' to='/'>
                  Home
                </Link>
              </li>
              <li
                onClick={() => FilterProductsByCategory(filters.category)}
                className='breadcrumb-item transition'
              >
                {filters.category}
              </li>

              {filters.sub_category !== 'all' ? (
                <li className='breadcrumb-item active' aria-current='page'>
                  {filters.sub_category}
                </li>
              ) : null}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  )
}
