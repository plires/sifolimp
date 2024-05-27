import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/Common/ScrollToTop/ScrollToTop'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { FiltersProvider } from './context/filter'

import Nav from './components/Nav'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Descargas from './pages/Descargas'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

import './css/variables.css'
import './css/common.css'
import './css/fonts.css'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './js/app'

function App() {
  return (
    <main className='App'>
      <GoogleReCaptchaProvider
        reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
      >
        <FiltersProvider>
          <Router>
            <ScrollToTop />
            <Nav />
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/productos' element={<Products />} />
              <Route path='/productos/:id' element={<ProductDetail />} />
              <Route path='/descargas' element={<Descargas />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
          </Router>
        </FiltersProvider>
      </GoogleReCaptchaProvider>
    </main>
  )
}

export default App
