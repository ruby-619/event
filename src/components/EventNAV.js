import React, { useState } from 'react'
import { Route, withRouter, Link, Switch, matchPath } from 'react-router-dom'
import OneOfCategory from '../pages/Event/components/OneOfCategory'
import EventCategoryCard from './EventCategoryCard'



const EventNAV = (props) => {
  console.log(props.match.pathname)

  const url = props.match.url
  const path = props.match.path
  return (
    <div class="container">
      <div class="row">
        <div class="Enav">
          <ul class="d-flex justify-content-center">
            <li>
              <Link to={`${url}/1`}>戶外</Link>
            </li>
            <li>
              <Link to={`${url}/2`}>藝文</Link>
            </li>
            <li>
              <Link to={`${url}/3`}>講座</Link>
            </li>
            <li>
              <Link to={`${url}/4`}>手作</Link>
            </li>
            <li>
              <Link to={`${url}/5`}>品味</Link>
            </li>
          </ul>
        </div>
        {/* <Switch>
          <Route exact path={path}></Route>
          <Route path={`${path}/:type?/:id?`}>
            <EventCategoryCard />
          </Route>
        </Switch> */}
        {/* <Switch>
          <Route exact path={path}></Route>
          <Route path={`${path}/:eCategory?`}>
            <EventCategoryCard />
          </Route>
        </Switch> */}
      </div>
    </div>
  )
}

export default withRouter(EventNAV)
