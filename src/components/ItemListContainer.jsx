import { useState } from 'react'
export const ItemListContainer = ({ mensaje }) => {
  const [numero, setNumero] = useState(0)
  const handleIncrement = () => {
    setNumero(numero + 1)
  }
  const handleDecrement = () => {
    setNumero(numero - 1)
  }
  const handleAddToCart = () => {
    console.log('Producto agregado al carrito')
  }

  return (
    <div className='container fixed-bottom mb-5'>
      <div className='d-flex justify-content-center align-items-center'>
        <p className='mx-3'>{mensaje}</p>
        <button
          className='btn btn-outline-primary mr-3'
          onClick={handleIncrement}
        >
          +
        </button>
        <span className='mx-3'>{numero}</span>
        <button className='btn btn-outline-primary' onClick={handleDecrement}>
          -
        </button>
        <button className='btn btn-primary mx-2' onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}
