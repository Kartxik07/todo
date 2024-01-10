function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var tasksList = document.getElementById("tasks");

        var taskElement = document.createElement("li");
        taskElement.className = "task";
        taskElement.innerHTML = taskText + '<button onclick="removeTask(this)">Remove</button>';

        tasksList.appendChild(taskElement);

        taskInput.value = "";
    }
}

function removeTask(button) {
    var taskElement = button.parentElement;
    taskElement.remove();
}

function clearTasks() {
    var tasksList = document.getElementById("tasks");
    tasksList.innerHTML = "";
}
