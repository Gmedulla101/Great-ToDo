export default function Task({taskData, isEditing, deleteTask, toggleComplete}) {
    console.log(taskData);


    return (
        <div className="item">
            <div className="input-controller">
                
               <textarea className= {`task-text ${taskData.isComplete ? 'completed' : ''}`} value={taskData.taskInput} disabled = {isEditing ? 'false' : 'true'}>  </textarea>

                {/* EDIT CONTROLLER FOR TOGGLING TASK STATE */}
                <div className="edit-controller">
                    <span className="edit"></span>
                    <span className="done" onClick={() => {toggleComplete(taskData.id)}}></span>
                    <span className="cancel" onClick={() => {deleteTask(taskData.id)}}></span>
                </div>
            </div>

            {/* UPDATE CONTROLLER FOR EDITN THE TASKS */}
            <div className="update-controller">
                <button className="saveBtn"> Save </button>
                <button className="cancelBtn"> Cancel </button>
            </div>
        </div>

    )
}