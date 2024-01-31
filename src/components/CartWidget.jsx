import { FaCartPlus } from 'react-icons/fa'
export const CartWidget = () => {
  const itemCount = 5
  return (
    <button>
      <FaCartPlus size='30px' /> <span>{itemCount}</span>
    </button>
  )
}
