import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState([])
  const { productId } = useParams()
  useEffect(() => {
    fetch('../data/productos.json')
      .then((response) => response.json())
      .then((prods) => {
        const product = prods.find((data) => data.id == productId)

        if (prods) setItem(product)
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div className='fixed-top top-0 left-0 d-flex justify-content-center align-items-center w-100 h-100 bg-black bg-opacity-50'>
      <div className='bg-white p-4 rounded-lg'>
        <ItemDetail item={item} />
      </div>
    </div>
  )
}
