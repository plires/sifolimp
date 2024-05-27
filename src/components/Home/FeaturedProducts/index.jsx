import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Loading from './../../Common/Loading'
import { useFilters } from './../../../hooks/useFilters'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles.css'

const FeaturedProducts = () => {
  const { products, loading } = useFilters()
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  }

  if (loading) {
    return <Loading />
  }

  return (
    <section className='featured_products'>
      <div className='container'>
        <div className='row'>
          <div data-aos='fade-up' className='col-md-10 offset-md-1'>
            <h2>Productos destacados</h2>
            <Slider {...settings}>
              {products.map(product => {
                if (product.featured) {
                  return (
                    <div key={product.id} className='content_product'>
                      <Link to={`productos/${product.id}`}>
                        <img
                          className='transition img-fluid'
                          src={`/img/products/${product.img_src.split(',')[0]}`}
                          alt={product.name}
                        />
                      </Link>
                    </div>
                  )
                } else {
                  return null // Otra opción es usar un <div> vacío en lugar de null si quieres renderizar algo
                }
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
