import React, { useState } from 'react'

const Input = () => {
  const [seletedLocation, setseletedLocation] = useState('')
  const [textfield, setTextfield] = useState('')
  const [seletedOption, setSeletedOption] = useState('')
  let Location = [
    '台北',
    '新北',
    '桃園',
    '新竹',
    '台中',
    '台南',
    '宜蘭',
    '花蓮',
    '台東',
  ]
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
              {Location.map((v) => {
                return (
                  <>
                    <option value="{v}">{v}</option>
                  </>
                )
              })}
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
              <option value="由新到舊">由新到舊</option>
              <option value="由舊到新">由舊到新</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Input
