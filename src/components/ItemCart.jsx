import React from 'react'
import { useCarritoContext } from '../context/CartContext'
import { useCounter } from '../hooks/useCounter.jsx'

export const ItemCart = ({ product }) => {
  const { removeItem, updateItem } = useCarritoContext()
  const { count, increment, decrement } = useCounter(
    product.quantity,
    product.stock,
    1
  )

  return (
    <div className='align-items-center border-bottom py-3'>
      <div className='me-3'>
        <img
          src={`../img/${product.img}`}
          alt={`Imagen de ${product.title}`}
          className='img-fluid rounded'
          style={{ maxWidth: '80px', maxHeight: '80px' }}
        />
      </div>
      <div className='flex-grow-1'>
        <h3>{product.nombre}</h3>
        <div className='d-flex align-items-center'>
          <button
            className='btn btn-outline-primary me-1 px-2 py-1 btn-sm'
            onClick={async () => {
              decrement()
              updateItem(product.id, count - 1)
              decrement()
            }}
          >
            -
          </button>
          <span className='mx-1'>{count}</span>
          <button
            onClick={async () => {
              increment()
              updateItem(product.id, count + 1)
              increment()
            }}
            className='btn btn-outline-primary mx-1 px-2 py-1 btn-sm'
          >
            +
          </button>
        </div>
        <p className='m-0'>Subtotal: ${product.precio * count}</p>
        <button
          onClick={() => removeItem(product.id)}
          className='btn btn-outline-danger mt-2 px-2 py-1 btn-sm'
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}
