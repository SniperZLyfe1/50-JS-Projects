const listInput = document.getElementById("left-input");
const todoInput = document.getElementById("right-input");
const listTaskContainer = document.querySelector(".list-task-info");
const todoTaskContainer = document.querySelector(".todo-list");
const clearListBtn = document.querySelector(".clear-list");
const clearTaskBtn = document.querySelector(".clear-completed");
const todoContainer = document.querySelector(".todo-info-container");
const todoTitle = document.querySelector(".todo-title");
const todoRemaining = document.querySelector(".remain");

listInput.addEventListener("keyup", (e) => {
  const value = e.target.value;
  if (value === "") return;
  if (e.key === "Enter") {
    createList(value, "list-task", listTaskContainer);
    listInput.value = "";
    addActiveToList();
  }
});

todoInput.addEventListener("keyup", (e) => {
  const value = e.target.value;
  if (value === "") return;
  if (e.key === "Enter") {
    createTodo(value);
    todoInput.value = "";
    test();
  }
});

function createList(value, className, container) {
  const li = document.createElement("li");
  li.innerHTML = value;
  li.classList.add(className);
  container.appendChild(li);
  todoTaskContainer.innerHTML += `<ul class='todo-task-info-${value} todos'></ul>`;
}

function createTodo(value) {
  let getName = "";
  document.querySelectorAll(".list-task").forEach((task) => {
    if (task.classList.contains("active")) {
      getName = `.todo-task-info-${task.innerHTML}`;
    }
  });
  const containerName = document.querySelector(getName);
  const li = document.createElement("li");
  li.innerHTML = value;
  containerName.appendChild(li);
  todoRemaining.innerHTML = containerName.querySelectorAll(
    "li:not(.marked)"
  ).length;
}

addActiveToList();

function addActiveToList() {
  document.querySelectorAll(".list-task").forEach((task) => {
    task.addEventListener("click", () => {
      removeListActive();
      task.classList.add("active");
      showTodoContainerInfo();
    });
  });
}

function showTodoContainerInfo() {
  todoContainer.classList.remove("none");
  let name = "";
  document.querySelectorAll(".list-task").forEach((task) => {
    if (task.classList.contains("active")) {
      name = task.innerHTML;
    }
  });
  document.querySelector(`.todo-task-info-${name}`).classList.remove("none");
  todoTitle.innerHTML = name;
  todoRemaining.innerHTML = document
    .querySelector(`.todo-task-info-${name}`)
    .querySelectorAll("li:not(.marked)").length;
}

function removeListActive() {
  document.querySelectorAll(".list-task").forEach((task) => {
    task.classList.remove("active");
  });
  document.querySelectorAll(".todos").forEach((todo) => {
    todo.classList.add("none");
  });
}

clearListBtn.addEventListener("click", () => {
  document.querySelectorAll(".list-task").forEach((task) => {
    if (task.classList.contains("active")) {
      task.remove();
      document.querySelector(`.todo-task-info-${task.innerHTML}`).remove();
      todoContainer.classList.add("none");
    }
  });
});

function test() {
  const name = document.querySelector(`.todo-task-info-${todoTitle.innerHTML}`);
  name.querySelectorAll("li").forEach((v) => {
    v.addEventListener("click", () => {
      v.classList.add("marked");
      todoRemaining.innerHTML = name.querySelectorAll("li:not(.marked)").length;
    });
  });
}

clearTaskBtn.addEventListener("click", () => {
  document.querySelectorAll(".marked").forEach((v) => {
    v.remove();
  });
});
