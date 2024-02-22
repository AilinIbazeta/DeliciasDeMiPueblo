import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const ItemCount = () => {
  const { count, increment, decrement, reset } = useCounter(1, 10, 1)

  const handleAddToCart = () => {
    console.log('Producto agregado al carrito')
  }
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <button
        className='btn btn-outline-primary mx-1 px-2 py-1 btn-sm'
        onClick={decrement}
      >
        -
      </button>
      <span className='mx-1'>{count}</span>
      <button
        onClick={increment}
        className='btn btn-outline-primary mx-1 px-2 py-1 btn-sm'
      >
        +
      </button>
      <button
        className='btn btn-primary mx-1 px-3 py-1 btn-sm d-flex justify-content-center align-items-center'
        onClick={handleAddToCart}
      >
        <p style={{ fontSize: '0.9rem', margin: 0 }}>Agregar</p>{' '}
      </button>
    </div>
  )
}
