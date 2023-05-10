"use strict";
const form = document.getElementById("form");
let input = document.getElementById("input");
const todoUL = document.getElementById("todos");
const deletedTodo = document.getElementById("deleted_todo");
const todoEl = document.getElementById("edit");
const edit_button = document.getElementById("edit-button");
const end_button = document.getElementById("end-editing");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  let todoText = input.value;

  if (todoText) {
    const todoEl = document.createElement("li");

    todoEl.textContent = todoText;
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
    });
    // todoEl.addEventListener("contextmenu", (e) => {
    //   e.preventDefault();
    //   todoEl.remove();

    // });
    const del = document.createElement("i");
    del.classList.add("fa-solid");
    del.classList.add("fa-minus");

    todoEl.appendChild(del);
    del.addEventListener("click", () => {
      todoEl.remove();
    });

    const edit = document.createElement("i");
    edit.classList.add("fa-regular");
    edit.classList.add("fa-pen-to-square");

    todoEl.appendChild(edit);
    edit.addEventListener("click", () => {
      todoEl.contentEditable = true;
      todoEl.style.backgroundColor = "#dddbdb";
      del.remove();
      edit.remove();
      const done = document.createElement("i");
      done.classList.add("fa-solid");
      done.classList.add("fa-check");
      todoEl.appendChild(done);

      done.addEventListener("click", () => {
        todoEl.contentEditable = false;
        todoEl.style.backgroundColor = "#ffffff";
        done.replaceWith(del, edit);
      });
    });

    todoUL.insertAdjacentElement("afterbegin", todoEl);
    input.value = "";
  }
}
