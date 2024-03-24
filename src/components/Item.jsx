import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

export const Item = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className='mb-5'>
        <div
          className='card mb-3'
          style={{ maxWidth: '250px', height: '358px' }}
        >
          {' '}
          <div className=''>
            <div className=''>
              <img
                src={`${product.img}`}
                className='img-fluid rounded-start'
                alt={product.nombre}
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
                <p className='card-text' style={{ fontSize: '0.8rem' }}>
                  <strong>Precio: ${product.precio}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
