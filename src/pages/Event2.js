import React from 'react'
import { Link } from 'react-router-dom'
import LunarPhaseHeader from '../components/LunarPhaseHeader'
import EventCard2 from '../components/EventCard2'
import { BsBookmark } from 'react-icons/bs'
import Search from '../components/Search'
import EventNAV from '../components/EventNAV'
import Input from '../components/Input'


const Event2 = () => {
  return (
    <div>
      <LunarPhaseHeader />
      <body className="bg2">
        <h2 className="fs-36">Event</h2>
        <EventNAV />
        <Input />
        <EventCard2 />
      </body>
    </div>
  )
}

export default Event2
