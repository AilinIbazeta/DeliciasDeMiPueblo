import { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../firebase/firebase'

export const ItemListContainer = ({ mensaje, product }) => {
  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    getProducts()
      .then((prods) => {
        // Esperar a que todas las promesas se resuelvan
        return Promise.all(prods)
      })
      .then((resolvedProds) => {
        const productos = resolvedProds.filter((data) => data.stock > 0)
        if (categoryId) {
          const filteredProducts = productos.filter(
            (data) => data.category === categoryId
          )
          setProductos(filteredProducts)
        } else {
          setProductos(productos)
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
