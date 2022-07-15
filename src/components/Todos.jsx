import React, { } from 'react';

function Todos({todos, setTodos, setEditTodo}) {
   
    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return{...item, completed: !item.completed};
                }
                return item;
            })
        );
    };
    const handleDelete = ({id}) => {
        setTodos (todos.filter((todo) => todo.id !== id));
    };

        return (
            <div>
               {todos.map ((todo) => (
                   <l1 className="list-item" key={todo.id}>
                       <input className={'list {$}{todo.completed ? "complete" : " " }'} type='text' value={todo.title} onChange={(e) => e.preventDefault()} />
                       <div>

            <button className='button-edit task-button'onClick={() => handleEdit(todo)}>
                <i className='fa fa-edit'></i>
            </button>
            <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                <i className='fa fa-check-circle'></i>
            </button>
            <button className='button-delete task-button' onClick={() => handleDelete (todo)}>
                <i className='fa fa-trash'></i>
            </button>
            </div>
                   </l1>
               ))}
            </div>
        );
    
}
 
export default Todos;