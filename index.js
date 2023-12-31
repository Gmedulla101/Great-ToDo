const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

console.log(itemsArray);

function displayDate() {
    /* JS FOR THE DATE SECTION OF THE APP */
    const dateBar = document.querySelector('#date');
    let date = new Date();
    date = date.toString();
    date = date.split(" ");
    date = date[0] + ", " + date[1] + " " + date[2] + " " + date[3];
    dateBar.innerHTML = date;
}

//JS FOR THE BUTTONS
const addBtn = document.querySelector("#add-button");
addBtn.addEventListener('click', () => {
    const item = document.querySelector("#task-input");
    createItem(item);
});
const taskInput = document.querySelector("#task-input");
taskInput.addEventListener('keypress', (event) => {
    if(event.key === "Enter") {
        createItem(taskInput);
    };
});


//CREATING AND DISPLAYING TASKS
function createItem(item) {
    itemsArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}

function displayItems() {
    let items = '';
    for(let i = 0; i < itemsArray.length; i++){
     items +=   `
     <div class="item">
         <div class="input-controller">
            <textarea class="task-text" disabled> ${itemsArray[i]} </textarea>
             <div class="edit-controller">
                <span class="done"></span>
                 <span class="edit"></span>
                 <span class="cancel"></span>
             </div>
         </div>
         <div class="update-controller">
             <button class="saveBtn"> Save </button>
             <button class="cancelBtn"> Cancel </button>

         </div>
     </div>`
    };

    const taskList = document.querySelector("#task-list");
    taskList.innerHTML = items;
    activateDeleteListeners();
    activateEditListeners();
    activateSaveListeners();
    activateCancelListeners();
    activateMarkedListeners();
}

function activateDeleteListeners(){
    const cancelBtn = document.querySelectorAll(".cancel");
    cancelBtn.forEach((button, i) => {
        button.addEventListener('click', (event )=> {
            deleteItem(i);
        });
    });
};
function deleteItem(i) {
    itemsArray.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}

function activateEditListeners() {
    const editBtn = document.querySelectorAll(".edit");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".task-text");
    editBtn.forEach((ed, i) => {
        ed.addEventListener('click', (event) => {
            updateController[i].style.display = "flex";
            inputs[i].disabled = false;
            inputs[i].style.backgroundColor = "white";
            inputs[i].style.color = "black";
        });
    });
}

function activateSaveListeners() {
    const saveBtn = document.querySelectorAll(".saveBtn");
    const taskInputs = document.querySelectorAll(".task-text");
    saveBtn.forEach((save, i) => {
        save.addEventListener("click", (event) => {
            updateInput(taskInputs[i].value, i)
        })
    })
};
function updateInput(text, i) {
    itemsArray[i] = text;
    localStorage.setItem('items', JSON.stringify(itemsArray));
    location.reload();
};

function activateCancelListeners() {
    const cancelBtn = document.querySelectorAll('.cancelBtn');
    const input = document.querySelectorAll(".task-text");
    const updateController = document.querySelectorAll('.update-controller');
    cancelBtn.forEach((cancel, i) => {
        cancel.addEventListener('click', (event) => {
            updateController[i].style.display = "none";
            input[i].disabled = true;
            input[i].style.backgroundColor = "rgb(230, 161, 173)";
            input[i].style.color = "white";
        })
    })
}

function activateMarkedListeners() {
    const doneBtn = document.querySelectorAll(".done");
    const input = document.querySelectorAll('.task-text');
    doneBtn.forEach((done, i) => {
        done.addEventListener('click', (event) => {
            if(input[i].style.textDecoration === "none") {
                input[i].style.textDecoration = "line-through";
            } else {
                input[i].style.textDecoration = "none";
            }
        })
    })
}
/* function editItem(i) {
    const tasks = document.querySelectorAll(".task-text");
    tasks.forEach((task) =>{
        if ( task.disabled = true) {
            task.disabled = false;
            task.style.backgroundColor = "white";
            task.style.color = "black";
        } else if(task.disabled = false){
            task.disabled;
            task.style.backgroundColor = "rgb(230, 161, 173)";
            task.style.color = "white";
        }
    })
} */




window.onload = function (){
    displayDate();
    displayItems();
}




