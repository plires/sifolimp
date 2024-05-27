import { TbError404 } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Code404() {
  return (
    <div className='code_404'>
      <div className='content'>
        <h1>Recurso no encontrado</h1>
        <TbError404 />
        <Link className='btn transition' to='/'>
          Seguir Navegando
        </Link>
      </div>
    </div>
  )
}
