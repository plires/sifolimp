import './styles.css'

export default function ImagePrincipal({ product }) {
  const images = product.img_src.split(',')

  const imgPrincipal = images.slice(0, 1)

  return (
    <div
      className={`img_featured ${images.length > 1 ? 'col-md-9' : 'col-md-12'}`}
    >
      <img
        className='transition img-fluid'
        src={`/img/products/${imgPrincipal}`}
        alt={product.name}
      />
    </div>
  )
}
