import './styles.css'

export default function OtherImages({ product }) {
  const images = product.img_src.split(',')

  if (images.length > 1) {
    images.shift()
  } else {
    return null
  }

  return (
    <div className='col-md-3 other_imgs'>
      {images.map((img, index) => (
        <div key={`${img} - ${index}`}>
          <img
            className='transition img-fluid'
            src={`/img/products/${img.trim()}`}
            alt={img}
          />
        </div>
      ))}
    </div>
  )
}
