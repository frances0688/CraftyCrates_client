import './App.scss'
import Box from './components/Box/Box'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import {BoxProvider} from './context/BoxContext/BoxState'
import {ProductProvider} from './context/ProductContext/ProductState'

function App() {

  return (

    <div>
      <Header/>
      <BoxProvider>
        <Box/>
        <ProductProvider>
          <Product/>
        </ProductProvider>
      </BoxProvider>
      <Footer/>
    </div>

  )
}

export default App
