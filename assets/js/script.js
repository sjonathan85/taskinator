var buttonEl = document.querySelector("#save-task");
var TasksToDoEl = document.querySelector("#tasks-to-do");



var createTaskHandler = function() {
    var ListItemEl = document.createElement("li");
    ListItemEl.className = "task-item";
    ListItemEl.textContent= "This is a new task.";
    TasksToDoEl.appendChild(ListItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);
