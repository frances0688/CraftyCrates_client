import './App.scss'
import Box from './components/Box/Box'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import {ProductProvider} from './context/ProductContext/ProductState'

function App() {

  return (

    <div>
      <Header/>
      <ProductProvider>
        <Box/>
        <Product/>
      </ProductProvider>
      <Footer/>
    </div>

  )
}

export default App
