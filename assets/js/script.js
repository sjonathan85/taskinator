var formEl = document.querySelector("#task-form");
var TasksToDoEl = document.querySelector("#tasks-to-do");



var createTaskHandler = function() {

    event.preventDefault();

    var ListItemEl = document.createElement("li");
    ListItemEl.className = "task-item";
    ListItemEl.textContent= "This is a new task.";
    TasksToDoEl.appendChild(ListItemEl);

};

formEl.addEventListener("submit", createTaskHandler);
