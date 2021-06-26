import React from 'react'

function FilterBar(props) {
  return (
    <>
      <h2 className="grid-title">
        <i className="fa fa-filter"></i> 過濾
      </h2>
      <button className="btn btn-success">重設</button>
      <hr />
      <h4>依標籤</h4>
      <div className="checkbox">
        <label>
          <input type="checkbox" className="icheck" /> 大螢幕
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" className="icheck" /> 小螢幕
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" className="icheck" /> 蘋果
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" className="icheck" /> 安卓
        </label>
      </div>
      <div className="padding"></div>
    </>
  )
}

export default FilterBar
