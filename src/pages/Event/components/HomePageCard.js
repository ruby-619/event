import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePageCard = () => {
  const [event, setEvent] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  var moment = require('moment')

  async function getEventFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/event'
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
        {event?.data?.map((v, i) => {
          return (
            <>
              <Link to={`/event-detail/${v.id}`}>
                <div class="HomePageCard">
                  <div class="top">
                    <div class="HomePageCardDate">
                      {moment(v.eventDate).format('YYYY-MM-DD')}
                    </div>
                    <div class="HomePageCardTitle">{v.eventName}</div>
                  </div>
                  <div className="hcard">
                    <figure className="hcard__thumb">
                      <div className="HomePageCardPhoto">
                        <img src={v.eventImg} className="hcard__image" />
                      </div>
                      <figcaption className="hcard__caption">
                        <h5 className="hcard__snippet"></h5>
                        <h5
                          className="hcard__snippet"
                          dangerouslySetInnerHTML={{
                            __html: v.eventDescription,
                          }}
                        ></h5>
                        <a href className="hcard__button">
                          Read more
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <div class="HomePageCardContent TextAlignCenter">
                    {v.eventSubtitle}
                  </div>
                  <div class="HomePageCardRegister">報名中</div>
                </div>
              </Link>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default HomePageCard
