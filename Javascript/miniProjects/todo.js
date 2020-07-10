/**
 * Css to be Done
 */

//Declaration
const newTask = document.querySelector("#input-Text");
const addTaskBtn = document.querySelector(".addTaskBtn");
const removeTotalBtn = document.querySelector(".removeTotalBtn");
const taskList = document.querySelector("#lists");
const taskTemplate = document.querySelector("#taskTemplate");
let a = 1;

console.log(newTask);
//Oparation

newTask.addEventListener("keyup", (e) => {
  if (e.keyCode == 13 && inputValidate()) {
    addTask();
  }
});

addTaskBtn.addEventListener("click", () => {
  if (inputValidate()) {
    addTask();
  }
});

removeTotalBtn.addEventListener("click", () => {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    const checked = task.querySelector("input").checked;
    if (checked) {
      task.remove();
    }
  });
});

const addTask = () => {
  const taskElement = document.importNode(taskTemplate.content, true);
  const checkBox = taskElement.querySelector("input");
  checkBox.id = a;
  const label = taskElement.querySelector("label");
  label.htmlFor = a;
  label.append(newTask.value);
  taskList.appendChild(taskElement);
  newTask.value = "";
  a++;
};
const inputValidate = () => {
  return newTask.value !== "";
};
