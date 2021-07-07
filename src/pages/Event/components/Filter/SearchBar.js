import React from 'react'

function SearchBar(props) {
  const { searchWord, setSearchWord } = props
  return (
    <>
      <div>
        <input
          className="eINPUT"
          type="text"
          value={searchWord}
          placeholder="輸入關鍵字搜尋"
          onChange={(e) => {
            setSearchWord(e.target.value)
          }}
        />
      </div>
    </>
  )
}

export default SearchBar
