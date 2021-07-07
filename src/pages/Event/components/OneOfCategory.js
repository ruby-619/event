import React, { useState, useEffect } from 'react'
// import React from 'react'
// import LunarPhaseHeader from '../../../components/LunarPhaseHeader'
// import EventNAV from '../../../components/EventNAV'
import EventCard from '../../../components/EventListCard'
import EventCategoryCard from '../../../components/EventCategoryCard'

const OneOfCategory = () => {
  const [event, setEvent] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  var moment = require('moment')

  async function getEventFromServer(id) {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/event/event-category'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    console.log(data)
    // 設定資料
    setEvent(data)
  }
  useEffect(() => {
    getEventFromServer()
  }, [])

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [event])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  return (
    <div>
      {/* <LunarPhaseHeader /> */}
      <body className="bg2">
        {/* <h2 className="fs-36">Event</h2> */}
        {/* <EventNAV /> */}
        <EventCategoryCard />
      </body>
    </div>
  )
}

export default OneOfCategory
