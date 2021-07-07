import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import EventListCard from '../../components/EventListCard'
import { BsBookmark } from 'react-icons/bs'
import EventNAV from '../../components/EventNAV'
import Input from '../../components/Input'
import './Event.scss'
// import OneOfCategory from './components/OneOfCategory'

const EventList = () => {
  return (
    <div>
      <LunarPhaseHeader />
      <body className="bg2 mt-5">
        <h2 className="mb-5 TextAlignCenter">Event</h2>
        <EventNAV />
        {/* <Input /> */}
        <EventListCard />
      </body>
    </div>
  )
}

export default EventList
