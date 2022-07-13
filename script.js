const addNew = document.getElementById("add-new-button");
const showCompleted = document.getElementById("show-completed-button");
const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list");

let listPending = [];
let listCompleted = [];

const createNewListItem = () => {
  let taskName = prompt("Enter Task Name: ");
  createTask(taskName);
};

addNew.addEventListener("click", () => {
  createNewListItem();
});

function createTask(text) {
  const completeBtn = document.createElement("button");
  const completeIcon = document.createTextNode("✓");
  completeBtn.appendChild(completeIcon);
  completeBtn.className = "mark-complete";

  const delItemBtn = document.createElement("button");
  const delItemIcon = document.createTextNode("X");
  delItemBtn.appendChild(delItemIcon);
  delItemBtn.className = "delete-item";

  const listItemEl = document.createElement("div");
  const listItemText = document.createTextNode(text);
  listItemEl.className = "list-item";

  listItemEl.appendChild(completeBtn);
  listItemEl.appendChild(delItemBtn);
  listItemEl.appendChild(listItemText);

  pendingList.appendChild(listItemEl);

  let delButtons = document.getElementsByClassName("delete-item");
  for (let listItem of delButtons) {
    listItem.onclick = function () {
      let item = this.parentElement;
      item.style.display = "none";
    };
  }

  let completeButtons = document.getElementsByClassName("mark-complete");
  for (let listItem of completeButtons) {
    listItem.onclick = function () {
      let item = this.parentElement;
      completedList.appendChild(item);
    };
  }
}

createTask("Do Dishes");
createTask("Take Out Trash");
createTask("Fold Laundry");
