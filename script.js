const addNew = document.getElementById("add-new-button");
const showCompleted = document.getElementById("show-completed-button");
const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list");

let listPending = [];
let listCompleted = [];

const createNewListItem = () => {
  let taskName = prompt("Enter Task Name: ");
  createTask(taskName);
  // document.pendingList.createElement("div").append(taskName);
  // let taskDescription = prompt("Enter Task Description: ");
};

addNew.addEventListener("click", () => {
  createNewListItem();
});

// function customElement(tag, text, attributes) {
//   const listItemEl = document.createElement(tag);
//   const listItemText = document.createTextNode(text);

//   listItemEl.appendChild(listItemText);

//   for (let prop in attributes) {
//     listItemEl.setAttribute(prop, attributes[prop]);
//   }

//   return listItemEl;
// }

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
      // item.style.display = "none";
    };
  }
}

createTask("Do Dishes");
createTask("Take Out Trash");
createTask("Fold Laundry");

// let delButtons = document.getElementsByClassName("delete-item");
// for (let listItem of delButtons) {
//   listItem.onclick = function () {
//     let item = this.parentElement;
//     // completedList.appendChild(item);
//     item.style.display = "none";
//   };
// }

// let completeButtons = document.getElementsByClassName("mark-complete");
// for (let listItem of completeButtons) {
//   listItem.onclick = function () {
//     let item = this.parentElement;
//     completedList.appendChild(item);
//     // item.style.display = "none";
//   };
// }

// function displayCompleted() {}

// const delItemBtn = document.createElement("button");
// const listItemEl = document.createElement("div");
// const listItemText = document.createTextNode("Do Dishes");

// let attributes = {
//   id: "item",
//   style: `height:25px; width: 25px; border-radius:5px; padding-left:10px;`,
// };
// for (let prop in attributes) {
//   delItemBtn.setAttribute(prop, attributes[prop]);
// }

// attributes = {
//   id: "item1",
//   style: `height: 50px;
//   width: 500px;
//   border: 1px solid gray;
//   border-radius: 5px;
//   color: black;
//   font-size: medium;
//   display:flex;
//   align-items:center;
//   padding-left: 30px;
//   padding-right: 10px;`,
// };

// listItemEl.appendChild(listItemText);

// for (let prop in attributes) {
//   listItemEl.setAttribute(prop, attributes[prop]);
// }

// listItemEl.appendChild(delItemBtn);

// console.log(listItemEl);

// let listOfTasks = [];

// listOfTasks.push(listItemEl);
// listOfTasks.push(listItemEl);

// console.log(listOfTasks);

// for (let el of listOfTasks) {
//   render(el, pendingList);
// }

// render(listItemEl, pendingList);

// ---------------------------------------------------

// render(listItemEl, pendingList);

// console.log(delItemBtn);

// function customElement2(tag, text, attributes, el) {
//   const listItemEl = el.createElement(tag);
//   const listItemText = el.createTextNode(text);

//   listItemEl.appendChild(listItemText);

//   for (let prop in attributes) {
//     listItemEl.setAttribute(prop, attributes[prop]);
//   }

//   return listItemEl;
// }
// let toDoItem = customElement("div", "Do Dishes", {
//   style: `height: 50px;
// width: 500px;
// border: 1px solid gray;
// border-radius: 5px;
// color: black;
// font-size: medium;
// display:flex;
// align-items:center;
// padding-left: 30px`,
// });

// let deleteBtn = customElement2(
//   "button",
//   "",
//   {
//     style: `height:25px; width: 25px; border-radius:5px;`,
//   },
//   toDoItem
// );

// render(toDoItem.appendChild(deleteBtn), pendingList);

// --------------------------------------------------------------------------

// function customHeader(size, text, attributes) {
//   const headingEl = document.createElement(`h${size}`);
//   const headingTextNode = document.createTextNode(text);

//   headingEl.appendChild(headingTextNode);

//   for (let prop in attributes) {
//     headingEl.setAttribute(prop, attributes[prop]);
//   }

//   return headingEl;

//   // return document.createElement(`h${size}`).append(text);
// }

// function render(el, domNode) {
//   return domNode.appendChild(el);
// }

// let mainSubHeader = customHeader(5, "Do the Dishes", {
//   // id: "root-header",
//   // class: "heading-5",
//   style: `height: 50px;
//   width: 500px;
//   border: 1px solid gray;
//   border-radius: 5px;
//   color: black;
//   font-size: medium;
//   display:flex;
//   align-items:center;
//   padding-left: 30px`,
// });
// // mainSubHeader.id = "";
// // mainSubHeader.style.color
// render(mainSubHeader, pendingList);

// mainSubHeader = customHeader(5, "Water Plants", {
//   // id: "root-header",
//   // class: "heading-5",
//   style: `height: 50px;
//   width: 500px;
//   border: 1px solid gray;
//   border-radius: 5px;
//   color: black;
//   font-size: medium;
//   display:flex;
//   align-items:center;
//   padding-left: 30px`,
// });

// render(mainSubHeader, pendingList);

// -----------------------------------------------------
