import React, { useState } from 'react'

export const Checkout = () => {
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

    console.log(formData)

    const dataForm = new FormData(formData)
    console.log(dataForm)

    const data = Objet.fromEntries(dataForm)
    console.log(data)
    e.target.reset()
  }

  return (
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
  )
}
