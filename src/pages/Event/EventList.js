import React from 'react'
import { withRouter } from 'react-router-dom'
import LunarPhaseHeader from '../../components/LunarPhaseNavbar'
import EventListCard from './components/EventListCard'
// import { BsBookmark } from 'react-icons/bs'
import EventNAV from './components/EventNAV'

import './Event.scss'
// import CategoryNav from '../Event/components/CategoryNav'
// import OneOfCategory from './components/OneOfCategory'

const EventList = (props) => {
  console.log(props)
  return (
    <div>
      <LunarPhaseHeader />

      {/* <body className="bg2 mt-5"> */}
      <h2 className="mb-5 TextAlignCenter">Event</h2>
      <EventNAV />
      {/* <Input /> */}
      <EventListCard />
      {/* </body> */}
    </div>
  )
}

export default withRouter(EventList)
