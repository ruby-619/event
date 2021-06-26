import React from 'react'

function SortBar(props) {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="btn-group">
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>預設排序 - 以ID排序</option>
              <option value="2">以價格排序-由少至多</option>
              <option value="2">以價格排序-由多至少</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default SortBar
