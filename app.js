function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  let id = 0;

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    newToDoText.value = '';
    id = id + 1;

    renderTheUI();
  }

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('button');

      newLi.textContent = toDo.title;
      checkbox.type = "checkbox";
      deleteButton.textContent = "delete";

      deleteButton.addEventListener('click', () => {
        toDos = toDos.filter(function(item) {
          return item.id != toDo.id;
        });
    
        renderTheUI();
      });

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}



window.onload = function() {
  onReady();
};
