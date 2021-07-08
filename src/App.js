import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import EventIndex from './pages/Event/EventIndex'
import Carousel1 from './components/Carousel1'
import EventList from './pages/Event/EventList'
import EventDetail from './pages/Event/EventDetail'
import EventIndex2 from './pages/Event/EventIndex2'
import Home from './pages/Home'
import EventCategoryCard from './components/EventCategoryCard'

function App() {
  return (
    <Router>
      <>
        {/* <Link to="/">EventIndex</Link> */}
        {/* <Link to="/carousel1">Carousel1</Link> */}
        {/* <Link to="/event-list">EventList</Link>
        <Link to="/event-detail">EventDetail</Link> */}

        {/* 路由表 */}

        <Switch>
         
          <Route path="/event-list">
            <EventList />
          </Route>
          <Route path="/event-list/:id?">
            {/* 這段待會由老師確認 */}
            <EventCategoryCard />
            {/* 這段待會由老師確認 */}
          </Route>
          
          <Route path="/event-detail/:id?">
            <EventDetail />
          </Route>
          <Route path="/event">
            <EventIndex2 renderItem />
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
