document.addEventListener('DOMContentLoaded', function() {
    // Query for the submit button and input task field
    const submit = document.getElementById('submit');
    const newTask = document.getElementById('task');
    const taskList = document.getElementById('tasks');

    
    submit.disabled = true;

    // Listen for input to be typed into the input field
    newTask.addEventListener('input', function() {
        // Enable/disable submit button based on input field value
        submit.disabled = !newTask.value.trim();
    });

    // Listen for submission of form
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const taskValue = newTask.value.trim();

        // Create a list item for the new task and add the task to it
        const listItem = document.createElement('li');
        listItem.textContent = taskValue;

        
        taskList.appendChild(listItem);

        newTask.value = '';

       
        return false;
    });
});
