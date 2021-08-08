import React, { useState } from 'react';
import ToDoComponents from './ToDoComponents';
import './App.css'

const ToDo = () => {
    const [inputList, setInputlist] = useState([]);
    const [items, setItems] = useState('');

    const inputEvent = (event) => 
    {
        setItems(event.target.value);
    };
    const onClick = () =>
    {
        setInputlist((oldValue) => {
            return [...oldValue, items];
        });
        setItems('');

        document.getElementById('id').value = '';
    };

    const deleteItems = (id) => 
    {
        console.log('Deleted');
        setInputlist((oldValue) => {
            return oldValue.filter((value, index) => {
                return index !== id;
            });

        });
    };

    return (
        <>
            <div class='to-do'>
                <h1>To-Do List </h1>
                <div class='input'>
                    <input type='text' id='id'
                        placeholder='What to do??' onChange={inputEvent}
                        class="input"
                    ></input>
                    <button onClick={onClick} >Add Task</button>
                </div >
                <div class='task' >
                    <ol>{
                        inputList.map((itemval, index) => {
                            return (
                                <ToDoComponents
                                    key={index}
                                    id={index}
                                    text={itemval}
                                    onSelect={deleteItems} />
                                );
                        })

                    }
                    </ol>
                </div>
            </div>
        </>
    )

}
export default ToDo;