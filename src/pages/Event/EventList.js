import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import EventCard from '../../components/EventCard'
import { BsBookmark } from 'react-icons/bs'
import EventNAV from '../../components/EventNAV'
import Input from '../../components/Input'
import './Event.scss'

const EventList = () => {
  return (
    <div>
      <LunarPhaseHeader />
      <body className="bg2">
        <h2 className="fs-36">Event</h2>
        <EventNAV />
        <Input />
        <EventCard />
      </body>
    </div>
  )
}

export default EventList
