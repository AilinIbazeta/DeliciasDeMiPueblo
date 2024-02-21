import React, { useEffect, useState } from 'react'
import { useCounter } from '../hooks/useCounter'
export const Item = ({ product }) => {
  const [numero, setNumero] = useState(0)
  const { count, increment, decrement, reset } = useCounter(1, 10, 1)
  // const handleIncrement = () => {
  //   setNumero(numero + 1)
  // }

  // const handleDecrement = () => {
  //   if (numero > 0) {
  //     setNumero(numero - 1)
  //   }
  // }

  const handleAddToCart = () => {
    console.log('Producto agregado al carrito')
  }
  return (
    <div className='container mb-5'>
      <div className='card mb-3' style={{ maxWidth: '250px' }}>
        {' '}
        {/* Reducir el maxWidth */}
        <div className=''>
          <div className=''>
            <img
              src={`../img/${product.img}`}
              className='img-fluid rounded-start'
              alt={product.nombre}
              // style={{ maxWidth: '100px', maxHeight: '100px' }}
            />
          </div>
          <div className=''>
            <div className='card-body'>
              <h5 className='card-title' style={{ fontSize: '1rem' }}>
                {product.nombre}
              </h5>{' '}
              <p className='card-text' style={{ fontSize: '0.8rem' }}>
                {product?.description}
              </p>{' '}
              <p className='card-text' style={{ fontSize: '0.7rem' }}>
                <small className='text-muted'>Marca: {product.marca}</small>
              </p>
              <p className='card-text' style={{ fontSize: '0.7rem' }}>
                <small className='text-muted'>Stock: {product.stock}</small>
              </p>
              <p className='card-text' style={{ fontSize: '0.8rem' }}>
                <strong>Precio: ${product.precio}</strong>
              </p>
              <div className='d-flex justify-content-center align-items-center'>
                {/* <p style={{ fontSize: '0.7rem' }} className='m-0 p-2'>
                  {mensaje}
                </p> */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
