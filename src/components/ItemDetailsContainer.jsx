import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState([])
  const { categoryId } = useParams()
  useEffect(() => {
    fetch('../data/productos.json')
      .then((response) => response.json())
      .then((prods) => {
        const product = prods.find((data) => data.id == categoryId)
        if (prods) setItem(product)
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div>
      <h1>Item Details Container</h1>
    </div>
  )
}
