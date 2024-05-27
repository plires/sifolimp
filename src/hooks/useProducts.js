import { useState, useEffect } from 'react'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_ROOT}php/getProducts.php`,
        )
        const data = await response.json()
        setProducts(data.products)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, setProducts, loading, setLoading }
}

export default useProducts
