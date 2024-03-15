import { CartWidget } from './CartWidget'
import { Categories } from './Categories'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className='navbar fixed-top' style={{ backgroundColor: 'white' }}>
      <div className='container-fluid d-flex justify-content-between align-items-center'>
        <Link to={'/'} className='navbar-brand col-6'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/deliciasdemipueblo-406ef.appspot.com/o/logo.png?alt=media&token=ce6d5997-70ed-4da6-a53c-f687ef83b9cd'
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
