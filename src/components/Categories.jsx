import { Link } from 'react-router-dom'
export const Categories = () => {
  return (
    <div className='navItemsContent'>
      <Link to={'/category/Tabletas'}>
        {' '}
        <button className='navItems'>Tabletas</button>
      </Link>
      <Link to={'/category/Dulces'}>
        {' '}
        <button className='navItems'>Dulces</button>
      </Link>
      <Link to={'/category/Tortas'}>
        {' '}
        <button className='navItems'>Tortas</button>
      </Link>
    </div>
  )
}
