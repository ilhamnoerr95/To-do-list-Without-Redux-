import React from 'react';

function Form(props) {
const {setInputText, inputText,
    todos,setTodos
,setStatus} = props

    const inputTextHandler = (e) =>{
        // console.log(e.target.value)
        setInputText(e.target.value)
    }   

    const submitTodoHandler = (e)=>{
         e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id:Math.random()* 100}
        ])
        setInputText("")
    }

    const statusHandler = (e) =>{
        console.log(e.target.value)
        setStatus(e.target.value)
    }
    return (
            <form>
                <input 
                type="text" 
                value={inputText} 
                className="todo-input" 
                onChange={inputTextHandler}/>

                <button 
                onClick={submitTodoHandler}                className="todo-button" 
                type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>

                <div className="select">
                    <select onChange={statusHandler} nameName="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>

        
    )
}

export default Form
