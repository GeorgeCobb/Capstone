//import logo from './logo.svg';
import React, {useState, useRef} from 'react'
import './App.css';
import TodoList from './TodoList'
//port uuidv8 from 'uuid/v4'

function App() {
  const [todos, setTodos] = useState([])
  const todonameref = useRef()
/*
  function number(){
    if(prevTodos.id === NaN){
      return 1
    }else{
      return prevTodos.id + 1
    }
  }
*/
  function handleAddTodo(e){
    const name = todonameref.current.value
    if(name === '') return
    setTodos(prevTodos =>{
      return[...prevTodos, {id: 1, name: name, complete: false}]
    })
    todonameref.current.value = null
  }


  return (
    <>
    <TodoList todos = {todos}/>
    <input ref = {todonameref}type = "text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button> Clear Todo</button>
    <div> 0 Left to do</div>
    </>
  );
}

export default App;
