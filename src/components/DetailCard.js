import { json } from 'body-parser'
import React, { useState, useEffect } from 'react'

import { BsBookmark } from 'react-icons/bs'
import { withRouter } from 'react-router-dom'

const DetailCard = (props) => {
  console.log(props)
  const [total, setTotal] = useState(0)
  const [addToCollection, setaddToCollection] = useState('')

  const [event, setEvent] = useState([
    {
      id: '',
      eventId: '',
      eventName: '',
      eventSubtitle: '',
      eventDate: '',
      eventDescription: '',
      eventLocation: '',
      eventImg: '',
      eventPrice: '0',
      eventCategory: '',
      created_at: '',
      updated_at: '',
    },
  ])

  const [dataLoading, setDataLoading] = useState(false)

  async function getEventFromServer() {
    // 開啟載入指示
    // setDataLoading(true)

    // 連接的伺服器資料網址
    const id = props.match.params.id
    const url = 'http://localhost:3000/event/' + id
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
  // let photo = event.eventImg
  // let newPhoto = photo?.data?.map((p) => {
  //   return p
  // })
  // console.log(newPhoto)

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
          <div class="ecard3  d-flex">
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
              {console.log(event.eventImg)}
            </div>
            <div class="text3">
              <h4>{event.eventName}</h4>
              <div class="line1 d-flex justify-content-between align-items-center mt-3 border-bottom">
                <h3>$ {event.eventPrice}</h3>
                <div className="d-flex align-items-center">
                  <div>
                    <BsBookmark
                      size="22px"
                      color="addToCollection"
                      onMouseDown={() => {
                        setaddToCollection('#afa')
                      }}
                    />
                  </div>
                  <div className="add">加入收藏</div>
                </div>
              </div>
              <div className="line2 d-flex justify-content-between align-items-center border-bottom pb-2 pt-4">
                <p>付款方式 : 信用卡 / ATM / ApplePay / LinePay</p>
              </div>
              <div class="line2 d-flex justify-content-between align-items-center border-bottom pb-3 pt-3">
                <div className="h6-tc"></div>
                <h6>尚有名額</h6>
              </div>
              <div class="line3 d-flex  justify-content-between align-items-center border-bottom pb-3 pt-3">
                <div className="h6-tc pr-3">數量 </div>
                <div className="pl-3 Ebtn-group d-flex justify-content-between">
                  <button
                    className="Ebtn"
                    onClick={() => {
                      setTotal(total - 1)
                    }}
                  >
                    -
                  </button>
                  <span>{total}</span>
                  <button
                    className="Ebtn"
                    onClick={() => {
                      setTotal(total + 1)
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="line3 d-flex  justify-content-between align-items-center pb-3 pt-3">
                <div className="mt-5">
                  <button class="ebtn-border">我要報名</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h2 className="border-bottom mt17vh">{event.eventName}</h2>
          <div className="photo474">
            <img src="https://picsum.photos/474/339/?random=1" />
          </div>
          <div className="col-9 m-auto p-tc EventDescriptionLineHeight">
            {/* {event.eventDescription}
            猶如在花園中嬉戲，
            <br />
            幻想與心上人漫舞的浪漫少女，
            <br />
            擺放於家中展現溫柔與生氣。 */}
            <div
              className="col-9 m-auto p-tc EventDescriptionLineHeight TextAlignCenter"
              dangerouslySetInnerHTML={{ __html: event.eventDescription }}
            ></div>
          </div>
        </div>
      </div>
      <div className="fluidPhoto">
        <img src={event.eventImg} />
        {/* {console.log(event.eventImg)} */}
      </div>
      <div className="container">
        <div className="row">
          <div className="paper">
            {/* <div className="col-5 NoticeFont">{event.eventNotice}</div> */}
            <div class="eventDetailContent">
              <h4 className="mb-5">活動詳細</h4>
              <div
                className="p-tc   "
                dangerouslySetInnerHTML={{ __html: event.eventDetail }}
              ></div>
              <div
                className="p-tc   "
                dangerouslySetInnerHTML={{ __html: event.eventNotice }}
              ></div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1441.055"
                  height="80.065"
                  viewBox="0 0 1441.055 80.065"
                >
                  <path
                    id="Path_878"
                    data-name="Path 878"
                    d="M860.9,618.985c28.56-23.532,152.83-20.141,188.436-19.11,40.945,1.186,103.98,4.447,143.646-7.179,12.869-3.771,25.324-10.049,33.124-20.529,3-4.036,4.732-9.138,3.4-13.87s-6.3-8.727-11.6-8.254-9.457,6.387-6.858,10.654a21.12,21.12,0,0,0-8.546-7.266c-3.587-1.486-8.159-1.389-11.119.987-3,2.409-3.678,6.615-2.515,10.11s3.854,6.388,6.753,8.9a60.473,60.473,0,0,0,22.028,12.032c45.583,13.754,99.961-2.554,146.5-5.875,57.049-4.071,114.376-5.452,171.613-4.162,181.009,4.079,354.344,54.079,535.224,52.614,56.824-.462,179.653-7.035,229.915-30.262"
                    transform="translate(-860.26 -549.001)"
                    fill="none"
                    stroke="#e64b4b"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(DetailCard)
