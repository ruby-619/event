import React from 'react'

function TodoAddForm(props) {
  const { todoInput, setTodoInput, handleAddNew } = props

  return (
    <>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={handleAddNew}
      />
    </>
  )
}

export default TodoAddForm
