// Define the array to hold to-do items
let todos = [];

// Function to add a new to-do item
function addTodo(item) {
  todos.push(item);
  console.log('Added:', item);
}

// Function to remove a to-do item
function removeTodo(index) {
  const item = todos.splice(index, 1);
  console.log('Removed:', item);
}

// Function to display the to-do list
function displayTodos() {
  console.log('Your to-do list:');
  todos.forEach((item, index) => {
    console.log(`${index + 1}: ${item}`);
  });
}

// Example usage:
addTodo('Learn JavaScript');
addTodo('Read about Node.js');
displayTodos();
removeTodo(0);
displayTodos();
