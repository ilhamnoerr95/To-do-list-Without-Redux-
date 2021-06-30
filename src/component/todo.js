import React from 'react'

function todo(props) {
  const {textTodo,todo,
    todosFile,setTodosFile} = props

    const deleteHandler = ()=>{
        // KALO PAKE "===" HANYA INGIN FILTER BERDASARKAN ID YG SAMA
        // KALO PAKE "!==" HILANGKAN ID/FILTER ID YG TIDAK ADA "DIANYA = ID TERSEBUT"
        setTodosFile(todosFile.filter(todoFile => todoFile.id !== todo.id))
        console.log(todo)
        
    }

    const completeHanlder = ()=>{
        setTodosFile(todosFile.map((item)=>{
            if(item.id === todo.id){
                return {
                    ...item ,
                    // KONDISI TRUE  diupdate
                    completed: !item.completed
                }
            }
            return item
        })
        );
    }

    return (
            <div className="todo">
                <li className={`todo-item ${todo.completed ? "completed": ""}`}>{textTodo}</li>
                <button onClick={completeHanlder} className='complete-btn'>
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className='trash-btn'>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
    )
}

export default todo;
