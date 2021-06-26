import React from 'react'

const ChildB = (props) => {
    return (
        <div>
            <h1>從子女元件a得到的資料{props.parentData}</h1>
        </div>
    )
}

export default ChildB
