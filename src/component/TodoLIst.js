import React from 'react';
import Todo from './todo';

function TodoLIst(props) {
    const {todos,setTodos
    ,filteredTodos} = props
    console.log("todos",todos)
    console.log("filter",filteredTodos)
    return (
        <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map((todoAlias)=>{
                        return <Todo 
                        setTodosFile={setTodos}
                        todosFile={todos}
                        key={todoAlias.id}
                        todo={todoAlias}
                        textTodo={todoAlias.text}/>
                    })}
                </ul>
        </div>
    
    )
}

export default TodoLIst
