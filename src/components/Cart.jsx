import React from 'react'
import { useCarritoContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { ItemList } from './ItemList'
export const Cart = () => {
  const { carrito, totalPrice, emptyCart } = useCarritoContext()
  return (
    <div>
      {carrito.length === 0 ? (
        <>
          <h2>Carrito vacío</h2>
          <button className='btn btn-outline-primary mx-1 px-2 py-1 btn-sm'>
            <Link to={'/'}>Volver al inicio</Link>
          </button>
        </>
      ) : (
        <div className='d-flex'>
          <ItemList
            products={carrito}
            plantilla={'ItemCart'}
            ClassName='container'
          />
          <div className='row'>
            <p>Resumen de la compra: $ {totalPrice()}</p>
            <div>
              <button
                onClick={emptyCart}
                className='btn btn-outline-primary mx-1 px-2 py-1 btn-sm'
              >
                Vaciar carrito
              </button>
              <Link to={'/'}>
                <button className='btn btn-outline-primary mx-1 px-2 py-1 btn-sm'>
                  Continuar comprando
                </button>
              </Link>
              <Link to={'/checkout'}>
                <button className='btn btn-outline-primary mx-1 px-2 py-1 btn-sm'>
                  Finalizar compra
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
