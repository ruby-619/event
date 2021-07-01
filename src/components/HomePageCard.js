import React, { useState, useEffect } from 'react'

const HomePageCard = () => {
  const [event, setEvent] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  var moment = require('moment')

  async function getEventFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/event/select-homepagecard'
    // const url = 'http://localhost:6005/event/?page=1'

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
    <div class="container">
      <div class="row">
        {/* card1 */}
        {event?.rows?.map((v, i) => {
          return (
            <>
              <div class="HomePageCard">
                <div class="top">
                  <div class="HomePageCardDate">
                    {moment(v.eventDate).format('YYYY-MM-DD')}
                  </div>
                  <div class="HomePageCardTitle">{v.eventName}</div>
                </div>
                <div class="HomePageCardTitle">
                  <img src="https://picsum.photos/300/380/?random=4" />
                </div>
                <div class="HomePageCardContent">{v.eventSubtitle}</div>
                <div class="HomePageCardRegister">報名中</div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default HomePageCard
