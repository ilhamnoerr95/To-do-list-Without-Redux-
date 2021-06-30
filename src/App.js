import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './component/Form';
import TodoLIst from './component/TodoLIst';

function App() {
  //State Stuff
  const [inputText,setInputText] = useState('')
  const [todos, setTodos] = useState ([])
  const [status,setStatus] = useState('all')
  const [filteredTodos, setfilterTodos] = useState([])

  // RUN ONCE WHEN THE APP START
  useEffect(()=>{
    getLocalTodos()
  },[]);

   // USE EFFECT
   useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todos,status]);


  // FUNCTION
  const filterHandler =()=>{
    switch(status){
      case 'completed':
        setfilterTodos(todos.filter((todo)=>
        todo.completed === true));
        break;
      case 'uncompleted':
        setfilterTodos(todos.filter((todo)=>
        todo.completed === false));
        break;
       default: 
        return setfilterTodos(todos);
    } 
  }

// SAVE TO LOCAL
const saveLocalTodos = () => {

    localStorage.setItem("todos", JSON.stringify(todos))
  
};

const getLocalTodos = () =>{
  if(localStorage.getItem("todos") === null){
    localStorage.setItem("todos", JSON.stringify([]))
  } else {
    let todoLocal= JSON.parse(localStorage.getItem('todos'))
    setTodos(todoLocal)
  }
}


  return (
    <div className="App">
        <header>
          <h1>Ilham To Do List</h1>
          </header>
          <Form 
          todos={todos}
          setTodos={setTodos} 
          inputText={inputText} 
          setInputText={setInputText}
          setStatus={setStatus}
          />

          <TodoLIst   
          filteredTodos={filteredTodos}
          todos={todos} 
          setTodos={setTodos}/>
    </div>
  );
}

export default App;
