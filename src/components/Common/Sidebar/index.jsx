import { useEffect, useState } from 'react'
import Loading from './../../Common/Loading'
import { useFilters } from './../../../hooks/useFilters'
import './styles.css'

export default function Sidebar() {
  const [categoryOpenSidebar, setCategoryOpenSidebar] = useState(false) // estado del boton (cerrado)
  const { filters, setFilters, filterProducts, products, loading } =
    useFilters()

  const handleScrollAndResize = () => {
    const scrollY = window.scrollY // Obtiene la posición vertical del scroll
    const windowWidth = window.innerWidth // Obtiene el ancho de la pantalla
    const sidebar = document.getElementsByClassName('sidebar')[0]

    if (scrollY > 85) {
      sidebar.classList.add('fixed')
    } else {
      sidebar.classList.remove('fixed')
    }

    // Define tus condiciones para cambiar la clase del sidebar el ancho de la pantalla
    if (windowWidth > 992) {
      setCategoryOpenSidebar(true)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      handleScrollAndResize() // Llamamos a la función al producirse un cambio en el scroll
    }

    const handleResize = () => {
      handleScrollAndResize() // Llamamos a la función al producirse un cambio en el tamaño de la ventana
    }

    handleScrollAndResize()

    window.addEventListener('scroll', handleScroll) // Agrega el evento de scroll
    window.addEventListener('resize', handleResize) // Agrega el evento de resize

    return () => {
      window.removeEventListener('scroll', handleScroll) // Limpia el evento de scroll cuando el componente se desmonta
      window.removeEventListener('resize', handleResize) // Limpia el evento de resize cuando el componente se desmonta
    }
  }, [])

  // Objeto para almacenar las categorías y subcategorías únicas
  const categories = {}

  // Recorrer el array de productos y almacenar las categorías y subcategorías únicas
  products.forEach(product => {
    const category = product.category
    const subcategory = product.sub_category

    if (!categories[category]) {
      categories[category] = []
    }

    if (!categories[category].includes(subcategory)) {
      categories[category].push(subcategory)
    }
  })

  function cleanText(text) {
    // Eliminar los espacios en blanco
    const textWithoutSpaces = text.replace(/\s/g, '')

    // Convertir a minúsculas
    const lowercaseText = textWithoutSpaces.toLowerCase()

    // Eliminar los tildes
    const textWithoutTildes = lowercaseText
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    return textWithoutTildes
  }

  function handleBtnSidebar(currentCategory, currentSubcategory) {
    setFilters({
      category: currentCategory,
      sub_category: currentSubcategory,
      sort: 'desc',
    })
    filterProducts(products)
  }

  return (
    <section className='sidebar'>
      {loading ? (
        <Loading />
      ) : (
        <div className='accordion' id='accordionCategories'>
          {Object.keys(categories).map((category, index) => (
            <div className='accordion-item' key={cleanText(category)}>
              <h2 className='accordion-header' id={cleanText(category)}>
                <button
                  className={`accordion-button ${
                    category === filters.category ? 'active' : 'inactive'
                  }`}
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target={`#${cleanText(category)}-category`}
                  aria-expanded='true'
                  aria-controls={cleanText(category) + '-category'}
                >
                  {category}
                </button>
              </h2>
              <div
                id={cleanText(category) + '-category'}
                className={`accordion-collapse collapse ${
                  categoryOpenSidebar && category === filters.category
                    ? 'show'
                    : ''
                }`}
                aria-labelledby={cleanText(category)}
                data-bs-parent='#accordionCategories'
              >
                <div className='accordion-body'>
                  <ul>
                    {categories[category].map(subcategory => (
                      <li
                        className={`transition ${
                          subcategory === filters.sub_category
                            ? 'active'
                            : 'inactive'
                        }`}
                        onClick={() => handleBtnSidebar(category, subcategory)}
                        key={cleanText(subcategory)}
                      >
                        {subcategory}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
