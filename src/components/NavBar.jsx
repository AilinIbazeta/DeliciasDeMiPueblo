import logo from '../assets/logo.png'
import { CartWidget } from './CartWidget'
import { Categories } from './Categories'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className='navbar fixed-top' style={{ backgroundColor: 'white' }}>
      <div className='container-fluid d-flex justify-content-between align-items-center'>
        <Link to={'/'} className='navbar-brand col-6'>
          <img
            src={logo}
            alt='Logo'
            className='navbar-logo'
            style={{ maxWidth: '700px' }}
          />
        </Link>

        <div className='d-flex justify-content-start align-items-center flex-grow-1 col-4'>
          <Categories />
        </div>

        <CartWidget />
      </div>
    </nav>
  )
}
