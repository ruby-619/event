import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

import EventList from './pages/Event/EventList'
import EventDetail from './pages/Event/EventDetail'
import EventIndex2 from './pages/Event/EventIndex2'
import Home from './pages/Home'
import EventCategoryCard from './pages/Event/components/EventCategoryCard'
// import EventIndex from './pages/Event/SmallToLarge'

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
         
          {/* 分類路由 */}
          <Route path="/category/:id?">
            <EventCategoryCard />
          </Route>

          {/* 下面這個是ok的，但img不ok */}
          {/* <Route path="/event-list/category/:id?">
            <EventCategoryCard />
          </Route> */}
          <Route path="/event-list">
            <EventList />
          </Route>

          <Route path="/event-detail/:id?">
            <EventDetail />
          </Route>
          <Route path="/event">
            <EventIndex2 renderItem />
          </Route>
          {/* test */}
          {/* <Route path="/picture-onclick">
            <EventIndex />
          </Route> */}
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
