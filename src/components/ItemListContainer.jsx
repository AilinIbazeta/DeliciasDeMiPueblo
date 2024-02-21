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
          console.log(categoryId)
          const productos = prods.filter((data) => data.category == categoryId)
          console.log({ productos })
          setProductos(productos)
        } else {
          setProductos(prods)
        }
      })
      .catch((error) => console.log(error))
  }, [categoryId])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      <ItemList products={productos} />
    </div>
  )
}
