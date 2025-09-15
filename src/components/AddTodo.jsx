import React from 'react'
import {useState} from 'react';

function AddTodo({onAddTodo}){
  const [input, setInput] = useState('');
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(input.trim()){
      onAddTodo(input);
      setInput('');
    }
  };

  return(
    <form onSubmit={handleSubmit} className='mb-6' >
      <div className='flex'>
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}
        placeholder='Add new todo...' 
        className='bg-gray-300 flex-1 p-2 rounded-1-md focus:outline-none focus:ring-2 focus:ring-blue-500 ' />
        <button
        type='sumbit' 
        className=' px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-400 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400'
        >Add</button>
      </div>
    </form>
  )

}

export default AddTodo;