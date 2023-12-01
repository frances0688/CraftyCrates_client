import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.scss'
import Home from './components/Home/Home'
import LoginRegister from './components/LoginRegister/LoginRegister'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import {BoxProvider} from './context/BoxContext/BoxState'
import {ProductProvider} from './context/ProductContext/ProductState'
import {ThemeProvider} from './context/ThemeContext/ThemeState'
import {UserProvider} from './context/UserContext/UserState'
import User from './components/User/User'
import Contact from './components/Contact/Contact'
import OrderStepper from './components/OrderStepper/OrderStepper'
import {OrderProvider} from './context/OrderContext/OrderState'
import {StepProvider} from './context/StepContext/StepState'

function App() {

  return (

    <React.Fragment>

      <Router>
        <UserProvider>
          <StepProvider>
            <OrderProvider>
              <ThemeProvider>
                <ProductProvider>
                  <BoxProvider>
                    <Header/>
                    <Routes>
                      <Route path="/" element={< Home />}/>
                      <Route path="/login" element={< LoginRegister />}/>
                      <Route path="/profile" element={< User />}/>
                      <Route path="/crates" element={< OrderStepper />}/>
                      <Route path="/contact" element={< Contact />}/>
                    </Routes>
                    <Footer/>
                  </BoxProvider>
                </ProductProvider>
              </ThemeProvider>
            </OrderProvider>
          </StepProvider>
        </UserProvider>
      </Router>

    </React.Fragment>

  )
}

export default App
