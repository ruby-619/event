import React from 'react'
import PropTypes from 'prop-types'

function MyButton(props) {
  //console.log(props)
  // 先解出props中的屬性和對應名稱
  const { setTotal, total, value } = props

  return (
    <>
      <button
        onClick={() => {
          setTotal(total + value)
        }}
      >
        {value > 0 && '+'}
        {value}
      </button>
    </>
  )
}

MyButton.propTypes = {
  value: PropTypes.number,
}

MyButton.defaultProps = {
  value: 9999999,
}




export default MyButton
