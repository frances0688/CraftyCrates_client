import React from 'react'
import './App.scss'
import Box from './components/Box/Box'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import Theme from './components/Theme/Theme'
import {BoxProvider} from './context/BoxContext/BoxState'
import {ProductProvider} from './context/ProductContext/ProductState'
import {ThemeProvider} from './context/ThemeContext/ThemeState'

function App() {

  return (

    <React.Fragment>
      <Header/>
      <ThemeProvider>
        <BoxProvider>
          <ProductProvider>
            <Theme/>
            <Box/>
            <Product/>
          </ProductProvider>
        </BoxProvider>
      </ThemeProvider>
      <Footer/>
    </React.Fragment>

  )
}

export default App
