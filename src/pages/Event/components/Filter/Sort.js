import React from 'react'

function Sort(props) {
  const { sortBy, setSortBy } = props
  return (
    <>
      <select
        className="eSELECT toRight"
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value)
        }}
      >
        <option value="">依上架順序</option>
        <option value="1">由新到舊</option>
        <option value="2">由舊到新</option>
      </select>
    </>
  )
}

export default Sort
