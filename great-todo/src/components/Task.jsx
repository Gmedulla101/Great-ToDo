export default function Task({taskValue}) {
    console.log(taskValue)
    return (
        <div class="item">
            <div class="input-controller">
               <textarea className="task-text">  </textarea>
                <div class="edit-controller">
                    <span className="edit"></span>
                    <span className="done"></span>
                    <span className="cancel"></span>
                </div>
            </div>
            <div class="update-controller">
                <button className="saveBtn"> Save </button>
                <button className="cancelBtn"> Cancel </button>

            </div>
        </div>

    )
}