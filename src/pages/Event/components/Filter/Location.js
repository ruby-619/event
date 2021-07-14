import React, { useState } from 'react'

const Location = (props) => {
  const { seletedLocation, setseletedLocation } = props
  // let Location = [
  //   '台北',
  //   '新北',
  //   '桃園',
  //   '新竹',
  //   '台中',
  //   '台南',
  //   '宜蘭',
  //   '花蓮',
  //   '台東',
  // ]
  return (
    <div>
      {/* <select
        className="eSELECT p-2 bd-highlight"
        value={seletedLocation}
        onChange={(e) => {
          setseletedLocation(e.target.value)
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
      </select> */}
      <select
        className="eSELECT p-2 bd-highlight"
        value={seletedLocation}
        onChange={(e) => {
          setseletedLocation(e.target.value)
        }}
      >
        <option value="">請選擇地點</option>
        <option value="1">台北市</option>
        <option value="2">桃園市</option>
        <option value="3">新竹市</option>
        <option value="4">台中市</option>
        <option value="5">台南市</option>
        <option value="6">高雄市</option>
        <option value="7">宜蘭縣</option>

      </select>
    </div>
  )
}

export default Location
