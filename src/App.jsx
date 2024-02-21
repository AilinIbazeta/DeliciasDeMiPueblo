import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'
import { ItemDetailsContainer } from './components/ItemDetailsContainer'
import { NotFound } from './components/NotFound'
export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<ItemListContainer ClassName='container mt-10' />}
        ></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route
          path='/category/:categoryId'
          element={<ItemListContainer />}
        ></Route>
        <Route
          path='/product/:productId'
          element={<ItemDetailsContainer />}
        ></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
