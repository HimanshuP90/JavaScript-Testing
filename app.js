const { checkAndGenerate, createElement } = require('./util');

const initApp = () => {
  // Initializes the app, registers the button click listener
  console.log('hello')
  const newUserButton = document.querySelector('#btnAddUser');
  console.log(newUserButton)
  newUserButton.addEventListener('click', addUser);
};

const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM
  const newUserNameInput = document.querySelector('input#name');
  const newUserAgeInput = document.querySelector('input#age');

  const outputText = checkAndGenerate(
    newUserNameInput.value,
    newUserAgeInput.value
  );

  console.log(outputText)
  if (!outputText) {
    return;
  }

  const userList = document.querySelector('.user-list');

  const element = createElement('li', outputText, 'user-item');
  userList.appendChild(element);
};

// Start the app!
initApp();