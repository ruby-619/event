import React from 'react'

const Search = () => {
  return (
    <div class="container">
      <div class="row">
        <div className="eSearch">
          <form className="search">
            <input class="search-input" type="text" placeholder="Search" />
            <button class="search-button" href="#">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
