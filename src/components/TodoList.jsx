import React from 'react'
import TodoItem from './TodoItem';

function TodoList({todos, onToggleTodo, onDeleteTodo}){
  if(todos.length === 0){
    return <p className='text-center text-gray-500 mt-4'>No todos yet. Add one!</p>
  }

  return(
    <ul className='space-y-2'>
      {todos.map(todo =>(
        <TodoItem 
        key={todo.id}
        todo={todo}
        onToggleTodo={onToggleTodo}
        onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList;