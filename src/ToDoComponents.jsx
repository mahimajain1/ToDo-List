import React from 'react';
import './App.css';


const ToDoComponents = (props) => {
    return (
        <>
            <div>
                <li id="task-list" className="list-item">
                    {props.text}
                 
                    <button className="close-btn"
                       onClick={() => { props.onSelect(props.id) }}>   X
                    </button>
                </li>
            </div>
        </>
    );

};
export default ToDoComponents;
