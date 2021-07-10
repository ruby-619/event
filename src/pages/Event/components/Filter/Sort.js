import React from 'react'

function Sort(props) {
  const { sortBy, setSortBy } = props
  return (
    <>
      <select
        className="eSELECT "
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value)
        }}
      >
        <option value="">依活動價格</option>
        <option value="1">由低到高</option>
        <option value="2">由高到低</option>
      </select>
    </>
  )
}

export default Sort
