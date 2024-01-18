import React, {useState} from 'react';

export default function TaskForm({addTasks}) {
    const [input, setInput] = useState('');

    function handleChange(event) {
        const {name, value} = event.target;
        setInput(value);
    }

    function handleButtonClick(event) {
        event.preventDefault();
        addTasks(input);
        setInput('');
    }

   
    return (
        <form>
            <input 
            type="text" 
            placeholder="e.g. go to the gym" id="task-input"
            name = 'taskInput'
            onChange={handleChange}
            value={input}
            />
            <button id="add-button" onClick = {handleButtonClick}> ADD TASK</button>
        </form>
    )
}