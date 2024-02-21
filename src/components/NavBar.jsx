import logo from '../assets/logo.png'
import { CartWidget } from './CartWidget'
import { Categories } from './Categories'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <div>
      <nav
        className='navbar navbar-light bg-light fixed-top'
        style={{ backgroundColor: '#e3f2fd' }}
      >
        <Link to={'/'}>
          <img src={logo} alt='Logo' className='navbar-logo' />
        </Link>

        <div className='container-fluid d-flex justify-content-between align-items-center'>
          <Categories />
          <div className='mx-5'>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  )
}
