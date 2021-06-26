import React from 'react'

function TodoList(props) {
  const { todos, handleCompleted, handleDelete } = props

  return (
    <>
      <ul>
        {todos.map((todoItem, i) => {
          return (
            <li key={todoItem.id}>
              <input
                type="checkbox"
                checked={todoItem.completed}
                onChange={() => {
                  handleCompleted(todoItem.id)
                }}
              />
              {todoItem.completed ? <del>{todoItem.text}</del> : todoItem.text}
              <button
                onClick={() => {
                  handleDelete(todoItem.id)
                }}
              >
                刪除
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
