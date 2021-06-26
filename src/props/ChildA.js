import React, { useState } from 'react'

function ChildA(props) {
  const [childAData, setChildAData] = useState('ChildA Data')

  return (
    <>
      <h1>This is ChildA</h1>

      {/* 利用click事件觸發 callbackfunction
      將子女資料傳送到父母元件 */}
      <button
        onClick={() => {
          props.setParentData(childAData)
        }}
      >
        送資料給父母(Parent)元件
      </button>
    </>
  )
}

export default ChildA
