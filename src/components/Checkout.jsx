import React, { useRef, useState } from 'react'
import { useCarritoContext } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  createOrdenCompra,
  getOrdenCompra,
  getProduct,
  updateProduct,
} from '../firebase/firebase'

export const Checkout = () => {
  const formRef = useRef()

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    dni: '',
    telefono: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const dataForm = new FormData(formRef.current)

    const cliente = Object.fromEntries(dataForm)

    //generar orden de compra

    //Modificar stock

    const aux = [...carrito]

    aux.forEach((prodCarrito) => {
      getProduct(prodCarrito.id).then((prodBDD) => {
        if (prodBDD.stock >= prodCarrito.quantity) {
          prodBDD.stock -= prodCarrito.quantity
          updateProduct(prodBDD.id, prodBDD)
        } else {
          toast.info(
            `El producto: "${prodBDD.nombre}" no tiene stock suficiente`,
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            }
          )
          //entonces lo saco del carrito
          aux.filter((prod) => prod.id != prodBDD.id)
        }
      })
    })

    const aux2 = aux.map((prod) => ({
      id: prod.id,
      quantity: prod.quantity,
      precio: prod.precio,
    }))

    createOrdenCompra(
      cliente,
      totalPrice(),
      aux2,
      new Date().toLocaleDateString('es-AR', {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      })
    )
      .then((ordenCompra) => {
        toast.success(
          `🛒 ¡Muchas gracias por comprar con nosotros! Código de operación: ${
            ordenCompra.id
          } por un total de ${totalPrice()}. Por favor revise su casilla de correo a través del cual recibirá la confirmación de compra.`,
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          }
        )
        emptyCart()
        e.target.reset()
        navigate('/')
      })
      .catch((e) => {
        toast.error(`🛒 Error, no pudimos generar tu orden de compra`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      })
  }

  const navigate = useNavigate() //esto nos devuelve la ubicación actual de mi componente

  const { carrito, totalPrice, emptyCart } = useCarritoContext()

  return (
    <>
      {carrito.lenth === 0 ? (
        <>
          <h2>Para finalizar compra debe tener productos en su carrito</h2>
          <Link to={'/'}>
            <button>Volver al inicio</button>
          </Link>
        </>
      ) : (
        <div className='container'>
          <h2>Formulario</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='nombre'>Nombre:</label>
              <input
                type='text'
                className='form-control'
                id='nombre'
                name='nombre'
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='apellido'>Apellido:</label>
              <input
                type='text'
                className='form-control'
                id='apellido'
                name='apellido'
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='direccion'>Dirección:</label>
              <input
                type='text'
                className='form-control'
                id='direccion'
                name='direccion'
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='dni'>DNI:</label>
              <input
                type='text'
                className='form-control'
                id='dni'
                name='dni'
                value={formData.dni}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='telefono'>Teléfono:</label>
              <input
                type='tel'
                className='form-control'
                id='telefono'
                name='telefono'
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <button type='submit' className='btn btn-primary mt-2'>
              Finalizar
            </button>
          </form>
        </div>
      )}
    </>
  )
}
