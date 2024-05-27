import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const hasHash = window.location.hash !== ''

    if (!hasHash) {
      window.scrollTo(0, 0)
    } else {
      const id = window.location.hash.slice(1) // obtengo el nombre del ID a partir de lo que viene a la derecha del # en el path
      const element = document.getElementById(id)

      const { top } = element.getBoundingClientRect()
      const offset = window.pageYOffset || document.documentElement.scrollTop

      window.scrollTo({
        top: top + offset - 180,
        behavior: 'smooth', // Desplazamiento suave
      })
    }
  }, [pathname])

  return null
}

export default ScrollToTop
