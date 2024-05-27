import { useRef } from 'react'
import FormProductContact from './../../Common/FormProductContact/'

import './styles.css'

export default function ModalForm({ product }) {
  const modalRef = useRef()
  const images = product.img_src.split(',')

  const imgPrincipal = images.slice(0, 1)
  return (
    <>
      <div
        ref={modalRef}
        className='modal fade'
        id='formModal'
        tabIndex='-1'
        aria-labelledby='formModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <p>
                Consulta sobre: <span>{product.name}</span>
              </p>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>

            <div className='modal-body'>
              <FormProductContact modalRef={modalRef} product={product} />
              <div className='content_img'>
                <img
                  src={`/img/products/${imgPrincipal}`}
                  alt={product.img_alt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
