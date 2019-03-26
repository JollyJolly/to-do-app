function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit',() => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create MDL list item primary content span
    let contentSpan = document.createElement('span');
    // set the title
    contentSpan.textContent = title
    // set class of the content span
    contentSpan.setAttribute('class', 'mdl-list__item-primary-content');

    // Create MDL style checkbox inside an action span
    let actionSpan = document.createElement('span');
    let checkboxLabel = document.createElement('label');
    let checkbox = document.createElement('input');
    actionSpan.appendChild(checkboxLabel);
    actionSpan.setAttribute('class', 'mdl-list__item-secondary-action');
    checkboxLabel.appendChild(checkbox);
    checkboxLabel.setAttribute('class', 'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect');
    checkbox.type = "checkbox";
    checkbox.setAttribute('class', 'mdl-checkbox__input');

    // create a delete button
    let deleteButton = document.createElement('button')
    // set delete button text
    deleteButton.textContent = "Delete";
    // set delete button class
    deleteButton.setAttribute('class', 'mdl-button mdl-js-button mdl-button--raised');
    // set delete button action
    deleteButton.addEventListener('click',() => {
      toDoList.removeChild(newLi);
    });

    // set class of the new list item
    newLi.setAttribute('class', 'mdl-list__item');

    // attach the checkbox to the li
    newLi.appendChild(actionSpan);

    // attach the content span to the li
    newLi.appendChild(contentSpan);

    // attach the delete button to the li
    newLi.appendChild(deleteButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

    // update the MDL elements
    componentHandler.upgradeDom();
  });
}



window.onload = function() {
  onReady();
};
