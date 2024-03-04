import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { Link } from 'react-router-dom'
import { useCarritoContext } from '../context/CartContext'
export const ItemDetail = ({ item }) => {
  const { addItem } = useCarritoContext()
  const { count, increment, decrement, reset } = useCounter(
    item.quantity,
    item.stock,
    1
  )
  const handleAddToCart = () => {
    addItem(item, count)
  }
  return (
    <div className='card osition-relative'>
      <div className='position-absolute top-0 end-0 m-3'>
        <Link to={'/'}>
          <button className='btn btn-sm btn-outline-secondary'>
            Cerrar ventana
          </button>
        </Link>
      </div>
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
