import { Link } from 'react-router-dom'
import './styles.css'

const HomeVideo = () => {
  return (
    <header>
      <div className='video-player'>
        <div className='frase'>
          <h1 data-aos='fade-up'>
            <span>Todo</span> en artículos <br />
            sanitarios
          </h1>
          <p>
            Productos de calidad certificada <br /> a precios competitivos
          </p>
          <Link to='/productos' className='btn'>
            Ver catálogo
          </Link>
        </div>
        <div className='overlay'></div>
        <video
          poster='/img/home/header-desktop.jpg'
          className='video'
          playsInline='playsInline'
          autoPlay='autoPlay'
          muted='muted'
          loop='loop'
        >
          <source src='/video/agua.mp4' type='video/mp4' />
          Tu navegador no admite la reproducción de videos MP4.
        </video>
      </div>
    </header>
  )
}

export default HomeVideo
