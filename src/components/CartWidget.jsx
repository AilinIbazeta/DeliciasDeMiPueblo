import { FaCartPlus } from 'react-icons/fa'
import { useCarritoContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
export const CartWidget = () => {
  const { getItemQuantity } = useCarritoContext()

  return (
    <Link to={'/cart'}>
      <button>
        <FaCartPlus size='35px' />{' '}
        <span className='mb-3'>{getItemQuantity()}</span>
      </button>
    </Link>
  )
}
