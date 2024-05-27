import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './styles.css'

const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className='slide'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <h2>Productos</h2>
            <Slider {...settings}>
              <div className='diapositiva'>
                <div className='content_diapositiva'>
                  <div data-aos='fade-up' className='content_img_slide'>
                    <img
                      className='img-fluid'
                      src='/img/home/slide-mochila-asiento-principal.jpg'
                      alt='slide principal sifon'
                    />
                  </div>
                  <div data-aos='fade-up' className='content_data'>
                    <div className='item'>
                      <img
                        className='img-fluid'
                        src='/img/home/slide-mochila-asiento-principal-circulo-a.jpg'
                        alt='slide circulo deposito'
                      />
                      <div className='texto'>
                        <h3>Mochilas y depósitos</h3>
                        <p>
                          Todo para el baño, desde griferías y conexiones hasta
                          mochilas y depósitos
                        </p>
                      </div>
                    </div>
                    <div className='item'>
                      <img
                        className='img-fluid'
                        src='/img/home/slide-mochila-asiento-principal-circulo-b.jpg'
                        alt='slide circulo asiento'
                      />
                      <div className='texto'>
                        <h3>Asientos para baño</h3>
                        <p>
                          Todo para el baño, desde griferías y conexiones hasta
                          mochilas y depósitos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos='fade-up' className='content_btn'>
                  <Link className='btn' to='/productos'>
                    Ver catálogo completo
                  </Link>
                </div>
              </div>

              <div className='diapositiva'>
                <div className='content_diapositiva'>
                  <div className='content_img_slide'>
                    <img
                      className='img-fluid'
                      src='/img/home/slide-flexible-principal.jpg'
                      alt='slide principal flexible'
                    />
                  </div>
                  <div className='content_data'>
                    <div className='item'>
                      <img
                        className='img-fluid'
                        src='/img/home/slide-flexibles-circulo-a.jpg'
                        alt='slide circulo flexible'
                      />
                      <div className='texto'>
                        <h3>Conexiones flexibles</h3>
                        <p>
                          Todo para el baño, desde griferías y conexiones hasta
                          mochilas y depósitos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='content_btn'>
                  <Link className='btn' to='/productos'>
                    Ver catálogo completo
                  </Link>
                </div>
              </div>

              <div className='diapositiva'>
                <div className='content_diapositiva'>
                  <div className='content_img_slide'>
                    <img
                      className='img-fluid'
                      src='/img/home/slide-sifon-principal.jpg'
                      alt='slide principal sifon'
                    />
                  </div>
                  <div className='content_data'>
                    <div className='item'>
                      <img
                        className='img-fluid'
                        src='/img/home/slide-sifon-circulo-a.jpg'
                        alt='slide circulo sifon'
                      />
                      <div className='texto'>
                        <h3>Sifón doble </h3>
                        <p>
                          Fabricamos gran variedad de sifones, simples, dobles,
                          triples y especiales
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='content_btn'>
                  <Link className='btn' to='/productos'>
                    Ver catálogo completo
                  </Link>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slide
