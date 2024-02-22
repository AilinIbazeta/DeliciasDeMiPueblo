import { Link } from 'react-router-dom'
export const Categories = () => {
  return (
    <div className='navItemsContent'>
      <Link to={'/category/Tabletas'}>
        {' '}
        <button className='navItems btn btn-lg'>Tabletas</button>
      </Link>
      <Link to={'/category/Dulces'}>
        {' '}
        <button className='navItems btn btn-lg'>Dulces</button>
      </Link>
      <Link to={'/category/Tortas'}>
        {' '}
        <button className='navItems btn btn-lg'>Tortas</button>
      </Link>
    </div>
  )
}
