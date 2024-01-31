import logo from '../assets/logo.png'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
  return (
    <div>
      <nav
        className='navbar navbar-light bg-light fixed-top'
        style={{ backgroundColor: '#e3f2fd' }}
      >
        <img src={logo} alt='Logo' className='navbar-logo' />
        <div className='container-fluid d-flex justify-content-between align-items-center'>
          <div className='navItemsContent'>
            <button className='navItems'>¿Quiénes somos?</button>
            <button className='navItems'>Tabletas</button>
            <button className='navItems'>Ofertas semanales</button>
            <button className='navItems'>Regalá una bandeja tradicional</button>
          </div>
          <div className='mx-5'>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  )
}
