import './styles.css'

export default function Loading() {
  return (
    <div className='content_all_spiner container'>
      <div className='row'>
        <div className='col-md-12 content'>
          <div className='spinner'></div>
          <div className='leyenda'>Cargando...</div>
        </div>
      </div>
    </div>
  )
}
