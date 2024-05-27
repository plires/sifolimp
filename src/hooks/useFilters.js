import { useContext } from 'react'
import { FiltersContext } from './../context/filter'

const removeAccents = str => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export function useFilters() {
  const { filters, setFilters, products, loading } = useContext(FiltersContext)

  const filterProducts = products => {
    let productsFiltered
    if (filters.productsToSearch) {
      productsFiltered = products.filter(product => {
        return removeAccents(product.name)
          .toLowerCase()
          .includes(removeAccents(filters.productsToSearch.toLowerCase()))
      })
    } else {
      productsFiltered = products.filter(product => {
        return (
          (product.category === filters.category ||
            filters.category === 'all') &&
          (product.sub_category === filters.sub_category ||
            filters.sub_category === 'all')
        )
      })
    }

    const sortedData = [...productsFiltered].sort((a, b) => {
      if (filters.sort === 'desc') {
        return a.name.localeCompare(b.name)
      } else {
        return b.name.localeCompare(a.name)
      }
    })

    return sortedData
  }

  return {
    filters,
    setFilters,
    filterProducts,
    products,
    loading,
  }
}
