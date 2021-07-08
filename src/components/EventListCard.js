
import React, { useState, useEffect } from 'react'
import DateSearch from '../pages/Event/components/Filter/DateSearch'
import Location from '../pages/Event/components/Filter/Location'
import SearchBar from '../pages/Event/components/Filter/SearchBar'
import Sort from '../pages/Event/components/Filter/Sort'
import { BsBookmark } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { IoMdCalendar } from 'react-icons/io'
import { NetworkAuthenticationRequire } from 'http-errors'

const EventListCard = () => {
  const [event, setEvent] = useState([]) //初始資料
  const [displayEvent, setdisplayEvent] = useState([]) //篩過之後的資料

  const [dateSearch, setdateSearch] = useState('') // 日期搜尋
  const [seletedLocation, setseletedLocation] = useState('') // 地點搜尋
  const [searchWord, setSearchWord] = useState('') // 關鍵字搜尋
  const [sortBy, setSortBy] = useState('')

  const [dataLoading, setDataLoading] = useState(false)
  var moment = require('moment') //日期格式化需要引入

  // 初始化資料
  async function getEventFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/event'

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

    console.log(data.data)
    // 設定資料
    setEvent(data.data)
    setdisplayEvent(data.data)
  }
  useEffect(() => {
    getEventFromServer()
  }, [])

  // 四種篩選法
  // 1.依照關鍵字

  const handleSearch = (event, searchWord) => {
   // console.log(searchWord)
    let newEvent = [...event]

    if (searchWord) {
      newEvent = event.filter((e) => {
       // console.log(e.eventName.includes(searchWord))
        return e.eventName.includes(searchWord)
      })
    } else {
      newEvent = [...event]
    }

    //console.log(newEvent)
    return newEvent
  }
  // 2.依照價格排序
  const handleSort = (event, sortBy) => {
    let newEvent = [...event]

    // 以價格排序-由少至多
    if (sortBy === '1') {
      newEvent = [...newEvent].sort((a, b) => a.eventPrice - b.eventPrice)
    }

    if (sortBy === '2') {
      newEvent = [...newEvent].sort((a, b) => b.eventPrice - a.eventPrice)
    }

    if (sortBy === '' && newEvent.length > 0) {
      newEvent = [...newEvent].sort((a, b) => a.id - b.id)
    }

    return newEvent
  }
  // 3.地區間選項
  const handleLocation = (event, seletedLocation) => {
    let newEvent = [...event]
    switch (seletedLocation) {
      case '台北市':
        newEvent = [...newEvent].filter((e) => {
          return (e.eventLocation === '台北市')
        })
        break
      case '桃園市':
        newEvent = [...newEvent].filter((e) => {
          return (e.eventLocation === '桃園市')
        })
        break
      // 指所有的產品都出現
      default:
        break
    }

    return newEvent
  }

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    console.log(searchWord)
    let newEvent = [...event]

    newEvent = handleSearch(newEvent, searchWord)
    console.log(newEvent)
    newEvent = handleSort(newEvent, sortBy)
    console.log(newEvent)
    newEvent = handleLocation(newEvent, seletedLocation)
console.log(newEvent)
    setdisplayEvent(newEvent)

    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [event, searchWord, sortBy])

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
      <DateSearch dateSearch={dateSearch} setdateSearch={setdateSearch} />
      <Location
        seletedLocation={seletedLocation}
        setseletedLocation={setseletedLocation}
      />
      <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
      <Sort sortBy={sortBy} setSortBy={setSortBy} />
      <body className="bg2">
        <div class="container">
          <div class="row">
            {/* 首張卡 */}
            <div class="ecard2 mt-5 d-flex">
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
            </div>
            {displayEvent.map((v, i) => {
              return (
                <div class="ecard2 mt-5 d-flex bg-pink">
                  <div class="photo2">
                    <img src={v.eventImg} />
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

export default EventListCard
