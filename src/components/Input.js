import React, { useState } from 'react'

const Input = () => {
  const [seletedLocation, setseletedLocation] = useState('')
  const [textfield, setTextfield] = useState('')
  const [seletedOption, setSeletedOption] = useState('')
  return (
    <div>
      <div class="container">
        <div class="row">
          {/* <h2>下拉選單</h2> */}
          <div class="eSearchForm">
            <select
              className="eSELECT p-2 bd-highlight"
              value={seletedLocation}
              onChange={(e) => {
                setSeletedOption(e.target.value)
              }}
            >
              <option value="">請選擇地點</option>
              <option value="台北">台北</option>
              <option value="台中">台中</option>
              <option value="台南">台南</option>
              <option value="高雄">高雄</option>
            </select>
            {/* 日期 */}
            {/* <h2>文字輸入框</h2> */}
            <input
              className="eINPUT"
              type="date"
              // value={textfield}
              // onChange={(e) => {
              //   setTextfield(e.target.value)
              // }}
            />
            {/* <h2>文字輸入框</h2> */}
            <input
              className="eINPUT"
              type="text"
              value={textfield}
              placeholder="輸入關鍵字搜尋"
              onChange={(e) => {
                setTextfield(e.target.value)
              }}
            />

            <select
              className="eSELECT toRight"
              value={seletedOption}
              onChange={(e) => {
                setSeletedOption(e.target.value)
              }}
            >
              <option value="">依上架順序</option>
              <option value="台北">由新到舊</option>
              <option value="台中">由舊到新</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Input
