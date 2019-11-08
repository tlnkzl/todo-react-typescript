import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddTodoFormProps {
    addTodo: AddTodo; 
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setnewTodo] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setnewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setnewTodo('');
    }

    return (
        <form>
            <input type="text" value={newTodo} onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>
                Add Todo
            </button>
        </form>
    );
};