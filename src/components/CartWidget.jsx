import { FaCartPlus } from 'react-icons/fa'
export const CartWidget = () => {
  const itemCount = 5
  return (
    <button>
      <FaCartPlus size='30px' /> <span className='mb-3'>{itemCount}</span>
    </button>
  )
}
