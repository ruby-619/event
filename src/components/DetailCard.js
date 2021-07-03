import React, { useState, useEffect } from 'react'
import { BsBookmark } from 'react-icons/bs'
import { withRouter } from 'react-router-dom'

const DetailCard = (props) => {
  console.log(props)

  const [event, setEvent] = useState([
    {
      // id: '',
      // eventId: '',
      // eventName: '',
      // eventSubtitle: '',
      // eventDate: '',
      // eventDescription: '',
      // eventLocation: '',
      // eventImg: '',
      // eventPrice: '0',
      // eventCategory: '',
      // created_at: '',
      // updated_at: '',
    },
  ])

  const [dataLoading, setDataLoading] = useState(false)

  async function getEventFromServer() {
    // 開啟載入指示
    // setDataLoading(true)

    // 連接的伺服器資料網址
    const id = props.match.params.id
    const url = 'http://localhost:6005/event/' + id
    // const url = 'http://localhost:6005/event/:id?'

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
    console.log()
  }
  useEffect(() => {
    getEventFromServer()
    // const newevent = event.find((v, i) => {
    //   return props.match.params.id === v.id
    // })
    // setEvent(newevent)
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
    <>
      <div class="container">
        <div class="row">
          <div class="ecard3 mt-5 d-flex">
            <div class="smallPhoto d-flex flex-column-reverse align-items-start">
              <div className="sm">
                <img src="https://picsum.photos/392/339/?random=1" />
              </div>
              <div className="sm">
                <img src="https://picsum.photos/392/339/?random=2" />
              </div>
              <div className="sm">
                <img src="https://picsum.photos/392/339/?random=3" />
              </div>
            </div>
            <div class="photo3">
            <img src={event.eventImg} />
            </div>
            <div class="text3">
              <h4>{event.eventName}</h4>
              <div class="line1 d-flex justify-content-between align-items-center mt-3 border-bottom">
                <h3>$ {event.eventPrice}</h3>
                <div className="d-flex align-items-center">
                  <div>
                    <BsBookmark size="22px" />
                  </div>
                  <div className="add">加入收藏</div>
                </div>
              </div>
              <div class="line2 d-flex justify-content-between align-items-center border-bottom pb-2 pt-4">
                <p>付款方式 : 信用卡 / ATM / ApplePay / LinePay</p>
              </div>
              <div class="line2 d-flex justify-content-between align-items-center border-bottom pb-3 pt-3">
                <div className="h6-tc"></div>
                <h6>尚有名額</h6>
              </div>
              <div class="line3 d-flex  justify-content-between align-items-center border-bottom pb-3 pt-3">
                <div className="h6-tc pr-3">數量 </div>
                <div className="pl-3 Ebtn-group d-flex justify-content-between">
                  <button className="Ebtn">-</button>
                  <span>1</span>
                  <button className="Ebtn">+</button>
                </div>
              </div>
              <div class="line3 d-flex  justify-content-between align-items-center pb-3 pt-3">
                <div class="mt-5">
                  <button class="ebtn-border">我要報名</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="row">
          <h2 className="border-bottom mt17vh">{event.eventName}</h2>
          <div className="photo474">
            <img src="https://picsum.photos/474/339/?random=1" />
          </div>
          <div className="col-9 m-auto">{event.eventDescription}</div>
        </div>
      </div>
      <div className="fluidPhoto">
        <img src={event.eventImg} />
      </div>
      <div className="container">
        <div class="row">
          <div className="paper">
            <div class="col-5 ">{event.eventNotice}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(DetailCard)
