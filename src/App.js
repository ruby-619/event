import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import EventIndex from './pages/Event/EventIndex'
import Carousel1 from './components/Carousel1'
import EventList from './pages/Event/EventList'
import EventDetail from './pages/Event/EventDetail'

function App() {
  return (
    <Router>
      <>
        <Link to="/">EventIndex</Link>
        <Link to="/carousel1">Carousel1</Link>
        <Link to="/event-list">Event List</Link>
        <Link to="/event-detail">Event Detail</Link>

        {/* 路由表 */}
        <Switch>
          <Route path="/event-detail/:id?">
            <EventDetail />
          </Route>
          <Route path="/event-list">
            <EventList />
          </Route>
          <Route path="/">
            <EventIndex renderItem />
          </Route>
          <Route path="/Carousel1">
            <Carousel1 renderItem />
          </Route>
          {/* 網站首頁: exact:精確比對 */}
          <Route exact path="/">
            <EventIndex />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
