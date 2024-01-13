import React from 'react';
import Task from './Task.jsx';

export default function TaskHeader() {
    const date = new Date();
    const dateArray = date.toString().split(' ');

    const [formData, setFormData] = React.useState({
        taskInput : '',
        name: '',

    })
    function handleChange(event) {
        const {name, type,value} = event.target
        setFormData((prevState) => {
            return(
                {...prevState,
                [name]: value}
            )
        })
    }
    const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
   

    function addItem() {
        itemsArray.push(formData);
        localStorage.setItem('items', JSON.stringify(itemsArray));
    }
    console.log(itemsArray);

    const itemsEl = itemsArray.map((item) => {
        return <Task taskValue = {item} />
    })



    return (
    <>
        <section id="task-header">
            <h1> The Great To-Do</h1>
            <h2>Let's get you organized!</h2>
            <h1 id="date">
            {dateArray[0]}, {dateArray[1]} {dateArray[2]} {dateArray[3]}
            </h1>
            <br />
            <input 
            type="text" 
            placeholder="e.g. go to the gym" id="task-input"
            name = 'taskInput'
            onChange = {handleChange}
            value={formData.taskIinput}
            />
            <button id="add-button" onClick={addItem}> ADD TASK</button>

        </section>
        <ul id="task-list">
            {itemsEl}
        </ul>
        </>
    )
}