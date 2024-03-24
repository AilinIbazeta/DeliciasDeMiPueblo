import github from '../assets/github.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='text-white text-center'>
        <p className='mb-0'>Ailin Ibazeta - Todos los derechos reservados</p>
        <Link
          to={'https://github.com/AilinIbazeta?tab=repositories'}
          className='navbar-brand col-6'
        >
          <img
            src={github}
            alt='Logo'
            className='navbar-logo'
            style={{ width: '48px', height: '48px' }}
          />
        </Link>
      </div>
    </footer>
  )
}
