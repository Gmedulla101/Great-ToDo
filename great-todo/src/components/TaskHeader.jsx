import React from 'react';
import Task from './Task.jsx';
import TaskForm from './TaskForm.jsx';
import dateStringArray from './Date.jsx';
import {useState,useEffect} from 'react';



export default function TaskHeader() {

    const [tasks, setTasks] = useState([])

    function addTasks(task) {
        setTasks((prevTasks) => {
            return [
                ...prevTasks,
                {
                    taskInput: task,
                    id: prevTasks.length,
                    isCompleted: false,
                    isEditing: true
                }
            ]
        })
    }

    function deleteTask(id) {
        setTasks(tasks.filter((task) => {
            return task.id !== id
        }))
    }

    function toggleComplete(id) {
        setTasks(tasks.map((task) => {
            if(task.id === id) {
                return {
                    ...task,
                    isComplete: !task.isComplete
                }
            } else {
                return task
            }
        }))
    }


  

    console.log(tasks)

    const tasksEl = tasks.map((task, i) => {
        return <Task 
        taskData = {task} 
        key = {task.id} 
        deleteTask={deleteTask} 
        toggleComplete = {toggleComplete}
        isEditing = {task.isEditing}
        />
    })
 
    //COMPONENT JSX
        return (
        <>
            <section id="task-header">
                <h1> The Great To-Do</h1>
                <h2>Let's get you organized!</h2>
                <h1 id="date">
                    {`${dateStringArray[0]}, ${dateStringArray[1]} ${dateStringArray[2]} ${dateStringArray[3]}`}
                </h1>
                <br />
                <TaskForm addTasks = {addTasks} />
            </section>
            <ul id="task-list">
               {tasksEl}
            </ul>
        </>
    )
}