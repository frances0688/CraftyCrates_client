import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.scss'
import Home from './components/Home/Home'
import LoginRegister from './components/LoginRegister/LoginRegister'
import Box from './components/Box/Box'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import Theme from './components/Theme/Theme'
import {BoxProvider} from './context/BoxContext/BoxState'
import {ProductProvider} from './context/ProductContext/ProductState'
import {ThemeProvider} from './context/ThemeContext/ThemeState'
import {UserProvider} from './context/UserContext/UserState'
import User from './components/User/User'

function App() {

  return (

    <React.Fragment>

      <Router>
        <UserProvider>
          <ThemeProvider>
            <BoxProvider>
              <ProductProvider>
                <Header/>
                <Routes>
                  <Route path="/" element={< Home />}/>
                  <Route path="/login" element={< LoginRegister />}/>
                  <Route path="/profile" element={< User />}/>
                  <Route path="/crates" element={< Theme />}/>
                  <Route path="/contact" element={< Product />}/>
                </Routes>
                <Footer/>
              </ProductProvider>
            </BoxProvider>
          </ThemeProvider>
        </UserProvider>
      </Router>

    </React.Fragment>

  )
}

export default App
