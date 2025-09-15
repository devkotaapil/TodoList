import {useState} from 'react';
import TodoList from  './components/TodoList'
import AddTodo from './components/AddTodo';

function App(){
  const [todos,setTodos] = useState([]);


  const addTodo = (text) =>{
    const newTodo = {id:Date.now(), text, completed:false};
    setTodos([...todos, newTodo]);
  }

  const toggleTodo = (id) =>{
      setTodos(todos.map(todo=>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      ));
  }
  const deleteTodo = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id));
  };
 
  return(
    <div className='min-h-screen bg-gray-100 py-8'>
      <div className='max-w-md mx-auto bg-white rounded-lg shadow-md p-6'>
        <h1 className='text-2xl font-bold text-center mb-6 text-gray-800'>My Todo List</h1>
        <AddTodo onAddTodo={addTodo}/>
        <TodoList todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo}/>
      </div>
    </div>

    
  )
}

export default App;