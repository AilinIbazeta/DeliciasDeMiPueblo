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
import { CarritoProvider } from './context/CartContext'
export const App = () => {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<ItemListContainer ClassName='container' />}
          ></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route
            path='/category/:categoryId'
            element={<ItemListContainer ClassName='container' />}
          ></Route>
          <Route
            path='/product/:productId'
            element={<ItemDetailsContainer ClassName='container mt-5' />}
          ></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </CarritoProvider>
    </BrowserRouter>
  )
}
