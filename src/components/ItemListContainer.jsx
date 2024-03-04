import { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({ mensaje, product }) => {
  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    fetch('../data/productos.json')
      .then((response) => response.json())
      .then((prods) => {
        if (categoryId) {
          const filteredProducts = prods.filter(
            (data) => data.category == categoryId
          )
          setProductos(filteredProducts)
        } else {
          setProductos(prods)
        }
      })
      .catch((error) => console.log(error))
  }, [categoryId])

  return (
    <div
      className='item-list-container--container'
      style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}
    >
      <ItemList products={productos} plantilla='Item' />
    </div>
  )
}
