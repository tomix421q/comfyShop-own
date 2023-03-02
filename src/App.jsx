import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  Private,
} from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />

      <Switch>
        {/* HOME */}
        <Route exact path='/'>
          <Home />
        </Route>
        {/*ABOUT  */}
        <Route exact path='/about'>
          <About />
        </Route>
        {/* CART */}
        <Route exact path='/cart'>
          <Cart />
        </Route>
        {/* PRODUCTS */}
        <Route exact path='/products'>
          <Products />
        </Route>
        {/* SINGLE PRODUCT */}
        <Route exact path='/products/:id' children={<SingleProduct />} />
        {/* CHECKOUT */}
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        {/* ERROR */}
        <Route exact path='/*'>
          <Error />
        </Route>
        {/*  */}
      </Switch>

      <Footer />
    </Router>
  )
}

export default App
