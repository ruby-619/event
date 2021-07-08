import React, { useState, useEffect } from 'react'
import { BsBookmark } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { IoMdCalendar } from 'react-icons/io'
import { Route, withRouter, Link, Switch, matchPath } from 'react-router-dom'

const EventCategoryCard = () => {
  const [event, setEvent] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  var moment = require('moment')

  async function getEventFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    
    const url = 'http://localhost:3000/event/category/:eCategory'

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
      <body className="bg2">
        <div class="container">
          <div class="row">
            {/* 首張卡 */}
            {/* <div class="ecard2 mt-5 d-flex">
              <div class="photo2">
                <img src="https://picsum.photos/392/339/?random=1" />
              </div>
              <div class="text">
                <h4>品調香體驗 淡香水手作</h4>

                <div class="line1 d-flex justify-content-between align-items-center mt-3 border-bottom">
                  <h3>$ 990</h3>
                  <div className="d-flex align-items-center">
                    <div>
                      <BsBookmark size="22px" />
                    </div>
                    <div className="add">加入收藏</div>
                  </div>
                </div>
                <div class="line2 d-flex justify-content-between align-items-center border-bottom pb-3 pt-3">
                  <div className="h6-tc">台北市</div>
                  <h6>尚有名額</h6>
                </div>
                <div class="line3 d-flex mt-3">
                  <div className="pr-3">手作 </div>
                  <div>|</div>
                  <div className="pl-3">一人成團</div>
                </div>
                <div className="more">
                  <a href="#">MORE</a>
                </div>
              </div>
            </div> */}
            {
              event?.data?.map((v, i) => {
                return (
                  <div class="ecard2 mt-5 d-flex bg-pink">
                    <div class="photo2">
                      <img src="https://picsum.photos/392/339/?random=2" />
                    </div>
                    <div class="text">
                      <h4>{v.eventName}</h4>
                      <div class="line2 d-flex justify-content-between align-items-center border-bottom pb-3 pt-3">
                        <div className="h6-tc d-flex align-items-center">
                          <div>
                            <IoMdCalendar size="25px" />
                          </div>
                          活動日期：
                          {moment(v.eventDate).format('YYYY-MM-DD')}
                          <span>({moment(v.eventDate).format('dddd')})</span>
                        </div>
                      </div>
                      <div class="line1 d-flex justify-content-between align-items-center mt-3 border-bottom">
                        <h3>$ {v.eventPrice}</h3>
                        <div className="d-flex align-items-center">
                          <div>
                            <BsBookmark size="22px" />
                          </div>
                          <div className="add">加入收藏</div>
                        </div>
                      </div>
                      <div class="line2 d-flex justify-content-between align-items-center border-bottom pb-3 pt-3">
                        <div className="h6-tc d-flex">
                          <div>
                            <GoLocation size="25px" />
                          </div>
                          {v.eventLocation}
                        </div>
                        <h6>尚有名額</h6>
                      </div>
                      <div class="line3 d-flex mt-3">
                        <div className="pr-3">{v.eventCategory} </div>
                        <div>|</div>
                        <div className="pl-3">一人成團</div>
                      </div>
                      <div className="more">
                        <a href="#">MORE</a>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </body>
    </div>
  )
}

export default withRouter(EventCategoryCard)
