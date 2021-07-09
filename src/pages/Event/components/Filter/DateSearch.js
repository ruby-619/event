import React from 'react'

function DateSearch(props) {
  const { dateSearch, setdateSearch } = props
  return (
    <>
      <div>
        <input
          type="date"
          className="eINPUT"
          placeholder="以日期搜尋"
          value={dateSearch}
          onChange={(e) => setdateSearch(e.target.value)}
        />
      </div>
    </>
  )
}

export default DateSearch
