import { Item } from './Item'
export const ItemList = ({ products }) => {
  return (
    <>
      {products.map((prod) => (
        // Recibo un array de objetos normal y lo devuelvo como plantilla
        <Item product={prod} />
      ))}
    </>
  )
}
