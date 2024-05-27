import { createContext, useState } from 'react'
import useProducts from '../hooks/useProducts'

// 1- Crear el Contexto
export const FiltersContext = createContext()

// 2- Crear el provider (proveer este contexto)
export function FiltersProvider({ children }) {
  const { products, loading } = useProducts()
  const [filters, setFilters] = useState({
    // 3- Definir el estado inicial del contexto
    category: import.meta.env.VITE_CATEGORY_SANITARIOS_DEFAULT,
    sub_category: import.meta.env.VITE_SUB_CATEGORY_SANITARIOS_DEFAULT,
    sort: 'desc',
    productsToSearch: false,
  })
  return (
    <FiltersContext.Provider
      value={{
        // 3- Definir el estado inicial del contexto
        filters,
        setFilters,
        products,
        loading,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
