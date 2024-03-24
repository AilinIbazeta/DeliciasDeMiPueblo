import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
import { getProduct } from '../firebase/firebase'

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState([])
  const { productId } = useParams()

  useEffect(() => {
    getProduct(productId)
      .then((prod) => setItem(prod))
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
