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

const addBtn = document.querySelector("#add-button");
addBtn.addEventListener('click', () => {
    const item = document.querySelector("#task-input");
    createItem(item);
});

function createItem(item) {
    itemsArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}

function displayItems() {
    let items = '';
    for(let i = 0; i < itemsArray.length; i++){
     items +=   `<div class="item">
                <div class="input-controller">
                    <div class="edit-controller">
                        <span class="done"></span>
                        <span class="edit"></span>
                        <span class="cancel"></span>
                    </div>
                    <textarea> ${itemsArray[i]} </textarea>
        </div>`
    }

    const taskList = document.querySelector("#task-list");
    taskList.innerHTML = items
}




window.onload = function (){
    displayDate();
    displayItems();
}




