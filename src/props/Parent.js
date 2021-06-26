import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  // inner state
  const [parentData, setParentData] = useState('Parent Data')

  return (
    <>
      <ChildA setParentData={setParentData} />

      {/* 子女b是直接從父母得到資料 */}
      <ChildB parentData={parentData} />
      <p>目前Parent資料：{parentData}</p>
    </>
  )
}

export default Parent
