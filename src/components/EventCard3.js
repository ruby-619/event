import React from 'react'
import { BsBookmark } from 'react-icons/bs'

const EventCard3 = () => {
  return (
    <div>
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
          <img src="https://picsum.photos/392/339/?random=1" />
        </div>
        <div class="text3">
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
          <div class="line2 d-flex justify-content-between align-items-center border-bottom pb-2 pt-4">
            <p>付款方式 : 信用卡 / ATM / ApplePay / LinePay</p>
          </div>
          <div class="line2 d-flex justify-content-between align-items-center border-bottom pb-3 pt-3">
            <div className="h6-tc">台北市</div>
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
  )
}

export default EventCard3
