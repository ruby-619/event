import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import DemoCarousel from './pages/DemoCarousel'
import Carousel1 from './pages/Carousel1'
import Event2 from './pages/Event2'
import Event3 from './pages/Event3'


function App() {
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/DemoCarousel">DemoCarousel</Link>
        <Link to="/Carousel1">Carousel1</Link>
        <Link to="/event2">Event2</Link>
        <Link to="/event3">Event3</Link>

        {/* 路由表 */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/event2">
            <Event2 />
          </Route>
          <Route path="/event3">
            <Event3 />
          </Route>
          <Route path="/DemoCarousel">
            <DemoCarousel renderItem />
          </Route>
          <Route path="/Carousel1">
            <Carousel1 renderItem />
          </Route><Route path="/Carousel1">
            <Carousel1 renderItem />
          </Route>
          {/* 網站首頁: exact:精確比對 */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
