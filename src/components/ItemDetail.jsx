import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { Link } from 'react-router-dom'
export const ItemDetail = ({ item }) => {
  const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)
  const handleAddToCart = () => {
    console.log('Producto agregado al carrito')
  }
  return (
    <div className='card'>
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img
            src={`../img/${item.img}`}
            alt={item.nombre}
            className='card-img'
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{item.nombre}</h5>
            <p className='card-text'>Marca: {item.marca}</p>
            <p className='card-text'>Precio: ${item.precio}</p>
            <p className='card-text'>Stock: {item.stock}</p>
            <p className='card-text'>Categoría: {item.category}</p>
          </div>
        </div>
      </div>
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
        {/* <Link to={'/checkout'}> */}
        <button
          className='btn btn-primary mx-1 px-3 py-1 btn-sm d-flex justify-content-center align-items-center'
          onClick={handleAddToCart}
        >
          <p style={{ fontSize: '0.9rem', margin: 0 }}>Agregar</p>{' '}
        </button>
        {/* </Link> */}
      </div>
    </div>
  )
}
