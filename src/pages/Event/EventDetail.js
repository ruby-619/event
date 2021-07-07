import React from 'react'
import DetailCard from '../../components/DetailCard'

import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import LunarPhaseFooter from '../../components/LunarPhaseFooter'
import './Event.scss'

const EventDetail = () => {
  return (
    <div>
      <LunarPhaseHeader />
      <body className="bg2">
        <DetailCard />
        <LunarPhaseFooter />
      </body>
    </div>
  )
}

export default EventDetail
