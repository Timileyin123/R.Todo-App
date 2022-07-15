import React, {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

function Form({input, setInput, todos, setTodos, editTodo, setEditTodo,}){ 

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map ((todo) => 
            todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };
    
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else{
            setInput("");
        }
    }, [setInput, editTodo]);

    const onInputChange = (e) => {
         e.preventDefault();
        setInput (e.target.value);
    };
    const onDeleteChange = (e) => {
        setInput (e.target.value);
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
        setInput("");
        } else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    };
        return (
            <form onSubmit={onSubmitForm}>
            <input className='task-input' type='text' placeholder='Enter a Todo...' value={input} onChange={onInputChange} required/>
                
                <button className='button-add' type='submit'>{editTodo ? "OK" : "ADD"}</button>
            
            <button className='button-del' type='delete' onChange={onDeleteChange}>DELETE ALL</button>
        
            </form>
            
    );
    
}
 
export default Form;