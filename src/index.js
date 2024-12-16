document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

 
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    
    const taskInput = document.getElementById("new-task-description");
    const priority = document.getElementById("priority").value;
    const taskText = taskInput.value.trim();

    if (taskText) {
      addTaskToDOM(taskText, priority);
      taskInput.value = "";}
  });

  
  function addTaskToDOM(task, priority) {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;

 
    if (priority === "high") taskItem.style.color = "red";
    else if (priority === "medium") taskItem.style.color = "orange";
    else taskItem.style.color = "green";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", () => taskItem.remove());

    
    taskItem.appendChild(deleteButton);

  
    taskList.appendChild(taskItem);
  }
});

