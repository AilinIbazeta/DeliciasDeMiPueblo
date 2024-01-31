import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'

export const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje={'Tabletas de Alcayota'} />
    </>
  )
}
