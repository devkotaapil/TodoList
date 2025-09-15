import React from 'react';

function TodoItem({todo, onToggleTodo, onDeleteTodo}){
  return(
    <li>
      <input type="checkbox"
      checked={todo.completed}
      onChange={()=>onToggleTodo(todo.id)}
      className='mr-3 h-5 w-5 text-blue-600 rounded focus:ring-blue-500'
       />
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
      {todo.text}
      </span>
      <button
      onClick={()=>onDeleteTodo(todo.id)}
      className='ml-3 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500'
      >Delete</button>
    </li>
  )

}
export default TodoItem;