import React from 'react'
import { useCarritoContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { ItemList } from './ItemList'

export const Cart = () => {
  const { carrito, totalPrice, emptyCart } = useCarritoContext()

  return (
    <div className='container'>
      {carrito.length === 0 ? (
        <div className='text-center'>
          <h2>Tu carrito está vacío</h2>
          <Link to={'/'} className='btn btn-outline-primary mx-1 btn-sm'>
            Volver al inicio
          </Link>
        </div>
      ) : (
        <div className='row'>
          <div className='col-md-6'>
            <ItemList products={carrito} plantilla={'ItemCart'} />
            <button onClick={emptyCart} className='btn btn-danger mt-3'>
              Vaciar carrito
            </button>
          </div>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-body card-body__cart'>
                <h5 className='card-title'>Resumen de la compra</h5>
                <p className='card-text'>Total: $ {totalPrice()}</p>
                <Link to={'/checkout'} className='btn btn-primary btn-block'>
                  Finalizar compra
                </Link>
                <Link to={'/'} className='btn btn-secondary btn-block mt-2'>
                  Continuar comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
